/**
 * Since this component renders the <head> and <body> tags it cannot be tested
 * using the usual render() method, as this generates an error:
 *   <head> cannot appear as a child of <div>
 *
 * Instead, pass the document root as an option render() so it is rendered under
 * the <html> tag.
 *
 * The Layout component should not use the <html> tag, as this will generate
 * a similar error, making it hard to test this component.
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render} from '@testing-library/react';
import Layout from '../layout';

/*
 *
 */
describe('Layout', () => {
  /*
   *
   */
  test('it renders children', () => {
    const {getByText} = render(
      <Layout>
        <p>Hello World</p>
      </Layout>,
      {
        container: document.documentElement,
      }
    );

    expect(getByText(/hello/i)).toBeInTheDocument();
  });
});
