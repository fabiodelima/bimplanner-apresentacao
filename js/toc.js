// ─── TOC overlay ──────────────────────────────────────────────────
const tocList    = document.getElementById('tocList');
const tocOverlay = document.getElementById('tocOverlay');

const slides = window.BIMDeck.slides();

// Build TOC list from slide data attributes
slides.forEach((s, i) => {
  const btn = document.createElement('button');
  btn.className = 'toc-item';
  const tag   = s.dataset.toctag || '';
  const label = tag === 'acad' ? 'Acadêmico' : tag === 'pitch' ? 'Pitch' : '';
  btn.innerHTML = `
    <span class="toc-n">${String(i + 1).padStart(2, '0')}</span>
    <span class="toc-t">${s.dataset.toc || 'Slide ' + (i + 1)}</span>
    <span class="toc-tag ${tag}">${label}</span>
  `;
  btn.addEventListener('click', () => { window.BIMDeck.go(i); close(); });
  tocList.appendChild(btn);
});

function open()       { tocOverlay.classList.add('show'); updateCur(window.BIMDeck.cur()); }
function close()      { tocOverlay.classList.remove('show'); }
function updateCur(c) { [...tocList.children].forEach((el, i) => el.classList.toggle('cur', i === c)); }

document.getElementById('tocBtn').addEventListener('click', () =>
  tocOverlay.classList.contains('show') ? close() : open()
);
tocOverlay.addEventListener('click', e => { if (e.target === tocOverlay) close(); });

window.BIMToc = { open, close, updateCur };
