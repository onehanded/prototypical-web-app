/**
 * Factory function to create the [Emotion](https://emotion.sh/) client-side
 * cache.
 */
import createCache from '@emotion/cache';

/**
 * On the client side, create a meta tag at the top of the <head> and set it as
 * insertionPoint:
 *   <meta name="emotion-insertion-point" content="" />
 *
 * This assures that MUI styles are loaded first. It allows easy override MUI
 * styles with other styling solutions, like CSS modules.
 */
export default function createEmotionCache() {
  let insertionPoint;

  if (typeof document !== 'undefined') {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );

    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({key: 'mui-style', insertionPoint});
}
