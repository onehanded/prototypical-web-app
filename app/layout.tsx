/**
 * Root layout of the App.
 */
import React from 'react';
import EmotionProvider from './emotion-context';
import ThemeProvider from './theme-context';

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
