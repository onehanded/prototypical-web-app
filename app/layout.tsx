/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Root layout of the App.
 */
import React from 'react';
import {Metadata} from 'next';
import EmotionProvider from './components/EmotionContext';
import ThemeProvider from './components/ThemeContext';

/**
 * The default metadata for the app.
 */
export const metadata: Metadata = {
  title: 'Prototypical Web Application using Next.js',
  description:
    'This web app template is based on React and Next.js for hybrid static & server rendering. It is configured with Typescript, Eslint & Prettier for type safety and code consistency.',
};

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
      <body>
        <EmotionProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </EmotionProvider>
      </body>
    </html>
  );
}
