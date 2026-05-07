[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](lightbox.md) [繁體中文](lightbox.md)

* Languages
  + [English](lightbox.md)
  + [繁體中文](lightbox.md)
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

Lightbox 5.2.0
==============

A lightbox is a modal that displays an image or video in a full-screen overlay. It's great for things like clicking on thumbnails to view a larger [image](#image-lightbox) or [video](#video-lightbox).

Image Lightbox
--------------

The simplest way to trigger a lightbox in reveal.js is to add the `data-preview-image` attribute to an `img` tag. Clicking on the image below, will open the same image in an overlay.

```
<img src="reveal.png" data-preview-image>
```

![](/images/logo/reveal-black-text-sticker.png)



Resume presentation

Lightboxes aren't limited to opening the image src. You can open any image you like by assigning a value to the `data-preview-image` attribute.

```
<img src="reveal.png" data-preview-image="mastering.svg">
```

![](/images/logo/reveal-black-text-sticker.png)



Resume presentation

Video Lightbox
--------------

Video lightboxes work the same way as image lightboxes except you use the `data-preview-video` attribute instead.

```
<video src="video.mp4" data-preview-video></video>
<img src="reveal.png" data-preview-video="video.mp4">
```

[](https://static.slid.es/site/homepage/v1/homepage-video-editor.mp4)![](/images/logo/reveal-black-text-sticker.png)



Resume presentation

Lightbox Media Size
-------------------

The sizing of media in the lightbox can be controlled using the `data-preview-fit` attribute. The following fit modes are supported:

| Value | Effect |
| --- | --- |
| scale-down (default) | Scale media down if needed to fit in the lightbox. |
| contain | Scale media up and down to fit the lightbox without cropping. |
| cover | Scale media to cover the entire lightbox, even if some of it is cut off. |

```
<img src="reveal.png" data-preview-image data-preview-fit="cover">
```

![](/images/logo/reveal-white-text.svg)



Resume presentation

Works on Any Element
--------------------

Note that the lightbox feature works on any element, not just images and videos. For example, you can trigger an image or video lightbox from clicking a button or link.

```
<a data-preview-image="image.png">📸 Open Logo</a>
<button data-preview-video="video.mp4">🎥 Open Video</button>
```

📸 Open Logo  
  
🎥 Open Video



Resume presentation

📸 Open Logo 🎥 Open Video

Iframe Lightbox
---------------

It's possible to preview links in iframe lightboxes using the `data-preview-link` attribute. When this attribute is added to an `<a>` tag, reveal.js will automatically open the link's `href` in an iframe.

If you want to open an iframe lightbox from another element, you can set the iframe source as a value to the `data-preview-link` attribute.

```
<a href="https://hakim.se" data-preview-link>Open Hakim's Website</a>
<img src="reveal.png" data-preview-link="https://hakim.se">
```

[Open Hakim's Website](https://hakim.se)  
  
![](/images/logo/reveal-black-text-sticker.png)



Resume presentation

Open Hakim's Website

Note that this will only work if the link allows for embedding. Many websites prevent embedding via `x-frame-options` or `Content-Security-Policy`.

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/lightbox.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)