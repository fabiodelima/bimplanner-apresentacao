# AGENTS.md

Este arquivo orienta agentes de IA (Claude Code, Cursor, Windsurf, Copilot, etc.) ao trabalhar neste repositório.

---

## O que é este projeto

Apresentação de pitch/banca do **BIMPlanner** para a disciplina PCI0031 — PPGCI/UFRGS. Deck com 13 slides em **React + Vite + Reveal.js** (scroll mode). Dev: `npm run dev`. Build: `npm run build`. Deploy: Docker → Coolify → `press.fabiollima.com/bimplanner`.

---

## Arquivos de referência (leia na ordem)

| Arquivo | Propósito |
|---|---|
| **HANDOFF.md** | Status dos slides, decisões registradas, próximo trabalho |
| **AGENTS.md** (este) | Estrutura de código, vocabulário, workflow |
| **DESIGN.md** | Sistema visual completo — cores, tipografia, componentes, regras |
| **MIGRATE_TO_REVEALJS.md** | Plano de migração executado — histórico de decisões |

---

## Estrutura de arquivos

```
BIMPlanner_Apresentação/
├── index.html             ← entry point Vite (não editar manualmente)
├── package.json
├── vite.config.js         ← base: '/bimplanner/' — não alterar
├── Dockerfile
├── nginx.conf
├── _legacy/               ← HTML/CSS/JS original (referência, não deletar)
│   ├── index.html
│   ├── css/
│   └── js/
├── v4/fonts/              ← arquivos .ttf (copiados de Stack/v4/fonts/)
└── src/
    ├── main.jsx
    ├── App.jsx            ← inicializa Reveal.js via useEffect
    ├── slides/
    │   ├── index.js       ← registro de todos os slides
    │   ├── S01Cover.jsx
    │   └── S02Problem.jsx
    └── styles/
        ├── tokens.css     ← @font-face + :root — NUNCA alterar
        ├── base.css       ← reset, section.slide base (sem overflow:hidden)
        ├── chrome.css     ← .slide-meta, .logo-mark, .slide-prog
        ├── s01-cover.css
        └── s02-problem.css
```

**Fontes:** `v4/fonts/*.ttf` — referenciados via `../../v4/fonts/` em `tokens.css`. Não mover.

---

## Como adicionar um slide

### 1. Criar o CSS
```
src/styles/sNN-nome.css
```
Usar a classe `.s-nome` como seletor raiz. Copiar padrão de `s02-problem.css`.

### 2. Criar o componente JSX
```jsx
// src/slides/SNN Nome.jsx
import '../styles/sNN-nome.css';

export default function SNNNome() {
  return (
    <>
      <div className="slide-inner">
        {/* conteúdo */}
      </div>
    </>
  );
}
```

### 3. Registrar em src/slides/index.js
```js
import SNNNome from './SNNNome';

const slides = [
  // ...slides anteriores
  { id: 'sNN-nome', cls: 's-nome', Component: SNNNome },
];
```

O `cls` é aplicado como className na `<section>` pelo `App.jsx` — obrigatório para os seletores CSS funcionarem.

### 4. Atualizar HANDOFF.md
Marcar slide como ✅ e registrar decisões relevantes.

---

## Design system — Blueprint Editorial

### Canvas
- Tamanho fixo: `1920 × 1080px`
- Scaling: gerenciado pelo Reveal.js em scroll mode
- Fundo: **sempre `#4474c5`** (`--bp`). Nunca trocar por escuro ou preto.

### Paleta
| Token | Valor | Uso |
|---|---|---|
| `--bp` | `#4474c5` | Background principal |
| `--amber` | `#e8c97a` | Destaque primário — KPIs, CTAs, itálico de título |
| `--blue` | `#a8c0e0` | Status BIM, badges acadêmicos |
| `--white` | `#f8faff` | Texto principal |
| `--dim` | `rgba(248,250,255,0.75)` | Texto secundário |
| `--faint` | `rgba(248,250,255,0.45)` | Labels, mono menor |
| `--muted` | `rgba(248,250,255,0.30)` | Rodapé, detalhe |

### Tipografia
| Variável | Família | Uso |
|---|---|---|
| `--serif` | DM Serif Display | Títulos (`h1.title`, `h2.head`), números de destaque |
| `--sans` | DM Sans | Corpo, subtítulos, UI |
| `--mono` | DM Mono | Labels, eyebrows, código, metadados |

- `h1.title`: 130px, `--serif`, `line-height: .98`
- `h2.head`: 84px, `--serif`
- Texto em itálico em títulos → cor `--amber` (via `<em>`)
- Corpo mínimo: 24px (`p.lead`)

### Motif de grade
Todo slide tem duas grades sobrepostas via `::before` e `::after`:
- Grade fina 48px (`--line`)
- Grade grossa 240px (`--lineB`)
Controladas por `--motif-grid-opacity` (padrão `1`). Não remover.

### Glass cards
Usar `var(--glass-bg)`, `var(--glass-blur)`, `var(--glass-border)`, `var(--glass-shadow)`. Máximo **1 blob decorativo por slide**.

### Orbs decorativos
Radial gradients absolutos para profundidade. Ver `.cover-orb` / `.cover-orb2` em `s01-cover.css` como padrão.

---

## Regras invioláveis

- **Zero emojis** em qualquer slide
- **Zero Tailwind** — CSS semântico puro
- `--bp` nunca substituído por dark (`#0f2a4a` é proibido)
- `border-radius` máximo: `14px` (`--r`) em cards; pílulas usam `100px`
- `tokens.css` — não alterar nenhuma linha
- `base: '/bimplanner/'` no `vite.config.js` — não alterar
- Não instalar `@revealjs/react`, GSAP, Framer Motion, temas padrão do Reveal

---

## Reveal.js — configuração ativa

```js
{
  width: 1920,             // OBRIGATÓRIO — deve bater com o CSS de section.slide
  height: 1080,            // OBRIGATÓRIO — sem isso Reveal usa padrão 960×700 e escala errado
  view: 'scroll',          // modo de rolagem contínua
  scrollSnap: 'mandatory', // snap entre slides
  scrollProgress: true,    // barra de progresso lateral
  transition: 'fade',
  autoAnimate: true,       // animações data-auto-animate entre slides similares
  controls: false,
  progress: false,
  hash: true,
}
```

Inicializado em `App.jsx` via `useEffect`. A guarda `if (deckRef.current) return` evita dupla inicialização no React StrictMode.

**Atenção:** `html, body { background: var(--bp) }` em `base.css` é obrigatório. Se usar `#000`, o preto vaza nas bordas quando o Reveal escala os slides (letterboxing visível).

---

## Conteúdo — 13 slides previstos

| # | Classe | Título | Apresentador | Tag |
|---|---|---|---|---|
| 01 | `.s-cover` | Capa | Louise | pitch |
| 02 | `.s-problem` | O Problema | Valentina | pitch |
| 03 | `.s-patent` | A Patente | Pâmela | pitch |
| 04 | `.s-dashboard` | Dashboard AEC | Louise | pitch |
| 05 | `.s-revit` | BIMPlanner no Revit | Fábio | pitch |
| 06 | `.s-market` | Mercado & Concorrentes | Piero | pitch |
| 07 | `.s-swot` | Análise SWOT | Piero | acad |
| 08 | `.s-framework` | Framework Lago | Franciele | acad |
| 09 | `.s-plans` | Modelo de Negócio | Franciele | pitch |
| 10 | `.s-costs` | Estrutura de Custos | Fábio | acad |
| 11 | `.s-team` | O Time | Louise | pitch |
| 12 | `.s-roadmap` | Roadmap | Pâmela | acad |
| 13 | `.s-close` | Encerramento | Valentina | pitch |

---

## Referências de conteúdo

- `_legacy/index.html` — HTML original dos slides 01 e 02, completo
- `../context.md` — documento master com todos os dados do produto (mercado, time, patente, modelo de negócio). **Única fonte da verdade para conteúdo.**
- `../v4/index.html` — versão anterior completa (17 slides). Referência visual dos slides pendentes.

---

## Vocabulário de elementos (shorthand)

| Termo do usuário | Termo técnico | Elemento | Escopo | Descrição |
|---|---|---|---|---|
| **badge/chip de rodapé** | badge / meta-tag | `.meta-tag.pitch` / `.meta-tag.acad` | Global (Viewport) | Pílula de categoria (fixa bottom-left) |
| **badge/chip de cabeçalho** | eyebrow / chip | `.chip` (sempre azul) | Global (Viewport) | Pílula com número + nome (fixa top-left) |
| **logo** | logo-mark | `.logo-mark` | Global (Viewport) | Wordmark BIM+Planner (fixa bottom-right) |
| **título da página** | head / title | `h2.head` (padrão) / `h1.title` (capa) | Por slide | Heading principal do slide |
| **cards** | glass card | `.glass` / `.prob-card` (s02) | Por slide | Painel glassmorphic elevado com conteúdo |
| **grid de estatísticas** | stats grid | `.prob-stats` + `.prob-stat` | s02 | KPIs em grade: número grande + label mono |
| — | inner | `.slide-inner` | Por slide | Container de conteúdo; respeita safe zone |
| — | UI Global | `.chrome-ui` | Global (App.jsx) | Overlay fixo que contém badges e logo |
| — | motif | `::before` + `::after` em `section.slide` | Global | Grade de fundo obrigatória |
| **barra de progresso** | scroll progress | Reveal.js `scrollProgress: true` | Global | Barra lateral gerada pelo Reveal — não replicar manualmente |
| — | orb | radial-gradient absoluto | Por slide | Blob decorativo de background (máx 1 extra/slide) |
| **amber accent** | amber accent | `<em>` em `h1.title` / `h2.head` | Por slide | Itálico serif → `--amber` automaticamente |
| **documento da patente** | documento da patente | `.patent-doc` | s03 | Mockup de documento oficial da patente |
| **carimbo** | carimbo | `.carimbo` | s03 | Carimbo de "Concedido" no documento da patente |

---

## Workflow: estratégias para limites de contexto

### Um slide por vez
- Ler só `src/styles/sNN-*.css` + `src/slides/SNN*.jsx` do slide em questão
- Consultar `../context.md` por seção, não por inteiro
- `_legacy/index.html` como referência de conteúdo dos slides pendentes

### Sequência para cada novo slide
1. Criar `src/styles/sNN-nome.css`
2. Criar `src/slides/SNNNome.jsx` importando o CSS
3. Registrar em `src/slides/index.js` com `id`, `cls` e `Component`
4. Atualizar `HANDOFF.md`

### Handoff: manter sempre atualizado
`HANDOFF.md` é o documento de passagem de contexto entre sessões. Atualizar ao fim de cada slide — novo ou editado.

Atualizar após:
- Qualquer slide concluído ou revisado
- Decisões de design não óbvias
- Bugs ou problemas conhecidos
- Alterações em componentes globais (`tokens.css`, `base.css`, `chrome.css`, `App.jsx`)
