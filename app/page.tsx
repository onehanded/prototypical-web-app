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
import {Box, Container, Link, Typography} from '@mui/material';

/**
 * Root page.
 *
 * @constructor
 */
export default function Page(): React.ReactElement {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Typography variant="h1">
          Welcome to the Prototypical Next.js Web App!
        </Typography>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          pl: 1,
        }}
      >
        <Typography variant="overline">
          WARNING: This app uses the Next.js&nbsp;
          <Link href="https://nextjs.org/blog/next-13#new-app-directory-beta">
            /app directory
          </Link>
          &nbsp;that is currently in beta.
        </Typography>
      </Box>
    </>
  );
}
