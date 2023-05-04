/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Root (home) page of the App.
 */
import React from 'react';

/**
 * Root page.
 *
 * @constructor
 */
export default function Page(): React.ReactElement {
  return (
    <>
      <div className="mx-16 flex h-screen items-center px-6 ">
        <h1 className="scroll-m-20 text-center text-6xl font-light lg:text-8xl">
          Welcome to the Prototypical Next.js Web App!
        </h1>
      </div>
      <div className="absolute bottom-1 pl-1">
        <p className="text-lighter mx-2 text-sm text-gray-500">
          WARNING: This app uses the Next.js&nbsp;
          <a
            href="https://beta.nextjs.org/docs/getting-started"
            className="text-blue-400 hover:text-blue-600"
          >
            /app
          </a>
          &nbsp; directory that is currently in beta.
        </p>
      </div>
    </>
  );
}
