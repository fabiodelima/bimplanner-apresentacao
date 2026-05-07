[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](links.md) [繁體中文](links.md)

* Languages
  + [English](links.md)
  + [繁體中文](links.md)
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

Internal links
==============

You can create links from one slide to another. Start by giving your target slide a unique `id` attribute. Next, you can create an anchor with an href in the format `#/<id>`. Here's a complete working example:

```
<section>
<a href="#/grand-finale">Go to the last slide</a></section>
<section>
	<h2>Slide 2</h2>
</section>
<section id="grand-finale">
	<h2>The end</h2>
<a href="#/0">Back to the first</a></section>
```

[Go to the last slide](#/grand-finale)



Resume presentation

Go to the last slide

Numbered Links
--------------

It's also possible to link to slides based on their slide index. The href format for an numbered link is `#/0` where 0 is the horizontal slide number. To link to a [vertical slide](vertical-slides.md) use `#/0/0` where the second number is the index of the vertical slide target.

```
<a href="#/2">Go to 2nd slide</a>
<a href="#/3/2">Go to the 2nd vertical slide inside of the 3rd slide</a>
```

Navigation Links
----------------

You can add relative navigation links that work similarly to the built in directional control arrows. This is done by adding one of the following classes to any clickable HTML element inside of the `.reveal` container.

```
<button class="navigate-left">Left</button>
<button class="navigate-right">Right</button>
<button class="navigate-up">Up</button>
<button class="navigate-down">Down</button>

<!-- Previous vertical OR horizontal slide -->
<button class="navigate-prev">Prev</button>

<!-- Next vertical OR horizontal slide -->
<button class="navigate-next">Next</button>
```

Each navigation element is automatically given an `enabled` class when it's a valid navigation route based on the current slide. For example, if you're on the first slide only `navigate-right` will have the `enabled` class since it's not possible to navigate towards the left.

Lightbox Links
--------------

If the website you're linking to supports iframe embedding, you can use the `data-preview-link` attribute to open the link in an iframe lightbox. This way you can show an external website without leaving the slide deck. Learn more in the [Lightbox docs](lightbox.md#iframe-lightbox).

```
<a href="https://hakim.se" data-preview-link>Open Link</a>
```

[Open Link](https://hakim.se)



Resume presentation

Open Link

Note that this will only work if the link allows for embedding. Many websites prevent embedding via `x-frame-options` or `Content-Security-Policy`.

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/links.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)