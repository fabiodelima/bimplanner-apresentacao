import { useEffect, useRef, useState } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

import './styles/tokens.css';
import './styles/base.css';
import './styles/chrome.css';

import slides from './slides';
import Toc from './components/Toc';

export default function App() {
  const deckRef = useRef(null);
  const [currentMeta, setCurrentMeta] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (deckRef.current) return;

    // Capture slide index BEFORE reveal.js's resize handler fires.
    // Listeners fire in registration order — this must come before initialize().
    let savedState = { indexh: 0, indexv: 0 };
    const captureState = () => {
      if (deckRef.current) savedState = deckRef.current.getState();
    };
    window.addEventListener('resize', captureState);

    const deck = new Reveal(document.querySelector('.reveal'), {
      width: 1920,
      height: 1080,
      view: 'scroll',
      scrollSnap: 'mandatory',
      scrollProgress: true,
      transition: 'fade',
      autoAnimate: true,
      pdfSeparateFragments: false,
      controls: false,
      progress: false,
      hash: true,
    });

    deck.initialize().then(() => {
      const state = deck.getState();
      if (slides[state.indexh]) {
        setCurrentMeta(slides[state.indexh].meta);
        setCurrentIndex(state.indexh);
      }
    });

    deck.on('slidechanged', event => {
      if (slides[event.indexh]) {
        setCurrentMeta(slides[event.indexh].meta);
        setCurrentIndex(event.indexh);
      }
    });

    deckRef.current = deck;

    // Restore slide AFTER reveal.js's resize handler fires (registered after initialize).
    // Sets scrollTop directly to the snap-aligned position — deck.slide() uses
    // scrollToSlide() which computes a non-snap position and causes the browser
    // snap to land on the wrong slide for the last slide.
    const restoreSlide = () => {
      const { indexh, indexv } = savedState;
      requestAnimationFrame(() => {
        const scroll = deck.scroll;
        if (!scroll?.isActive()) return;
        const triggers = scroll.slideTriggers;
        if (!triggers?.length) return;
        const ti = triggers.findIndex(
          t => t.page.indexh === indexh && (t.page.indexv || 0) === indexv
        );
        if (ti >= 0) {
          scroll.viewportElement.scrollTop = ti * scroll.scrollTriggerHeight;
        }
      });
    };
    window.addEventListener('resize', restoreSlide);

    return () => {
      window.removeEventListener('resize', captureState);
      window.removeEventListener('resize', restoreSlide);
    };
  }, []);

  // Monitor browser zoom level to keep Chrome UI scale constant
  useEffect(() => {
    const syncZoom = () => {
      const zoom = window.devicePixelRatio || 1;
      document.documentElement.style.setProperty('--browser-zoom', zoom);
    };

    window.addEventListener('resize', syncZoom);
    syncZoom();

    return () => window.removeEventListener('resize', syncZoom);
  }, []);

  return (
    <>
      <div className="reveal">
        <div className="slides">
          {slides.map(({ id, cls, Component }) => (
            <section key={id} id={id} className={`slide ${cls}`} data-auto-animate>
              <Component />
            </section>
          ))}
        </div>
      </div>

      <Toc deckRef={deckRef} currentIndex={currentIndex} />

      {/* Global Chrome UI (Outside slide frame) */}
      <div className="chrome-ui">
        {/* Top Left Badge */}
        <div className={`chrome-header ${currentMeta?.num ? 'visible' : ''}`}>
          {currentMeta?.num && (
            <div className="chip" data-n={currentMeta.num}>
              {currentMeta.label}
            </div>
          )}
        </div>

        {/* Bottom Left Badge */}
        <div className={`chrome-footer-badge ${currentMeta?.tag ? 'visible' : ''}`}>
          {currentMeta?.tag && (
            <>
              <span className={`meta-tag ${currentMeta.type}`}>
                {currentMeta.tag}
              </span>
              {currentMeta.presenter && (
                <span className="presenter-tag">
                  {currentMeta.presenter}
                </span>
              )}
            </>
          )}
        </div>

        {/* Bottom Right Logo */}
        <div className={`chrome-logo ${currentMeta?.num ? 'visible' : ''}`}>
          <div className="logo-mark">
            BIM<span>Planner</span>
          </div>
        </div>
      </div>
    </>
  );
}
