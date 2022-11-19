/**
 *
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import Page from '../page';

/*
 *
 */
describe('Page', () => {
  /*
   *
   */
  test('it renders the message', () => {
    render(<Page />);

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });
});
