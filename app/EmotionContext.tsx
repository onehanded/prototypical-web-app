/**
 * Wraps the [Emotion](https://emotion.sh/) CacheProvider component as a
 * client-side component since MUI does not yet support Next.js /app directory.
 */
'use client';

import React from 'react';
import {useState} from 'react';
import {useServerInsertedHTML} from 'next/navigation';
import createCache from '@emotion/cache';
import {CacheProvider} from '@emotion/react';

/**
 * Creates the Emotion client-side cache for the App and inserts styles into HTML.
 *
 * Currently MUI/Emotion does not support Next.js 13 /app directory:
 *   https://github.com/mui/material-ui/issues/34905
 *
 * This component may need to change when support is added.
 *
 * @param children the children to render
 * @constructor
 */
export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => createCache({key: 'css'}));

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(' '),
        }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
