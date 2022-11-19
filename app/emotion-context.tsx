/**
 * Wraps the [Emotion](https://emotion.sh/) CacheProvider component as a
 * client-side component since MUI does not yet support Next.js /app directory.
 */
'use client';

import React from 'react';
import {CacheProvider} from '@emotion/react';
import createEmotionCache from './create-emotion-cache';

/*
 * Client-side cache, shared for the whole session of the user in the browser.
 *
 * Create a meta tag at the top of the <head> and set it as insertionPoint:
 *   <meta name="emotion-insertion-point" content="" />
 *
 * This assures that MUI styles are loaded first. It allows easy override MUI
 * styles with other styling solutions, like CSS modules.
 */
const clientSideEmotionCache = createEmotionCache();

/**
 * Sets up the Emotion client-side cache for the App.
 *
 * @param children the children to render
 * @constructor
 */
export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
}
