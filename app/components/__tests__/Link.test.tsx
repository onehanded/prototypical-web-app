/*
 * Copyright (c) 2023 One Handed Ventures, LLC
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Link from '../Link';

/*
 *
 */
describe('Link', () => {
  /*
   *
   */
  test('it renders the link', () => {
    render(<Link href="/">Click Me</Link>);

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(/click/i)).toBeInTheDocument();
  });
});
