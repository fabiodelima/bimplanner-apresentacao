[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](layout.md) [繁體中文](layout.md)

* Languages
  + [English](layout.md)
  + [繁體中文](layout.md)
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

Layout
======

We provide a few different helper classes for controlling the layout and styling your content. We're aiming to add more of these in upcoming versions so keep an eye out for that.

If you're looking to change the sizing, scaling and centering of your presentation please see [Presentation Size](presentation-size.md).

Stack
-----

The `r-stack` layout helper lets you center and place multiple elements on top of each other. This is intended to be used together with [fragments](fragments.md) to incrementally reveal elements.

```
<div class="r-stack">
  <img
    class="fragment"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

![](https://picsum.photos/450/300)![](https://picsum.photos/300/450)![](https://picsum.photos/400/400)



Resume presentation

If you want to show each of the stacked elements individually you can adjust the fragment settings:

```
<div class="r-stack">
  <img
    class="fragment fade-out"
    data-fragment-index="0"
    src="https://picsum.photos/450/300"
    width="450"
    height="300"
  />
  <img
    class="fragment current-visible"
    data-fragment-index="0"
    src="https://picsum.photos/300/450"
    width="300"
    height="450"
  />
  <img
    class="fragment"
    src="https://picsum.photos/400/400"
    width="400"
    height="400"
  />
</div>
```

![](https://picsum.photos/450/300)![](https://picsum.photos/300/450)![](https://picsum.photos/400/400)



Resume presentation

Fit Text
--------

The `r-fit-text` class makes text as large as possible without overflowing the slide. This is great when you want BIG text without having to manually find the right font size. Powered by [fitty](https://github.com/rikschennink/fitty) ❤️

```
<h2 class="r-fit-text">BIG</h2>
```

BIG
---



Resume presentation

BIG.

```
<h2 class="r-fit-text">FIT TEXT</h2>
<h2 class="r-fit-text">CAN BE USED FOR MULTIPLE HEADLINES</h2>
```

FIT TEXT
--------

CAN BE USED FOR MULTIPLE HEADLINES
----------------------------------



Resume presentation

FIT TEXT. CAN BE USED FOR MULTIPLE HEADLINES.

Stretch
-------

The `r-stretch` layout helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide. For example, in the below example our slide contains a **title**, an **image** and a **byline**. Because the **image** has the `.r-stretch` class, its height is set to the slide height minus the combined height of the **title** and **byline**.

```
<h2>Stretch Example</h2>
<img class="r-stretch" src="/images/slides-symbol-512x512.png" />
<p>Image byline</p>
```

Stretch Example
---------------

![](/images/slides-symbol-512x512.png)

Image byline



Resume presentation

Stretch Example. Image byline.

#### Stretch Limitations

* Only direct descendants of a slide section can be stretched
* Only one descendant per slide section can be stretched

Frame
-----

Decorate any element with `r-frame` to make it stand out against the background. If the framed element is placed inside an anchor, we'll apply a hover effect to the border.

```
<img src="logo.svg" width="200" />
<a href="#">
  <img class="r-frame" src="logo.svg" width="200" />
</a>
```

![](/images/logo/reveal-symbol.svg)[![](/images/logo/reveal-symbol.svg)](#)



Resume presentation

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/layout.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)