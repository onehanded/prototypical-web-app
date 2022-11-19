/**
 * Wraps the [MUI](https://mui.com/) ThemeProvider as a client-side component
 * since MUI does not yet support Next.js /app directory.
 */
'use client';

import React from 'react';
import {ThemeProvider as Provider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

/**
 * Sets up the theme for the App and uses the CssBaseline component to override
 * inconsistent browser defaults.
 *
 * @param children the children to render
 * @constructor
 */
export default function ThemeProvider({children}: {children: React.ReactNode}) {
  return (
    <Provider theme={theme}>
      <CssBaseline />
      {children}
    </Provider>
  );
}
