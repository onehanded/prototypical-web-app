/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */

/**
 * Since this component renders the <title> and <meta> tags a <head> tag is
 * appended to the document root and this is used as an option to render() so
 * the tags are rendered under the <head> tag.
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render, RenderResult, within} from '@testing-library/react';
import Head from '../head';

/*
 *
 */
describe('Head', () => {
  let result: RenderResult;

  /*
   *
   */
  beforeEach(() => {
    result = render(<Head />, {
      container: document.documentElement.appendChild(
        document.createElement('head')
      ),
    });
  });
  /*
   *
   */
  test('it renders the title', () => {
    const title = result.container.querySelector('title');

    title !== null
      ? expect(within(title).getByText(/prototypical/i)).toBeInTheDocument()
      : expect(title).toBeDefined();
  });
});
