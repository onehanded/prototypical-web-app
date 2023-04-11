/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Creates the [MUI](https://mui.com/) theme.
 */
'use client';

import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

/*
 *
 */
export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

/*
 * Create a theme instance.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  spacing: 8,
});

export default theme;
