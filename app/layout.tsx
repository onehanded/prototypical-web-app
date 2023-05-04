/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Root layout of the App.
 */
import React from 'react';
import {Metadata} from 'next';
import {Roboto} from 'next/font/google';

/*
 * Import the global styles for the app.
 */
import '../styles/globals.css';

/*
 * Configure the Roboto font.
 */
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

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
 * @param children the children to be rendered
 * @constructor
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
