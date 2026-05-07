// ─── Deck Engine ──────────────────────────────────────────────────
const slides = [...document.querySelectorAll('section.slide')];
let cur = 0;

function go(n) {
  n = Math.max(0, Math.min(slides.length - 1, n));
  slides[cur].classList.remove('active');
  cur = n;
  slides[cur].classList.add('active');
  updateProg();
  if (window.BIMToc) window.BIMToc.updateCur(cur);
}

function updateProg() {
  document.querySelectorAll('.slide-prog').forEach(pg => {
    pg.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('cur', i === cur));
  });
}

// Inject progress dots + motif-dots into every slide
slides.forEach((s, i) => {
  const pg = document.createElement('div');
  pg.className = 'slide-prog';
  slides.forEach((_, j) => {
    const d = document.createElement('div');
    d.className = 'dot' + (j === i ? ' cur' : '');
    pg.appendChild(d);
  });
  s.appendChild(pg);

  const md = document.createElement('div');
  md.className = 'motif-dots';
  s.insertBefore(md, s.firstChild);
});

// ─── Scale canvas to viewport ─────────────────────────────────────
const canvas = document.getElementById('deck-canvas');
function scaleCanvas() {
  const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
  canvas.style.transform = `scale(${scale})`;
}
scaleCanvas();
window.addEventListener('resize', scaleCanvas);

// ─── Keyboard navigation ──────────────────────────────────────────
window.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const toc = document.getElementById('tocOverlay');
  if (toc && toc.classList.contains('show')) {
    if (e.key === 'Escape') toc.classList.remove('show');
    return;
  }
  if      (['ArrowRight','ArrowDown',' ','PageDown'].includes(e.key)) { e.preventDefault(); go(cur + 1); }
  else if (['ArrowLeft','ArrowUp','PageUp'].includes(e.key))          { e.preventDefault(); go(cur - 1); }
  else if (e.key === 'Home')                                          { e.preventDefault(); go(0); }
  else if (e.key === 'End')                                           { e.preventDefault(); go(slides.length - 1); }
  else if ((e.key === 't' || e.key === 'T') && window.BIMToc)        { e.preventDefault(); window.BIMToc.open(); }
});

// Click right half = next, left half = prev
document.getElementById('deck-stage').addEventListener('click', e => {
  if (e.target.closest('.toc-overlay,.toc-btn,button,a,[onclick]')) return;
  go(e.clientX > window.innerWidth / 2 ? cur + 1 : cur - 1);
});

// ─── Nav hint auto-hide ───────────────────────────────────────────
const hint = document.getElementById('nav-hint');
let hintTimer = setTimeout(() => hint.style.opacity = '0', 3000);
document.addEventListener('mousemove', () => {
  hint.style.opacity = '1';
  clearTimeout(hintTimer);
  hintTimer = setTimeout(() => hint.style.opacity = '0', 2000);
});

window.BIMDeck = { go, slides: () => slides, cur: () => cur };
