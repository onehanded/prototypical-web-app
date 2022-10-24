/**
 * Top level Next component used to initialize pages.
 */
import React from 'react';
import {type AppProps} from 'next/app';

import 'semantic-ui-css/semantic.min.css';

/**
 * Component used to initialize pages.
 *
 * @param Component the active page
 * @param pageProps the initial props that were preloaded for the page, otherwise an empty object
 * @constructor
 */
function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
