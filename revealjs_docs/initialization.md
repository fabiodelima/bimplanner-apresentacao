[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](initialization.md) [繁體中文](initialization.md)

* Languages
  + [English](initialization.md)
  + [繁體中文](initialization.md)
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

Initialization
==============

The most common reveal.js use case is to have a single presentation which covers the full viewport. As of 4.0 we also support running [multiple presentations](#multiple-presentations) in parallel on the same page as well as including the library as an [ES module](#es-module).

If you only have a single presentation on the page we recommend initializing reveal.js using the `Reveal.initialize` method. `Reveal.initialize` accepts one argument; a reveal.js [config object](config.md).

```
<script src="dist/reveal.js"></script>
<script>
  Reveal.initialize({ transition: 'none' });
</script>
```

The `initialize` method returns a promise which will resolve as soon as the presentation is ready and can be interacted with via the API.

```
Reveal.initialize().then(() => {
  // reveal.js is ready
});
```

Multiple Presentations 4.0.0
----------------------------

To run multiple presentations side-by-side on the same page you can create instances of the `Reveal` class. The `Reveal` constructor accepts two arguments; the `.reveal` HTML element root of the presentation and an optional [config object](config.md).

Note that you will also need to set the [embedded](presentation-size.md#embedded) config option to true. This flag makes the presentations size themselves according to their `.reveal` root element size, rather than the browser viewport. You will also need to manually define the `width` and `height` CSS properties for each `.reveal .deck*` element in order to see them appear.

By default reveal.js will capture all keyboard events in the document. For embedded presentations we recommend initializing with `keyboardCondition: 'focused'` so that keyboard events are only captured when the presentation has been focused by the viewer.

```
<div class="reveal deck1">...</div>
<div class="reveal deck2">...</div>

<script type="module">
  import Reveal from 'reveal.js';

  let deck1 = new Reveal(document.querySelector('.deck1'), {
    embedded: true,
    keyboardCondition: 'focused', // only react to keys when focused
  });
  deck1.initialize();

  let deck2 = new Reveal(document.querySelector('.deck2'), {
    embedded: true,
  });
  deck2.initialize();
</script>
```

ES Module 4.0.0
---------------

We provide two JavaScript bundles depending your use case. Our default presentation boilerplate, `index.html`, uses `dist/reveal.js` which exposes Reveal to the global window (UMD). This allows reveal.js to run anywhere, even from your filesystem.

The second bundle is `dist/reveal.mjs` which makes it possible to import reveal.js as an ES module. This version can be used either directly in the browser with `<script type="module">` or bundled in your own build process.

Here's how to import and initialize the ES module version of reveal.js as well as the Markdown plugin:

```
<script type="module">
  import Reveal from 'reveal.js';
  import Markdown from 'plugin/markdown';
  Reveal.initialize({
    plugins: [Markdown],
  });
</script>
```

If you're [installing reveal.js from npm](installation.md#installing-from-npm) and bundling it you should be able to use:

```
import Reveal from 'reveal.js';
Reveal.initialize();
```

Uninitializing reveal.js 4.3.0
------------------------------

If you want to uninitialize reveal.js you can use the `destroy` API method. This will undo all changes that the framework has made to the DOM, remove all event listeners and unregister/destroy all plugins.

```
Reveal.destroy();
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/initialization.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)