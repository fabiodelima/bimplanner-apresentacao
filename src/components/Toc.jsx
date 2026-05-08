import { useEffect, useRef, useState } from 'react';
import '../styles/toc.css';
import slides from '../slides';

const LABELS = {
  pitch: 'Pitch',
  acad: 'Acadêmico',
};

// Carrega a apresentação em modo ?print-pdf num iframe oculto e
// dispara window.print() de dentro dele — a aba principal não é afetada.
function triggerPrint() {
  const origin   = window.location.origin;
  const pathname = window.location.pathname;
  const printUrl = `${origin}${pathname}?print-pdf`;

  // Evita criar um segundo iframe se o usuário clicar duas vezes
  if (document.getElementById('print-pdf-frame')) return;

  const iframe = document.createElement('iframe');
  iframe.id = 'print-pdf-frame';
  Object.assign(iframe.style, {
    position:   'fixed',
    right:      '0',
    bottom:     '0',
    width:      '0',
    height:     '0',
    border:     '0',
    visibility: 'hidden',
  });
  iframe.src = printUrl;

  iframe.onload = () => {
    // Aguarda o reveal.js inicializar e renderizar todos os slides
    setTimeout(() => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (e) {
        // Fallback: abre numa nova aba se o iframe for bloqueado (ex: CORS)
        window.open(printUrl, '_blank');
      }

      // Remove o iframe após o diálogo de impressão ser dispensado
      const cleanup = () => iframe.remove();
      iframe.contentWindow?.addEventListener?.('afterprint', cleanup, { once: true });
      setTimeout(cleanup, 60_000); // limpeza de segurança após 60s
    }, 1500); // tempo para todos os slides renderizarem
  };

  document.body.appendChild(iframe);
}

export default function Toc({ deckRef, currentIndex }) {
  const [open, setOpen] = useState(false);

  // Sync body class so chrome.css can hide chips when TOC is open
  useEffect(() => {
    document.body.classList.toggle('toc-open', open);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 't' || e.key === 'T') setOpen(v => !v);
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = (i) => {
    const deck = deckRef.current;
    if (!deck) return;
    const scroll = deck.scroll;
    if (scroll?.isActive() && scroll.slideTriggers?.length) {
      scroll.viewportElement.scrollTop = i * scroll.scrollTriggerHeight;
    } else {
      deck.slide(i);
    }
    setOpen(false);
  };

  return (
    <>
      <button
        className={`toc-btn${open ? ' open' : ''}`}
        onClick={() => setOpen(v => !v)}
        title="Sumário (T)"
        aria-label="Sumário"
      >
        <span className="toc-bars">
          <span /><span /><span />
        </span>
      </button>

      {open && (
        <div className="toc-overlay" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
          <div className="toc-panel">
            <div className="toc-header">
              <div className="toc-header-identity">
                <div className="toc-mark">BIM<span>Planner</span></div>
                <div className="toc-mark-sub">Pitch · PPGCI/UFRGS · Maio 2026</div>
              </div>
              <div className="toc-header-actions">
                <button
                  className="toc-action-btn"
                  onClick={triggerPrint}
                  title="Exportar como PDF (aguarde 2s para o diálogo abrir)"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Exportar PDF
                </button>
              </div>
            </div>
            <div className="toc-list">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  className={`toc-item${i === currentIndex ? ' cur' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <span className="toc-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="toc-t">{s.meta?.label || 'Capa'}</span>
                  <span className="toc-presenter">
                    {s.meta?.presenter ?? ''}
                  </span>
                  <span className={`toc-tag ${s.meta?.type || ''}`}>
                    {LABELS[s.meta?.type] ?? ''}
                  </span>
                </button>
              ))}
            </div>
            <div className="toc-foot">
              <kbd>T</kbd> sumário &nbsp;·&nbsp; <kbd>Esc</kbd> fechar
            </div>
          </div>
        </div>
      )}
    </>
  );
}
