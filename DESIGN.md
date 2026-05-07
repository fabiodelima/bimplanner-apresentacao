---
name: BIMPlanner — Blueprint Editorial
version: "6.0"
stack: "React 18 + Vite 5 + Reveal.js 5"
colors:
  primary:    "#4474c5"
  primary-2:  "#3a62a3"
  primary-3:  "#32528a"
  primary-4:  "#29487a"
  amber:      "#e8c97a"
  amber-dark: "#b89a3a"
  blue:       "#a8c0e0"
  white:      "#f8faff"
  green:      "#6bcf7f"
  red:        "#ff6b6b"
  dim:        "rgba(248,250,255,0.75)"
  faint:      "rgba(248,250,255,0.45)"
  muted:      "rgba(248,250,255,0.30)"
  line:       "rgba(10,30,80,0.08)"
  line-b:     "rgba(10,30,80,0.15)"
  line-c:     "rgba(10,30,80,0.32)"

typography:
  title:
    fontFamily: "DM Serif Display, serif"
    fontSize: "130px"
    fontWeight: "400"
    lineHeight: "0.98"
    letterSpacing: "-0.025em"
  head:
    fontFamily: "DM Serif Display, serif"
    fontSize: "84px"
    fontWeight: "400"
    lineHeight: "1.02"
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "24px"
    fontWeight: "300"
    lineHeight: "1.65"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "1.6"
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "13px"
    fontWeight: "400"
    letterSpacing: "0.14em"
  label-sm:
    fontFamily: "DM Mono, monospace"
    fontSize: "11px"
    fontWeight: "400"
    letterSpacing: "0.12em"
  logo-mark:
    fontFamily: "DM Sans + DM Serif Display (mixed)"
    fontSize: "42px"
    fontWeight: "800 / 400"
    letterSpacing: "-0.02em"

rounded:
  full: "100px"
  md: "14px"
  sm: "8px"
  xs: "4px"

spacing:
  slide-pad-v:  "90px"
  slide-pad-h:  "110px"
  meta-offset:  "34px"
  grid-fine:    "48px"
  grid-coarse:  "240px"
  gap-sm:       "6px"
  gap-md:       "18px"
  gap-lg:       "24px"
  gap-xl:       "48px"

components:
  slide:
    backgroundColor: "radial-gradient(amber glow) + primary"
    textColor: "white"
    width: "1920px"
    height: "1080px"
  chip:
    backgroundColor: "rgba(168,192,224,0.15)"
    textColor: "blue"
    typography: "label"
    fontSize: "13px"
    rounded: "full"
    padding: "6px 16px 6px 6px"
  meta-tag:
    backgroundColor: "rgba(255,255,255,0.1)"
    fontSize: "13px"
    rounded: "full"
    padding: "8px 20px"
  reveal-progress:
    color: "amber"
    note: "Gerado pelo Reveal.js scrollProgress — não customizar via CSS"
---

# BIMPlanner Design System — Blueprint Editorial

## Overview

Blueprint Editorial é o sistema visual do deck de pitch do BIMPlanner (PCI0031 — PPGCI/UFRGS). Apresentação React + Vite + Reveal.js em scroll mode, 1920×1080px. Cada slide é um componente JSX com CSS próprio importado. O sistema combina tipografia editorial serif pesada com uma paleta azul estrutural e acentos âmbar, criando um visual de blueprint técnico com profundidade glassmorphic.

O nome "Blueprint Editorial" reflete dois eixos: a origem no universo AEC/BIM (plantas técnicas em azul) e a influência de editorial de luxo na hierarquia tipográfica (títulos em serif display de grande escala, corpo leve).

---

## Colors

A paleta parte de um único azul estrutural (`#4474c5`, token `--bp`) que cobre 100% do background de todos os slides. Nunca substituir por dark ou preto — o sistema depende desta âncora para coerência.

**Hierarquia de texto sobre fundo azul:**
- `--white` `#f8faff` → texto principal, headings
- `--dim` `rgba(248,250,255,0.75)` → texto secundário, leads
- `--faint` `rgba(248,250,255,0.45)` → labels, mono menor
- `--muted` `rgba(248,250,255,0.30)` → rodapé, detalhes extremos

O âmbar (`#e8c97a`) é o único acento quente. Reservado a: KPIs de destaque, texto `<em>` em títulos serif, estado ativo/atual em componentes de navegação (TOC, dots de progresso), borda de badges "pitch".

O azul-claro (`#a8c0e0`) é o acento frio secundário. Reservado a: badges "acad", chips de eyebrow padrão, status BIM.

Verde (`#6bcf7f`) e vermelho (`#ff6b6b`) são cores de estado (status positivo/negativo). Não usar como decoração.

---

## Typography

Três famílias compõem o sistema. Todas locais (`.ttf` em `v4/fonts/`), sem dependência de rede.

| Variável | Família | Papel |
|---|---|---|
| `--serif` | DM Serif Display | Títulos, números KPI, logo "Planner" |
| `--sans` | DM Sans | Corpo, UI, logo "BIM" |
| `--mono` | DM Mono | Labels, eyebrows, metadados, teclado |

**Escala de título:**
- `h1.title` (130px, serif, `line-height: .98`) — usado em capas e slides de impacto máximo
- `h2.head` (84px, serif, `line-height: 1.02`) — slide heading padrão

**Regra de ênfase:** itálico em títulos serif (`<em>`) recebe automaticamente cor `--amber`. Não usar bold em serif — a família tem peso único (400).

**Corpo mínimo:** 24px (`p.lead`, DM Sans 300). Texto abaixo de 18px apenas em `--mono` com `letter-spacing` compensatório (≥ 0.12em).

**Logo-mark:** híbrido "BIM" (DM Sans 800, `--white`) + "Planner" (DM Serif Display 400 itálico, `--amber`). Instância única via `.chrome-ui` com 42px de tamanho e sombra suave.

---

## Layout

**Canvas fixo:** 1920×1080px absoluto. Scaling gerenciado pelo Reveal.js em scroll mode — não há JS customizado de escala. Coordenadas sempre em px absolutos no espaço de 1920×1080. **Requisito crítico:** a config do Reveal em `App.jsx` deve incluir `width: 1920, height: 1080`; sem isso, o Reveal usa padrão 960×700 e toda a escala fica errada.

**Padding interno padrão:** 90px vertical, 110px horizontal (`.slide-inner`). Não perfurar estes limites com conteúdo — a grade motif cria uma margem visual que requer esse espaço.

**Zona segura de metadados (Viewport Global):**
- Badge de categoria (bottom-left): 40px da borda.
- Logo (bottom-right): 40px da borda.
- Chip de cabeçalho (top-left): 40px da borda.
Ancorados via `position: fixed` e independentes do scaling do Reveal.js.

**Grade motif (obrigatória em todos os slides):**
- Grade fina: 48px, `rgba(10,30,80,0.08)` — via `section.slide::before`
- Grade grossa: 240px, `rgba(10,30,80,0.15)` — via `section.slide::after`
- Controlada por `--motif-grid-opacity` (padrão `1`). Nunca remover.

**Orbs decorativos de background:** dois radial-gradients por slide — âmbar no canto superior-direito, azul no canto inferior-esquerdo. Adicionais via CSS absoluto (`.cover-orb`, `.cover-orb2`). Máximo 1 orb extra por slide.

---

## Elevation & Depth

O sistema usa três camadas de profundidade:

1. **Background (z: 0):** orbs decorativos, radial-gradients no `section.slide`
2. **Motif (z: 1):** grade via `::before` / `::after` — decorativa, `pointer-events: none`
3. **Conteúdo (z: 2):** `.slide-inner`, cards, tipografia
4. **UI Global (z: 9999):** `.chrome-ui` (badges e logo). Ancorado ao viewport com `position: fixed` e escala independente de zoom (via JS bridge).

**Glass:** superfícies de conteúdo elevadas usam `--glass-bg` (9% branco) + `backdrop-filter: blur(28px)` + borda `--glass-border` (18% branco) + sombra multi-camada. Usar `.glass` como classe base. Máximo 1 blob decorativo por slide para não sobrecarregar o compositor.

---

## Shapes

`border-radius` máximo em qualquer componente: **14px** (`--r`). Exceção única: pílulas de badges e botões — `border-radius: 100px` (full).

| Token | Valor | Uso |
|---|---|---|
| `100px` | pílula | chips, meta-tags, toc-btn, dots |
| `--r` | `14px` | cards, glass panels, modais |
| `--rsm` | `8px` | toc-items, kbd, elementos menores |
| `4px` | — | detalhes micro (kbd) |

---

## Components

### Chip (badge de conteúdo / eyebrow label)
Pill com número de slide embutido. O `::before` exibe `data-n` como badge sólido invertido (texto `--bp` sobre fundo de acento).

**Regra de cor:** sempre `.chip` (azul) — independente de pitch ou acad. Amber é exclusivo do badge de rodapé (`.meta-tag.pitch`).

```html
<div class="chip" data-n="02">O Problema</div>
```

### Glass card
Superfície elevada padrão. Combinar `.glass` com conteúdo interno. Nunca nested glass-in-glass.

```html
<div class="glass">conteúdo</div>
```

### Meta tag (badge de categoria)
Sempre no `.slide-meta`, bottom do slide. Dois tipos mutuamente exclusivos por slide: `.pitch` (âmbar) ou `.acad` (azul).

```html
<span class="meta-tag pitch">Pitch · Título</span>
<span class="meta-tag acad">Acad · Título</span>
```

### Logo-mark
Instância padronizada do wordmark BIMPlanner. Sempre "BIM" em sans 800 + "Planner" em serif itálico âmbar.

```html
<div class="logo-mark">BIM<span>Planner</span></div>
```

### Reveal Scroll Progress
Barra de progresso lateral gerada automaticamente pelo Reveal.js (`scrollProgress: true`). Não replicar manualmente via `.slide-prog`.

### Slide meta bar
Barra de metadados no bottom de cada slide: badge de categoria à esquerda, logo-mark à direita. Sempre presente, sempre na zona segura (bottom 34px).

---

## Vocabulário de elementos (shorthand)

Termos usados nas conversas para referenciar elementos do deck sem precisar nomear classes ou arquivos.

| Termo técnico | Termo do usuário | Elemento CSS/HTML | Escopo | Descrição curta |
|---|---|---|---|---|
| **inner** | — | `.slide-inner` | Por slide | Container de conteúdo; respeita safe zone |
| **meta bar** | — | `.slide-meta` | Global (exceto capa) | Container inferior fixo — badge de rodapé + logo |
| **badge** / **meta-tag** | **badge de rodapé** | `.meta-tag.pitch` / `.meta-tag.acad` | Global (exceto capa) | Pílula de categoria no rodapé (pitch = âmbar, acad = azul) |
| **logo** / **logo-mark** | **logo** | `.logo-mark` | Global (exceto capa) | Wordmark BIM+Planner no rodapé direito |
| **eyebrow** / **chip** | **badge de conteúdo** | `.chip` / `.chip.amber` | Global (exceto capa) | Pílula com número + nome do slide, acima do título |
| **toc** | **menu de sumário** | `.toc-btn` (botão) + `.toc-overlay` (painel) — `toc.js` | Global | Botão canto superior direito + painel de navegação |
| **title** | **título da página** (capa) | `h1.title` | Capa | 130px serif — só na capa |
| **head** | **título da página** | `h2.head` | Por slide | 84px serif — heading padrão de slide |
| **lead** | — | `p.lead` | Por slide | 24px sans 300 — subtítulo / parágrafo principal |
| **glass card** | **cards** | `.glass` / `.prob-card` (s02) | Por slide | Painel elevado glassmorphic com conteúdo |
| **grid de estatísticas** | **grid de estatísticas** | `.prob-stats` + `.prob-stat` | s02 | KPIs: números 82px (highlight 110px), labels 19px |
| **orb** | — | radial-gradient absoluto | Por slide | Blob decorativo de background (máx 1 extra/slide) |
| **motif** | — | `::before` + `::after` em `section.slide` | Global | Grade fina 48px + grossa 240px — obrigatória |
| **progress bar** | **barra de progresso** | `.slide-prog` | Global | Barra inferior de progresso da apresentação |
| **safe zone** | — | padding de `.slide-inner` | Por slide | 90px v / 110px h — nunca perfurar |
| **meta zone** | — | bottom 34px | Por slide | Área do meta bar — sem conteúdo de slide aqui |
| **label** / **mono** | — | `--mono` (DM Mono) | Global | Labels, eyebrows, metadados |
| **amber accent** | — | `<em>` dentro de `h1.title` / `h2.head` | Por slide | Itálico serif → cor `--amber` automaticamente |

---

## Do's and Don'ts

**Do:**
- Usar `--bp` (#4474c5) como fundo em todos os slides
- Usar `<em>` dentro de `h1.title` e `h2.head` para acento âmbar
- Manter a grade motif visível (`--motif-grid-opacity: 1`)
- Usar DM Mono para qualquer label, eyebrow ou metadado
- Manter o logo-mark em todo slide via `.slide-meta`
- Respeitar o padding de 90px/110px no `.slide-inner`

**Don't:**
- Usar emojis em qualquer slide ou componente
- Usar Tailwind ou qualquer framework CSS
- Substituir `--bp` por dark (`#0f2a4a` ou similares)
- Exceder `border-radius: 14px` em cards (pílulas são exceção)
- Usar mais de 1 blob decorativo extra por slide
- Colocar conteúdo na zona de metadados (bottom 34px)
- Aninhar `.glass` dentro de `.glass`
- Usar bold em DM Serif Display (família tem apenas weight 400)
