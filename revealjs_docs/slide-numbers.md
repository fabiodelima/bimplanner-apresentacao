[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](slide-numbers.md) [繁體中文](slide-numbers.md)

* Languages
  + [English](slide-numbers.md)
  + [繁體中文](slide-numbers.md)
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

Slide Numbers
=============

You can display the page number of the current slide by setting the `slideNumber` config option to `true`.

```
Reveal.initialize({ slideNumber: true });
```

Slide 1

[1](#/)



Resume presentation

Slide 1

Format
------

The slide number format can be customized by setting `slideNumber` to one of the following values.

| Value | Description |
| --- | --- |
| h.v | Horizontal . Vertical slide number (default) |
| h/v | Horizontal / Vertical slide number |
| c | Flattened slide number, including both horizontal and vertical slides |
| c/t | Flattened slide number / total slides |

```
Reveal.initialize({ slideNumber: 'c/t' });
```

Slide 1

[1
/
2](#/)



Resume presentation

Slide 1

If none of the existing formats are to your liking, you can provide a custom slide number generator.

```
Reveal.initialize({
  slideNumber: (slide) => {
    // Ignore numbering of vertical slides
    return [Reveal.getIndices(slide).h];
  },
});
```

Context
-------

When slide numbers are enabled, they will be included in all contexts by default. If you only want to show slide numbers in a specific context you can set `showSlideNumber` to one of the following:

| Value | Description |
| --- | --- |
| all | Show slide numbers in all contexts (default) |
| print | Only show slide numbers when printing to PDF |
| speaker | Only show slide numbers in the speaker view |

```
Reveal.initialize({ showSlideNumber: 'print' });
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/slide-numbers.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)