/**
 * Tests the client-side creation of the emotion cache (where 'document' is
 * defined).
 */
import {describe, jest, test} from '@jest/globals';
import createEmotionCache from '../create-emotion-cache';

/*
 *
 */
describe('createEmotionCache', () => {
  /*
   *
   */
  test('module loads client-side', () => {
    expect(createEmotionCache()).toBeDefined();
  });

  /*
   *
   */
  test('module loads client-side with insertion point', () => {
    jest
      .spyOn(document, 'querySelector')
      .mockImplementation(() => document.documentElement);

    expect(createEmotionCache()).toBeDefined();
  });
});
