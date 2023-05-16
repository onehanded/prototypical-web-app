/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Since this component renders the <head> and <body> tags it cannot be tested
 * using the usual render() method, as this generates an error:
 *   <head> cannot appear as a child of <div>
 *
 * Instead, pass the document root as an option render() so it is rendered under
 * the <html> tag.
 *
 * Because the Layout component should uses the <html> tag, these tests this will
 * generate the following warnning:
 *   <html> cannot appear as a child of <html>
 *
 * There does not seem to be any way to avoid this.
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
    // Since the Layout component renders the <html> tag it will generate an
    // console error, so we need to mock it to suppress the error output.
    const error = jest.spyOn(console, 'error').mockReturnValueOnce(undefined);

    const {getByText} = render(
      <Layout>
        <p>Hello World</p>
      </Layout>,
      {
        container: document.documentElement,
      }
    );

    expect(getByText(/hello/i)).toBeInTheDocument();

    expect(error).toHaveBeenCalledTimes(1);
  });
});
