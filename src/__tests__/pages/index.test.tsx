/**
 *
 */
import React from 'react';
import {render, screen} from '@testing-library/react';

import HomePage from '../../pages/index';

/*
 *
 */
describe('<HomePage>', () => {
  /*
   *
   */
  beforeEach(() => {
    render(<HomePage />);
  });

  /*
   *
   */
  test('it renders the welcome message', () => {
    expect(screen.getByText('Welcome to Next.js!')).toBeInTheDocument();
  });
});
