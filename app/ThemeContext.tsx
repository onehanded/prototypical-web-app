/**
 * Wraps the [MUI](https://mui.com/) ThemeProvider as a client-side component.
 *
 * Currently MUI/Emotion does not support Next.js 13 /app directory:
 *   https://github.com/mui/material-ui/issues/34905
 *
 * This component may need to change when support is added.
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
