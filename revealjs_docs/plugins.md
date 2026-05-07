[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](plugins.md) [繁體中文](plugins.md)

* Languages
  + [English](plugins.md)
  + [繁體中文](plugins.md)
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

Plugins
=======

Plugins can be used to extend reveal.js with additional functionality. To make use of a plugin, you'll need to do two things:

1. Include the plugin script in the document. (Some plugins may require styles as well.)
2. Tell reveal.js about the plugin by including it in the `plugins` array when initializing.

Here's an example:

```
<script src="dist/plugin/markdown.js"></script>
<script>
  Reveal.initialize({
    plugins: [RevealMarkdown],
  });
</script>
```

If you're using ES modules, we also provide module exports for all built-in plugins:

```
<script type="module">
  import Reveal from 'dist/reveal.mjs';
  import Markdown from 'dist/plugin/markdown.mjs';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

Built-in Plugins
----------------

A few common plugins which add support for [Markdown](markdown.md), [code highlighting](code.md) and [speaker notes](speaker-view.md) are included in our default [presentation boilerplate](https://github.com/hakimel/reveal.js/blob/master/index.html).

These plugins are distributed together with the reveal.js repo. Here's a complete list of all built-in plugins.

| Name | Description |
| --- | --- |
| RevealHighlight | Syntax highlighted [code](code.md). dist/plugin/highlight.js |
| RevealMarkdown | Write content using [Markdown](markdown.md). dist/plugin/markdown.js |
| RevealSearch | Press CTRL+Shift+F to search slide content. dist/plugin/search.js |
| RevealNotes | Show a [speaker view](speaker-view.md) in a separate window. dist/plugin/notes.js |
| RevealMath | Render [math equations](math.md). dist/plugin/math.js |
| RevealZoom | Alt+click to zoom in on elements (CTRL+click in Linux). dist/plugin/zoom.js |

All of the above are available as ES modules under `dist/plugin/` with a `.mjs` extension (e.g. `dist/plugin/markdown.mjs`).

API
---

We provide API methods for checking which plugins that are currently registered. It's also possible to retrieve a reference to any registered plugin instance if you want to manually call a method on them.

```
import Reveal from 'dist/reveal.mjs';
import Markdown from 'dist/plugin/markdown.mjs';
import Highlight from 'dist/plugin/highlight.mjs';

Reveal.initialize({ plugins: [Markdown, Highlight] });

Reveal.hasPlugin('markdown');
// true

Reveal.getPlugin('markdown');
// { id: "markdown", init: ... }

Reveal.getPlugins();
// {
//   markdown: { id: "markdown", init: ... },
//   highlight: { id: "highlight", init: ... }
// }
```

Dependencies 4.0.0
------------------

This functionality is left in for backwards compatibility but has been deprecated as of reveal.js 4.0.0. In older versions we used a built-in dependency loader to load plugins. We moved away from this because how scripts are best loaded and bundled may vary greatly depending on use case. If you need to load a dependency, include it using a `<script defer>` tag instead.

Dependencies are loaded in the order they appear.

```
Reveal.initialize({
  dependencies: [
    { src: 'dist/plugin/markdown.js', condition: () => {
        return !!document.querySelector( ’[data-markdown]’ );
    } },
    { src: 'dist/plugin/highlight.js', async: true }
  ]
});
```

The following properties are available for each dependency object:

* **src**: Path to the script to load
* **async**: [optional] Flags if the script should load after reveal.js has started, defaults to false
* **callback**: [optional] Function to execute when the script has loaded
* **condition**: [optional] Function which must return true for the script to be loaded

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/plugins.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)