/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Root layout of the App.
 */
import React from 'react';
import EmotionProvider from './components/EmotionContext';
import ThemeProvider from './components/ThemeContext';

/**
 * Root layout of the App.
 *
 * To ensure proper rendering and touch zooming for all devices the responsive viewport meta tag
 * is added, as per:
 *   https://mui.com/material-ui/getting-started/usage/
 *
 * @param children the children to be rendered
 * @constructor
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <EmotionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
