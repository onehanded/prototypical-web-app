/**
 *
 */
import {jest} from '@jest/globals';

/**
 * Next.js 13 does not currently mock fonts for tests:
 *   https://github.com/vercel/next.js/pull/42413
 */
jest.mock('@next/font/google', () => ({
  Roboto: () => ({style: {fontFamily: {}}}),
}));
