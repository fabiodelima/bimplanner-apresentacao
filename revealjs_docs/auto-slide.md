[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](auto-slide.md) [繁體中文](auto-slide.md)

* Languages
  + [English](auto-slide.md)
  + [繁體中文](auto-slide.md)
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

Auto-Slide
==========

Presentations can be configured to step through slides automatically, without any user input. To enable this you will need to specify an interval for slide changes using the `autoSlide` config option. The interval is provided in milliseconds.

```
// Slide every five seconds
Reveal.initialize({
  autoSlide: 5000,
  loop: true,
});
```

Slide 1



Resume presentation

Slide 1

A play/pause control element will automatically appear for auto-sliding decks. Sliding is automatically paused if the user starts interacting with the deck. It's also possible to pause or resume sliding by pressing »A« on the keyboard (won't work in the embedded demo here).

You can disable the auto-slide controls and prevent sliding from being paused by specifying `autoSlideStoppable: false` in your [config options](config.md).

Slide Timing
------------

It's also possible to override the slide duration for individual slides and fragments by using the `data-autoslide` attribute.

```
<section data-autoslide="2000">
  <p>After 2 seconds the first fragment will be shown.</p>
  <p class="fragment" data-autoslide="10000">
    After 10 seconds the next fragment will be shown.
  </p>
  <p class="fragment">
    Now, the fragment is displayed for 2 seconds before the next slide is shown.
  </p>
</section>
```

Auto-Slide Method
-----------------

The `autoSlideMethod` config option can be used to override the default function used for navigation when auto-sliding.

We step through all slides, both horizontal and [vertical](vertical-slides.md), by default. To only navigate along the top layer and ignore vertical slides, you can provide a method that calls `Reveal.right()`.

```
Reveal.configure({
  autoSlideMethod: () => Reveal.right(),
});
```

Events
------

We fire events whenever auto-sliding is paused or resumed.

```
Reveal.on('autoslideresumed', (event) => {
  /* ... */
});
Reveal.on('autoslidepaused', (event) => {
  /* ... */
});
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/auto-slide.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)