[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](events.md) [繁體中文](events.md)

* Languages
  + [English](events.md)
  + [繁體中文](events.md)
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

Events
======

We dispatch a number of events to make it easy for you to react to changes in the presentation. `Reveal.on()` is used to add event listeners, and `Reveal.off()` is used to remove them.

```
Reveal.on('eventname', callbackFunction);
```

Ready
-----

The `ready` event is fired when reveal.js has loaded all non-async dependencies and is ready to accept API calls. To check if reveal.js is already 'ready' you can call `Reveal.isReady()`.

```
Reveal.on('ready', (event) => {
  // event.currentSlide, event.indexh, event.indexv
});
```

We also add a `.ready` class to the `.reveal` element so that you can hook into this with CSS.

The `Reveal.initialize` method also returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) which resolves when the presentation is ready. The following is synonymous to adding a listener for the `ready` event:

```
Reveal.initialize().then(() => {
  // reveal.js is ready
});
```

Slide Changed
-------------

The `slidechanged` event is fired each time the slide changes. The event object holds the index values of the current slide as well as a reference to the previous and current slide HTML elements.

Some libraries, like MathJax (see [#226](https://github.com/hakimel/reveal.js/issues/226#issuecomment-10261609)), get confused by the transforms and display states of slides. Often times, this can be fixed by calling their update or render function from this callback.

```
Reveal.on('slidechanged', (event) => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
});
```

Slide Transition End
--------------------

The `slidechanged` event fires instantly as soon as the slide changes. If you'd rather invoke your event listener when the slide has finished transitioning and is fully visible, you can use the `slidetransitionend` event. The `slidetransitionend` event includes the same event data as `slidechanged`.

```
Reveal.on('slidetransitionend', (event) => {
  console.log(event.currentSlide);
});
```

Resize
------

The `resize` event is fired when reveal.js changes the scale of the presentation.

```
Reveal.on('resize', (event) => {
  // event.scale, event.oldScale, event.size
});
```

Feature-specific Events
-----------------------

* [Overview mode events](overview.md#events)
* [Fragment events](fragments.md#events)
* [Auto-Slide events](auto-slide.md#events)

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/events.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)