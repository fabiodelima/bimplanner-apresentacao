import { useEffect, useState } from 'react';
import '../styles/toc.css';
import slides from '../slides';

const LABELS = {
  pitch: 'Pitch',
  acad: 'Acadêmico',
};

// Ativa o modo ?print-pdf na própria aba (sem mudar a URL visível),
// dispara window.print() e limpa o parâmetro logo após o diálogo fechar.
function triggerPrint() {
  // Injeta ?print-pdf no histórico sem navegar
  const printUrl = new URL(window.location.href);
  printUrl.search = '?print-pdf';
  window.history.replaceState(null, '', printUrl.toString());

  // Pequeno delay para o reveal.js detectar a mudança de URL e aplicar o layout
  setTimeout(() => {
    window.print();

    // Restaura a URL original após o diálogo de impressão ser dispensado
    const cleanUrl = new URL(window.location.href);
    cleanUrl.search = '';
    window.history.replaceState(null, '', cleanUrl.toString());
  }, 300);
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
                  title="Exportar como PDF via Ctrl+P"
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
