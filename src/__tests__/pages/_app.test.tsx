/**
 *
 */
import React from 'react';
import {type NextPage} from 'next';
import {render, screen} from '@testing-library/react';

import App from '../../pages/_app';

/*
 *
 */
describe('<App>', () => {
  /*
   *
   */
  test('it renders the component', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const router: any = jest.mock('next/router', () => ({}));
    const page: NextPage = () => <div>Hello World!</div>;

    render(<App Component={page} router={router} pageProps={{}} />);

    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
