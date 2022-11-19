/**
 *
 */
import React from 'react';
import {describe, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import EmotionProvider from '../emotion-context';

/*
 *
 */
describe('EmotionProvider', () => {
  /*
   *
   */
  test('it renders children', () => {
    render(
      <EmotionProvider>
        <p>Hello World</p>
      </EmotionProvider>
    );

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
