/**
 * Root <head> tag of the App.
 */
import React from 'react';

/**
 * Head tags for App.
 *
 * @constructor
 */
export default function Head(): React.ReactElement {
  return (
    <>
      <title>Prototypical Web Application using Next.js</title>
      <meta
        name="description"
        content="This web app template is based on React and Next.js for hybrid static & server rendering. It is configured with Typescript, Eslint & Prettier for type safety and code consistency."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
