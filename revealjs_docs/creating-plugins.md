[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](creating-plugins.md) [繁體中文](creating-plugins.md)

* Languages
  + [English](creating-plugins.md)
  + [繁體中文](creating-plugins.md)
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

Creating a Plugin 4.0.0
=======================

We provide a lightweight specification and API for plugins. This is used by our default plugins like [code highlighting](code.md) and [Markdown](markdown.md) but can also be used to create your own plugins.

Plugin Definition
-----------------

Plugins are objects that contain the following properties.

| Property | Value |
| --- | --- |
| id String | The plugins unique ID. This can be used to retrieve the plugin instance via `Reveal.getPlugin(<id>)`. |
| init Function | An optional function that is called when the plugin should run. It's invoked with one argument; a reference to the [presentation instance](api.md) that the plugin was registered with.  The init function can optionally return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). If a Promise is returned, reveal.js will wait for it to resolve before the presentation finishes initialization and fires the [ready event](events.md#ready). |
| destroy Function | Optional function that is called when the reveal.js instance that this plugin is registered to is uninitialized. |

Here's an example plugin which shuffles all slides in a presentation when the T key is pressed. Note that we export a function that returns a new plugin object. This is done because there may be [multiple presentation instances on the same page](initialization.md#multiple-presentations), and each should have their own instance of our plugin.

```
// toaster.js
export default () => ({
  id: 'toaster',
  init: (deck) => {
    deck.addKeyBinding({ keyCode: 84, key: 'T' }, () => {
      deck.shuffle();
      console.log('🍻');
    });
  },
});
```

Registering a Plugin
--------------------

Plugins are registered by including them in the `plugins` array of the [config options](config.md). You can also register a plugin at runtime using `Reveal.registerPlugin( Plugin )`.

```
import Reveal from 'reveal.js';
import Toaster from 'toaster.js';

Reveal.initialize({
  plugins: [Toaster],
});
```

### Async Plugins

If your plugin needs to run asynchronous code before reveal.js finishes initializing it can return a Promise. Here's an example plugin that will delay initialization for three seconds.

```
let WaitForIt = {
  id: 'wait-for-it',
  init: (deck) => {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  },
};

Reveal.initialize({ plugins: [WaitForIt] }).then(() => {
  console.log('Three seconds later...');
});
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/creating-plugins.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)