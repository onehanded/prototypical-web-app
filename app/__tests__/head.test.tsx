/**
 *
 */
import React from 'react';
import {render, screen} from '@testing-library/react';

import Head from '../head';

/*
 *
 */
describe('Head', () => {
  /*
   *
   */
  beforeEach(() => {
    render(<Head />);
  });

  /*
   *
   */
  test('it renders the title', () => {
    expect(screen.getByText(/prototypical/i)).toBeInTheDocument();
  });
});
