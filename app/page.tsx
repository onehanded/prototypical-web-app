/** @jsxImportSource @emotion/react */
/**
 * Root (home) page of the App.
 *
 * Currently MUI/Emotion components do not work with server-side components:
 *   https://github.com/mui/material-ui/issues/34905
 *
 * When this is fixed 'use client' can be removed.
 */
'use client';

import React from 'react';
import {Typography} from '@mui/material';

/**
 * Root page.
 *
 * @constructor
 */
export default function Page(): React.ReactElement {
  return (
    <>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h1">
          Welcome to the Prototypical Next.js Web App!
        </Typography>
      </div>
      <div
        css={{
          position: 'absolute',
          left: '0',
          bottom: '0',
        }}
      >
        <Typography variant="subtitle2">
          WARNING: This app uses the Next.js&nbsp;
          <a href="https://nextjs.org/blog/next-13#new-app-directory-beta">
            /app directory
          </a>
          &nbsp;that is currently in beta.
        </Typography>
      </div>
    </>
  );
}
