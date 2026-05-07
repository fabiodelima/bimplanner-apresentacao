[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](react.md) [繁體中文](react.md)

* Languages
  + [English](react.md)
  + [繁體中文](react.md)
* Getting Started
  + [Home](index.md)
  + [Demo](/?demo)
  + [Installation](installation.md)
  + [React](react.md)
* Support
  + [Video Course](/course)
  + [Sponsor reveal.js](https://github.com/sponsors/hakimel)
* Content
  + [Markup](markup.md)
  + [Markdown](markdown.md)
  + [Backgrounds](backgrounds.md)
  + [Media](media.md)
  + [Lightbox](lightbox.md)
  + [Code](code.md)
  + [Math](math.md)
  + [Fragments](fragments.md)
  + [Links](links.md)
  + [Layout](layout.md)
  + [Slide Visibility](slide-visibility.md)
* Customization
  + [Themes](themes.md)
  + [Transitions](transitions.md)
  + [Config Options](config.md)
  + [Presentation Size](presentation-size.md)
* Features
  + [Vertical Slides](vertical-slides.md)
  + [Auto-Animate](auto-animate.md)
  + [Auto-Slide](auto-slide.md)
  + [Speaker View](speaker-view.md)
  + [Scroll View](scroll-view.md)
  + [Slide Numbers](slide-numbers.md)
  + [Jump to Slide](jump-to-slide.md)
  + [Touch Navigation](touch-navigation.md)
  + [PDF Export](pdf-export.md)
  + [Overview Mode](overview.md)
  + [Fullscreen Mode](fullscreen.md)
* API
  + [Initialization](initialization.md)
  + [API Methods](api.md)
  + [Events](events.md)
  + [Keyboard](keyboard.md)
  + [Presentation State](presentation-state.md)
  + [postMessage](postmessage.md)
* Initialization
  + [Using Plugins](plugins.md)
  + [Built-in Plugins](plugins.md#built-in-plugins)
  + [Creating a Plugin](creating-plugins.md)
  + [Multiplex](multiplex.md)
  + [Third Party Plugins](https://github.com/hakimel/reveal.js/wiki/Plugins,-Tools-and-Hardware)
* Other
  + [Upgrade Instructions](upgrading.md)
  + [Changelog](https://github.com/hakimel/reveal.js/releases)
  + [React (Manual Setup)](react-legacy.md)

React reveal.js 6.0.0
=====================

[@revealjs/react](https://www.npmjs.com/package/@revealjs/react) is the official React wrapper for reveal.js. Describe your slides as React components and let the package handle initialization, syncing and cleanup.

Installation
------------

Install the package along with its peer dependencies:

```
npm i @revealjs/react reveal.js react react-dom
# or
yarn add @revealjs/react reveal.js react react-dom
```

The package ships only the React bindings. You still need to import the reveal.js CSS, a theme, and any plugins your deck uses.

Basic Deck
----------

Render a `Deck` with one or more `Slide` children and import the core reveal.js styles:

```
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h1>Hello</h1>
        <p>My first Reveal deck in React.</p>
      </Slide>

      <Slide background="#111827">
        <h2>Second slide</h2>
      </Slide>
    </Deck>
  );
}
```

For vertical slides, wrap `Slide` components in `Stack`:

```
import { Deck, Slide, Stack } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Slide>Intro</Slide>

      <Stack>
        <Slide>Vertical 1</Slide>
        <Slide>Vertical 2</Slide>
      </Stack>
    </Deck>
  );
}
```

Fragments
---------

Use `Fragment` to reveal content one step at a time. By default it renders as a `<span>` — use the `as` prop to change the element type, or `asChild` to merge the fragment behavior onto an existing element:

```
import { Deck, Slide, Fragment } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h2>Step by step</h2>
        <Fragment as="p">First point</Fragment>
        <Fragment as="p">Second point</Fragment>
        <Fragment asChild>
          <p>Third point</p>
        </Fragment>
      </Slide>
    </Deck>
  );
}
```

Pass an `animation` prop for a specific [fragment style](fragments.md), and `index` to control the reveal order:

```
<Fragment animation="fade-up">Fades up</Fragment>
<Fragment animation="highlight-red" index={2}>Highlighted last</Fragment>
```

Code
----

`Code` renders a syntax-highlighted code block through the reveal.js highlight plugin. Pass your source as a string child or via the `code` prop, and register the plugin on `Deck`:

```
import { Deck, Slide, Code } from '@revealjs/react';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

export function Presentation() {
  return (
    <Deck plugins={[RevealHighlight]}>
      <Slide>
        <Code language="javascript">
          {`const greeting = 'Hello, world!';
console.log(greeting);`}
        </Code>
      </Slide>
    </Deck>
  );
}
```

Set `lineNumbers` to show a gutter. Pass a range string to step through specific lines as fragments:

```
<Code language="javascript" lineNumbers="1|2-3">
  {`const a = 1;
const b = 2;
const c = a + b;`}
</Code>
```

Use `startFrom` to offset the displayed line numbers, and `noEscape` when your snippet contains HTML that should be treated as literal characters:

```
<Code language="python" lineNumbers startFrom={10}>
  {`def greet():
    print("Hello")`}
</Code>
```

The `code` prop is an alternative to string children, useful when your source comes from a variable or import:

```
const snippet = `console.log('Hi')`;

<Code language="javascript" code={snippet} />
```

`Code` normalizes indentation automatically (controlled by the `trim` prop, which is `true` by default), so you can indent your source to match the surrounding JSX without affecting the rendered output.

Markdown
--------

`Markdown` renders reveal.js-compatible markdown slides directly — no reveal.js markdown plugin required. Pass your content as a string child or via the `markdown` prop:

```
import { Deck, Markdown } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck>
      <Markdown>
        {`
          ## Title
          Hello world
        `}
      </Markdown>
    </Deck>
  );
}
```

Slides are split by `---` on its own line (the `separator` default). Use `verticalSeparator` to also create vertical stacks from within the same `Markdown` block:

```
<Markdown
  separator="^\n---\n$"
  verticalSeparator="^\n--\n$"
>
  {`
    ## Slide 1

    --

    ## Slide 1.1 (vertical)

    ---

    ## Slide 2
  `}
</Markdown>
```

### Speaker notes

Lines matching the `notesSeparator` pattern (default `Notes:`) become speaker notes:

```
<Markdown>
  {`
    ## My Slide

    Notes:
    These lines become speaker notes.
  `}
</Markdown>
```

### Element & slide attributes

The same comment-based attribute syntax as the core markdown plugin is supported. Use `<!-- .element: -->` to add attributes to the preceding element and `<!-- .slide: -->` to add attributes to the slide itself:

```
## My Slide
<!-- .slide: data-background="#111827" -->

- First item <!-- .element: class="fragment" -->
- Second item <!-- .element: class="fragment" -->
```

### External markdown

Use the `src` prop to load markdown from an external file. The component fetches the file asynchronously and renders nothing until the content is ready:

```
<Markdown src="/slides/content.md" />
```

### Options

Pass rendering options through the `options` prop. Set `animateLists` to automatically wrap every list item as a fragment, and `smartypants` to convert straight quotes and dashes to typographic equivalents:

```
<Markdown options={{ animateLists: true, smartypants: true }}>
  {`
    ## My Slide

    - First item
    - Second item
    - Third item
  `}
</Markdown>
```

Any other option accepted by [Marked](https://marked.js.org/) can be passed through `options` as well.

`Markdown` accepts the same slide props as `Slide` — `background`, `backgroundColor`, `autoAnimate`, `transition`, and so on — which are applied to every top-level slide in the block. Raw `data-*` attributes are forwarded to the underlying `<section>` elements.

Configuration
-------------

Pass any [reveal.js config option](config.md) through the `config` prop on `Deck`. Plugins are registered separately via `plugins` and are applied once at initialization time, matching reveal.js's plugin lifecycle.

```
import { Deck, Slide } from '@revealjs/react';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/plugin/highlight';

export function Presentation() {
  return (
    <Deck
      config={{
        width: 1280,
        height: 720,
        hash: true,
        transition: 'slide',
      }}
      plugins={[RevealHighlight]}
    >
      <Slide>Configured deck</Slide>
    </Deck>
  );
}
```

`Slide` exposes a number of convenient props that map to reveal.js `data-*` attributes on the underlying `<section>` element:

* **Background** — `background`, `backgroundColor`, `backgroundImage`, `backgroundVideo`, `backgroundVideoLoop`, `backgroundVideoMuted`, `backgroundIframe`, `backgroundGradient`, `backgroundSize`, `backgroundPosition`, `backgroundRepeat`, `backgroundOpacity`, `backgroundTransition`
* **Auto-animate** — `autoAnimate`, `autoAnimateId`, `autoAnimateRestart`, `autoAnimateUnmatched`, `autoAnimateEasing`, `autoAnimateDuration`, `autoAnimateDelay`
* **Slide options** — `transition`, `transitionSpeed`, `autoSlide`, `visibility`, `notes`, `backgroundInteractive`, `preload`

Any additional `data-*` attributes are passed through as-is to the `<section>` element.

Events
------

Use event props on `Deck` to respond to reveal.js lifecycle and navigation events:

```
import { Deck, Slide } from '@revealjs/react';

export function Presentation() {
  return (
    <Deck
      onReady={(deck) => console.log('Ready', deck)}
      onSlideChange={(event) => console.log('Slide changed', event.indexh, event.indexv)}
      onFragmentShown={(event) => console.log('Fragment shown', event.fragment)}
    >
      <Slide>Intro</Slide>
      <Slide>Next</Slide>
    </Deck>
  );
}
```

Available event props: `onReady`, `onSync`, `onSlideSync`, `onSlideChange`, `onSlideTransitionEnd`, `onFragmentShown`, `onFragmentHidden`, `onOverviewShown`, `onOverviewHidden`, `onPaused`, `onResumed`.

Reveal API
----------

Use `useReveal()` inside the deck tree to call the reveal.js API from your own components:

```
import { Deck, Slide, useReveal } from '@revealjs/react';

function NextButton() {
  const deck = useReveal();

  return <button onClick={() => deck?.next()}>Next slide</button>;
}

export function Presentation() {
  return (
    <Deck>
      <Slide>
        <h2>Controlled from React</h2>
        <NextButton />
      </Slide>
    </Deck>
  );
}
```

To access the reveal.js instance outside of the component tree, pass a `deckRef` to `Deck`:

```
import { useRef } from 'react';
import { Deck, Slide } from '@revealjs/react';
import type { RevealApi } from 'reveal.js';

export function Presentation() {
  const deckRef = useRef<RevealApi | null>(null);

  return (
    <Deck deckRef={deckRef}>
      <Slide>Hello</Slide>
    </Deck>
  );
}
```

How It Works
------------

* `Deck` creates one reveal.js instance on mount and destroys it on unmount. Initialization is asynchronous — `onReady` fires once `reveal.initialize()` resolves, after which the instance is also accessible via `useReveal()` and `deckRef`.
* `Deck` calls `reveal.sync()` when the rendered slide structure changes — that is, when slides are added, removed, reordered, or regrouped into stacks. Ordinary content updates inside a slide do not trigger a full sync.
* `Slide` handles slide-level `data-*` attribute updates locally with `reveal.syncSlide()`, keeping per-slide changes efficient.
* `config` is shallow-compared on each render so that `reveal.configure()` is only called when a value actually changes.
* `plugins` are initialization-only. The prop is captured once on first mount and ignored on subsequent renders.
* Event props are wired with `deck.on()` after initialization and cleaned up with `deck.off()`. Changing a callback between renders swaps the listener automatically.

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/react.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)