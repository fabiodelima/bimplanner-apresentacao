[![reveal.js logo](/images/logo/reveal-white-text.svg)![reveal.js logo](/images/logo/reveal-black-text.svg)![reveal.js logo](/images/logo/reveal-symbol.svg)](/ "reveal.js home")

`⌘K`

* [English](postmessage.md) [繁體中文](postmessage.md)

* Languages
  + [English](postmessage.md)
  + [繁體中文](postmessage.md)
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

postMessage API
===============

The framework has a built-in postMessage API that can be used when communicating with a presentation inside of another window. Here's an example showing how you'd make a reveal.js instance in the given window proceed to slide 2:

```
<window>.postMessage( JSON.stringify({ method: 'slide', args: [ 2 ] }), '*' );
```

postMessage Events
------------------

When reveal.js runs inside of an iframe it can optionally bubble all of its events to the parent. Bubbled events are stringified JSON with three fields: namespace, eventName and state. Here's how you subscribe to them from the parent window:

```
window.addEventListener('message', (event) => {
  var data = JSON.parse(event.data);
  if (data.namespace === 'reveal' && data.eventName === 'slidechanged') {
    // Slide changed, see data.state for slide number
  }
});
```

postMessage Callbacks
---------------------

When you call any method via the postMessage API, reveal.js will dispatch a message with the return value. This is done so that you can call a getter method and see what the result is. Check out this example:

```
<revealWindow>.postMessage( JSON.stringify({ method: 'getTotalSlides' }), '*' );

window.addEventListener( 'message', event => {
  var data = JSON.parse( event.data );
  // `data.method`` is the method that we invoked
  if( data.namespace === 'reveal' && data.eventName === 'callback' && data.method === 'getTotalSlides' ) {
    data.result // = the total number of slides
  }
} );
```

Turning postMessage on/off
--------------------------

This cross-window messaging can be toggled on or off using configuration flags. These are the default values.

```
Reveal.initialize({
// Exposes the reveal.js API through window.postMessagepostMessage: true,// Dispatches all reveal.js events to the parent window through postMessagepostMessageEvents: false});
```

[Created by @hakimel](https://twitter.com/hakimel) [X (Twitter)](https://twitter.com/revealjs) [GitHub](https://github.com/hakimel/reveal.js) [Edit this page](https://github.com/reveal/revealjs.com/tree/master/./src/postmessage.md)

[![](/images/slides-symbol-512x512.png)

Slides.com — the reveal.js presentation editor.

Try it for free](https://slides.com)

[![](/images/docs/mastering.svg)

Become a reveal.js pro in the official video course.

Learn more](/course)