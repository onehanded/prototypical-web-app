/**
 *
 */
import React from 'react';
import {describe, jest, test} from '@jest/globals';
import {render, screen} from '@testing-library/react';
import {useServerInsertedHTML} from 'next/navigation';
import EmotionProvider from '../EmotionContext';

/*
 * Mock useServerInsertedHTML method used by EmotionProvider method to insert styles into HTML.
 */
jest.mock('next/navigation', () => {
  const actual =
    jest.requireActual<typeof import('next/navigation')>('next/navigation');

  return {
    ...actual,
    useServerInsertedHTML: jest.fn<typeof useServerInsertedHTML>(),
  };
});

const useServerInsertedHTMLMock = jest.mocked(useServerInsertedHTML);

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

  /*
   *
   */
  test('it inserts styles into HTML', () => {
    render(
      <EmotionProvider>
        <p>Hello World</p>
      </EmotionProvider>
    );

    expect(useServerInsertedHTMLMock).toHaveBeenCalled();

    const lastCall = useServerInsertedHTMLMock.mock.lastCall;
    const callback = lastCall !== undefined ? lastCall[0] : undefined;

    callback !== undefined
      ? expect(React.isValidElement(callback())).toBeTruthy()
      : expect(callback).toBeDefined();
  });
});
