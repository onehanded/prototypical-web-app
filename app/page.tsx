/**
 * Root (home) page of the App.
 */
import React from 'react';
import styles from './page.module.scss';

/**
 * Root page.
 *
 * @constructor
 */
export default function Page(): React.ReactElement {
  return (
    <>
      <div className={styles.center}>
        <h1>Welcome to the Prototypical Next.js Web App!</h1>
      </div>
      <div className={styles.footnote}>
        <p>
          WARNING: This app uses the Next.js&nbsp;
          <a href="https://nextjs.org/blog/next-13#new-app-directory-beta">
            /app directory
          </a>
          &nbsp;that is currently in beta.
        </p>
      </div>
    </>
  );
}
