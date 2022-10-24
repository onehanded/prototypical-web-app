/**
 * Home page (root) of the web app.
 */
import {type NextPage} from 'next';
import React from 'react';
import {Container, Header} from 'semantic-ui-react';

import styles from './index.module.scss';

/**
 * HomePage component.
 *
 * @constructor
 */
const HomePage: NextPage = () => {
  return (
    <Container text>
      <Header as="h1" className={styles.center}>
        Welcome to Next.js!
      </Header>
    </Container>
  );
};

export default HomePage;
