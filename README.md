# Prototypical Web Application using Next.js

This web app template is based on React and Next.js for hybrid static & server rendering.
Click [here](https://prototypical-web-app.vercel.app/) to see it running on Vercel.

It is configured with [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) for type safety and code consistency.

It uses [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/) for unit testing.

It uses [Husky](https://typicode.github.io/husky/) to run eslint/prettier/jest as a pre-commit hook.

It is configured with [MUI](https://mui.com/) and [Emotion](https://emotion.sh/) as the UI/CSS framework.

**WARNING: This app uses the Next.js [/app directory](https://nextjs.org/blog/next-13#new-app-directory-beta) that is currently in beta.**

## Get started

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev` and go to `http://locahost:3000` to run the dev server locally

## Running tests

You can run all tests with `npm run test`, or you can just use jest directly using `npx jest`.

Run a specific test with `npm run test [filePath]`.

## Running the linter

You can run the linter with `npm run lint`.

It is recommended to set up a linter plugin in your IDE/editor, so you can see all lint errors while writing code and auto-format your code on save.

## MUI/Emotion

Material UI (MUI) and Emotion CSS do not currently support the new Next.js 13 [/app directory](https://nextjs.org/blog/next-13#new-app-directory-beta).

The components [ThemeContext](app/components/ThemeContext.tsx) and [EmotionContext](app/components/EmotionContext.tsx) bridge between the two worlds:

- The [EmotionContext](app/components/EmotionContext.tsx) component wraps Emotion's CacheProvider component with 'use client', since CacheProvider uses React's context hook.
- Likewise, the [ThemeContext](app/components/ThemeContext.tsx) component wraps the MUI ThemeProvider component with 'use client'.

Hopefully MUI and Emotion will add support for React Server Components so they can be used directly within server components without being wrapped.

The [Link](app/components/Link.tsx) component bridges between the styled MUI [Link](https://mui.com/material-ui/react-link/) and the Next.js [Link](https://nextjs.org/docs/api-reference/next/link) used for navigation.

## References

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [MUI](https://mui.com/)
- [Emotion](https://emotion.sh/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
