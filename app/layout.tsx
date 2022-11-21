/**
 * Root layout of the App.
 */
import React from 'react';
import EmotionProvider from './EmotionContext';
import ThemeProvider from './ThemeContext';

/**
 * Root layout of the App.
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
    <>
      <head />
      <body>
        <EmotionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionProvider>
      </body>
    </>
  );
}
