[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](installation.md) [繁體中文](installation.md)

* Languages
  + [English](installation.md)
  + [繁體中文](installation.md)
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

Installation
============

We provide three different ways to install reveal.js depending on your use case and technical experience.

1. The [basic setup](#basic-setup) is the easiest way to get started. No need to set up any build tools.
2. The [full setup](#full-setup) gives you access to the build tools needed to make changes to the reveal.js source code. It includes a web server which is required if you want to load external Markdown files (the basic setup paired with your own choice of local web server works too).
3. If you want to use reveal.js as a dependency in your project, you can [install from npm](#installing-from-npm).

#### Next Steps

Once reveal.js is installed, we recommend checking out the [Markup](markup.md) and [Config Option](config.md) guides.

Basic Setup
-----------

We make a point of distributing reveal.js in a way that it can be used by as many people as possible. The basic setup is our most broadly accessible way to get started and only requires that you have a web browser. There's no need to go through a build process or install any dependencies.

1. Download the latest reveal.js version <https://github.com/hakimel/reveal.js/archive/master.zip>
2. Unzip and replace the example contents in index.html with your own
3. Open index.html in a browser to view it

That's it 🚀

Full Setup - Recommended
------------------------

Some reveal.js features, like external Markdown, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the reveal.js source code.

1. Install [Node.js](https://nodejs.org/) (20.19.0 or later)
2. Clone the reveal.js repository

   ```
   $ git clone https://github.com/hakimel/reveal.js.git
   ```
3. Move to the reveal.js folder and install dependencies

   ```
   $ cd reveal.js && npm install
   ```
4. Serve the presentation and monitor source files for changes

   ```
   $ npm start
   ```
5. Open <http://localhost:8000> to view your presentation

### Development Server Port

The development server defaults to port 8000. You can use the `port` argument to switch to a different one:

```
npm start -- --port=8001
```

Installing From npm
-------------------

The framework is published to, and can be installed from, [npm](https://www.npmjs.com/package/reveal.js).

```
npm install reveal.js
# or
yarn add reveal.js
```

Once installed, you can include reveal.js as an ES module:

```
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

You'll also need to include the reveal.js styles and a [presentation theme](themes.md).

```
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/installation.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)