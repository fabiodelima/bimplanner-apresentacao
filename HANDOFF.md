# BIMPlanner — Handoff

**Versão:** 6.0 — Blueprint Editorial · React + Vite + Reveal.js  
**Dev:** `npm run dev` → `localhost:5173/bimplanner/`  
**Build:** `npm run build` → `dist/`  
**Deploy:** GitHub → Coolify → `press.fabiollima.com/bimplanner`  
**Design system:** `DESIGN.md`  
**Instruções de trabalho:** `AGENTS.md`  
**Conteúdo:** `../context.md` — única fonte da verdade

---

## Status dos slides

| # | Componente | Classe | Título | Apresentador | Tag | Status |
|---|---|---|---|---|---|---|
| 01 | `S01Cover.jsx` | `.s-cover` | Capa | Louise | pitch | ✅ |
| 02 | `S02Problem.jsx` | `.s-problem` | O Problema | Valentina | pitch | ✅ |
| 03 | `S03Patent.jsx` | `.s-patent` | A Patente | Pâmela | pitch | ✅ |
| 04 | `S04Dashboard.jsx` | `.s-dashboard` | Dashboard AEC | Louise | pitch | ⬜ |
| 05 | `S05Revit.jsx` | `.s-revit` | BIMPlanner no Revit | Fábio | pitch | ⬜ |
| 06 | `S06Market.jsx` | `.s-market` | Mercado & Concorrentes | Piero | pitch | ⬜ |
| 07 | `S07Swot.jsx` | `.s-swot` | Análise SWOT | Piero | acad | ⬜ |
| 08 | `S08Framework.jsx` | `.s-framework` | Framework Lago | Franciele | acad | ⬜ |
| 09 | `S09Plans.jsx` | `.s-plans` | Modelo de Negócio | Franciele | pitch | ⬜ |
| 10 | `S10Costs.jsx` | `.s-costs` | Estrutura de Custos | Fábio | acad | ⬜ |
| 11 | `S11Team.jsx` | `.s-team` | O Time | Louise | pitch | ⬜ |
| 12 | `S12Roadmap.jsx` | `.s-roadmap` | Roadmap | Pâmela | acad | ⬜ |
| 13 | `S13Close.jsx` | `.s-close` | Encerramento | Valentina | pitch | ⬜ |

**Legenda:** ✅ Concluído · 🔧 Em progresso · ⬜ Pendente

---

## Arquitetura atual

```
BIMPlanner_Apresentação/
├── index.html             ← entry point Vite
├── package.json
├── vite.config.js         ← base: '/bimplanner/'
├── Dockerfile
├── nginx.conf
├── _legacy/               ← HTML/JS/CSS original (referência)
├── v4/fonts/              ← .ttf locais (DM Sans, DM Serif, DM Mono)
└── src/
    ├── main.jsx
    ├── App.jsx            ← Reveal.js init via useEffect
    ├── slides/
    │   ├── index.js       ← { id, cls, Component } por slide
    │   ├── S01Cover.jsx   ← ✅
    │   └── S02Problem.jsx ← ✅
    └── styles/
        ├── tokens.css     ← NÃO ALTERAR
        ├── base.css
        ├── chrome.css
        ├── s01-cover.css  ← ✅
        └── s02-problem.css ← ✅
```

---

## Último trabalho

### 2026-05-07 — Migração React + Vite + Reveal.js

Migração completa de HTML/CSS/JS puro → React + Vite + Reveal.js:

- Arquivos legados preservados em `_legacy/`
- Fontes copiadas para `v4/fonts/` dentro do projeto (path relativo de `tokens.css` mantido sem alteração)
- `vite.config.js`, `Dockerfile`, `nginx.conf`, `.gitignore` criados
- `src/App.jsx` — Reveal.js inicializado em `useEffect` com scroll mode
- `src/slides/index.js` — campo `cls` adicionado (aplica classe CSS na `<section>`)
- `S01Cover.jsx` e `S02Problem.jsx` migrados do HTML original
- `base.css` adaptado: removidos `overflow:hidden`, `#deck-stage`, `#deck-canvas`, `opacity:0` em `section.slide`
- `chrome.css` adaptado: removidos TOC overlay e `#nav-hint` (deck.js UI)
- `npm run build` — ✅ sem erros, fontes bundled em `dist/assets/`

### 2026-05-07 — Refatoração de Chrome Global

Elementos fixos (badges e logo) movidos para uma camada global fora do frame dos slides:

- `App.jsx` gerencia estado `currentMeta` via listeners `slidechanged`.
- `chrome.css` usa `position: fixed` para ancorar elementos nos cantos da tela.
- Logo aumentado para `42px` com sombra suave para visual premium.
- Badges de cabeçalho (top-left) e rodapé (bottom-left) agora são dinâmicos e independentes do DOM do slide.
- Slides individuais limpos (removidos `.chip` e `.slide-meta`).

### 2026-05-07 — Refinamentos de UI e Zoom

Ajustes finais de escala e legibilidade:

- **Redução de Tamanho**: Chrome UI reduzida em 20% (Logo 42px, fonts 13px) para visual mais elegante.
- **Sombras**: Suavizadas em 50% para melhor integração.
- **Independência de Zoom**: Adicionado listener em `App.jsx` para injetar `--browser-zoom` (devicePixelRatio) e compensar escala via CSS `transform`.
- **Slide 02 Stats**: Números aumentados para 82px/110px e labels para 19px.

---

### 2026-05-07 — Refinamento do Slide 03 (A Patente)

Refinamento visual e estrutural do artefato da patente:

- **Documento**: Proporções fixadas em 1.414 (A4), layout plano (sem transform 3D) para legibilidade.
- **Carimbo**: Termo "carimbo" oficializado. Reposicionado para o canto superior direito com estilos específicos (90x90px, #A12B2B, DM Mono).
- **Código de Barras**: Centralizado horizontalmente em relação ao documento.
- **Padrão Visual**: Tipografia serifada oficial e cards glassmorphic integrados.
- **Documentação**: `AGENTS.md` e `HANDOFF.md` atualizados com o novo vocabulário.

---

## Próximo
- **Slide 04 — `.s-dashboard`** (Louise): criar `src/styles/s04-dashboard.css` + `src/slides/S04Dashboard.jsx`
  - Este é o slide do mockup interativo. Requer cuidado extra com a sidebar e views.
- Registrar em `src/slides/index.js`
- Push para GitHub → trigger rebuild no Coolify

---

## Decisões de design registradas

| Data | Decisão | Motivo |
|---|---|---|
| ... | ... | ... |
| 2026-05-07 | UI Global (Chrome) fixa no viewport | "Player UI" consistente, fora do frame de escala do Reveal |
| 2026-05-07 | Escala compensatória de zoom | Chrome UI mantém tamanho físico constante independente do zoom do browser |
| 2026-05-07 | Logo em 42px e badges 13px | Equilíbrio entre legibilidade e discrição (redução de 20% da v6 inicial) |
| 2026-05-07 | Sombras suaves (10-15% opacidade) | Evita visual "sujo" e integra melhor os badges flutuantes |
| 2026-05-07 | Metadata centralizado em `slides/index.js` | Facilita manutenção e adição de novos slides |


---

## Bugs / Problemas conhecidos

_Nenhum no momento._

---

## Contexto para outros LLMs

Se você não é Claude ou está iniciando uma nova sessão:

1. Leia `AGENTS.md` — estrutura de arquivos, workflow para adicionar slides, regras invioláveis
2. Leia `DESIGN.md` — sistema visual completo (cores, tipografia, componentes)
3. Consulte `../context.md` para dados de conteúdo (mercado, time, patente, etc.)
4. Para referência visual dos slides pendentes: `_legacy/index.html` (slides 01-02) ou `../v4/index.html` (17 slides)
5. Sempre atualizar este HANDOFF.md ao concluir trabalho
