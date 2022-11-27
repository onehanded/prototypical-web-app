/**
 *
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import ThemeProvider from '../ThemeContext';

/*
 *
 */
describe('EmotionProvider', () => {
  /*
   *
   */
  test('it renders children', () => {
    render(
      <ThemeProvider>
        <p>Hello World</p>
      </ThemeProvider>
    );

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
