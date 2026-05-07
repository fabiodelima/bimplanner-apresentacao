[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](markup.md) [繁體中文](markup.md)

* Languages
  + [English](markup.md)
  + [繁體中文](markup.md)
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

Markup
======

Here's a barebones example of a fully working reveal.js presentation:

```
<html>
  <head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
      Reveal.initialize();
    </script>
  </body>
</html>
```

The presentation markup hierarchy needs to be `.reveal > .slides > section` where the `section` element represents one slide and can be repeated indefinitely.

If you place multiple `section` elements inside of another `section` they will be shown as [vertical slides](vertical-slides.md). The first of the vertical slides is the "root" of the others (at the top), and will be included in the horizontal sequence. For example:

```
<div class="reveal">
  <div class="slides">
    <section>Horizontal Slide</section>
    <section>
      <section>Vertical Slide 1</section>
      <section>Vertical Slide 2</section>
    </section>
  </div>
</div>
```

Horizontal Slide



Resume presentation

Horizontal Slide

It's also possible to write presentations using [Markdown](markdown.md).

Viewport
--------

The reveal.js viewport is the wrapper DOM element that determines the size of your presentation on a web page. By default, this will be the `body` element. If you're including multiple presentations on the same page each presentations `.reveal` element will act as their viewport.

The viewport is always decorated with a `reveal-viewport` class reveal.js is initialized.

Slide States
------------

If you set `data-state="make-it-pop"` on a slide `<section>`, "make-it-pop" will be applied as a class on the [viewport element](#viewport) when that slide is opened. This allows you to apply broad style changes to the page based on the active slide.

```
<section data-state="make-it-pop"></section>
```

```
/* CSS */
.make-it-pop {
  filter: drop-shadow(0 0 10px purple);
}
```

You can also listen to these changes in state via JavaScript:

```
Reveal.on('make-it-pop', () => {
  console.log('✨');
});
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/markup.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)