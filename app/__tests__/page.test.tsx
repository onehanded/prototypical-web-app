/**
 *
 */
import React from 'react';
import {render, screen} from '@testing-library/react';

import Page from '../page';

/*
 *
 */
describe('Page', () => {
  /*
   *
   */
  beforeEach(() => {
    render(<Page />);
  });

  /*
   *
   */
  test('it renders the message', () => {
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
