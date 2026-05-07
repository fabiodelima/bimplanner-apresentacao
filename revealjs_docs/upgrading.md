[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](upgrading.md) [繁體中文](upgrading.md)

* Languages
  + [English](upgrading.md)
  + [繁體中文](upgrading.md)
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

Upgrading From Version 5 to 6.0
===============================

reveal.js 6.0 switches from gulp to [Vite](https://vite.dev/) for building and running the development server. After pulling the latest changes, run `npm install` to get the updated dependencies. The dev server is still started with `npm start`.

### Update ES Module Paths

The ES module build has been renamed from `.esm.js` to `.mjs`. Update any direct file references:

| Old path | New path |
| --- | --- |
| dist/reveal.esm.js | dist/reveal.mjs |
| plugin/markdown/markdown.esm.js | dist/plugin/markdown.mjs |
| plugin/highlight/highlight.esm.js | dist/plugin/highlight.mjs |
| plugin/math/math.esm.js | dist/plugin/math.mjs |
| plugin/notes/notes.esm.js | dist/plugin/notes.mjs |
| plugin/search/search.esm.js | dist/plugin/search.mjs |
| plugin/zoom/zoom.esm.js | dist/plugin/zoom.mjs |

If you're importing reveal.js as an npm package, use the bare package specifiers instead and let the package exports handle resolution:

```
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
```

### Update Plugin Paths (HTML/CDN)

If you load plugins directly in HTML or via CDN, the plugin files have moved from `plugin/<name>/plugin.js` into the `dist/plugin/` directory:

| Old path | New path |
| --- | --- |
| plugin/notes/notes.js | dist/plugin/notes.js |
| plugin/markdown/markdown.js | dist/plugin/markdown.js |
| plugin/highlight/highlight.js | dist/plugin/highlight.js |
| plugin/math/math.js | dist/plugin/math.js |
| plugin/search/search.js | dist/plugin/search.js |
| plugin/zoom/zoom.js | dist/plugin/zoom.js |
| plugin/highlight/monokai.css | dist/plugin/highlight/monokai.css |
| plugin/highlight/zenburn.css | dist/plugin/highlight/zenburn.css |

### Update CSS Paths (npm)

When importing via npm, the `dist/` prefix is no longer part of the public package API. Update any CSS imports to use the top-level package paths:

| Old path | New path |
| --- | --- |
| reveal.js/dist/reveal.css | reveal.js/reveal.css |
| reveal.js/dist/reset.css | reveal.js/reset.css |
| reveal.js/dist/theme/<name>.css | reveal.js/theme/<name>.css |

### TypeScript Types

TypeScript types are now bundled directly in the reveal.js package. If you were previously installing `@types/reveal.js` as a dev dependency you can remove it:

```
npm uninstall @types/reveal.js
```

The bundled types are independent from the community-maintained `@types/reveal.js`. If you were using those types, here's how the types map:

| @types/reveal.js | reveal.js 6.0 |
| --- | --- |
| Reveal.Api | RevealApi |
| Reveal.Options | RevealConfig |
| Reveal.PluginDefinition | RevealPlugin |

---

Upgrading From Version 3 to 4.0
===============================

We make a strong effort to avoid breaking changes but there are a couple in version 4.0. If you want to migrate an existing presentation follow these instructions.

### Update Asset Locations

Our JS and CSS assets have moved. In your presentation HTML, update the following `<script>` and `<link>` paths:

| Old location | New location |
| --- | --- |
| js/reveal.js | dist/reveal.js |
| css/reset.css | dist/reset.css |
| css/reveal.css | dist/reveal.css |
| css/theme/<theme-name>.css | dist/theme/<theme-name>.css |
| lib/css/monokai.css | plugin/highlight/monokai.css |
| lib/js/head.min.js | Deleted in 3.8.0 |

### Remove Print CSS from `<head>`

In your presentation HTML, remove the following script from the `<head>`. These styles are now baked into the reveal.css file.

```
<script>
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi)
    ? 'css/print/pdf.css'
    : 'css/print/paper.css';
  document.getElementsByTagName('head')[0].appendChild(link);
</script>
```

### Plugin Registration

If you keep a copy of the v3 /plugin directory there are *no breaking changes*. If you want to switch to the latest plugin versions, you'll need to update your `Reveal.initialize()` call to use the [new plugin registration syntax](plugins.md). Plugins are also available as ES modules.

```
<script src="dist/reveal.js"></script>
<script src="plugin/markdown/markdown.js"></script>
<script src="plugin/highlight/highlight.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown, RevealHighlight],
  });
</script>
```

### Removed Multiplex and Notes Server

The Multiplex and Notes Server plugins have moved out of reveal.js core to their own repositories. See their corresponding README's for usage instructions.

* <https://github.com/reveal/multiplex>
* <https://github.com/reveal/notes-server>

### Other

* Removed `Reveal.navigateTo`, use `Reveal.slide` instead.
* We've switched build systems to gulp & rollup. Make sure to `npm install` to get the latest dependencies. The server is still started with `npm start`, just like before.

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/upgrading.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)