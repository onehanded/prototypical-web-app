/**
 * Tests the server-side creation of the emotion cache (where 'document' is
 * undefined).
 *
 * Because emotion uses a module variable to for the document defined check
 * this test needs to be in a separate file where document can be deleted
 * before the create-emotion-cache module is loaded.
 */
import {describe, test} from '@jest/globals';

/*
 *
 */
describe('createEmotionCache', () => {
  /*
   *
   */
  test('module loads server-side', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global['document'];

    return import('../create-emotion-cache').then((module) => {
      expect(module.default()).toBeDefined();
    });
  });
});
