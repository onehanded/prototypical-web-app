/**
 * Root layout of the App.
 */
import React from 'react';

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
    <html lang="en">
      <head />
      <body style={{margin: 0}}>{children}</body>
    </html>
  );
}
