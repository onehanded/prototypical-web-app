/**
 * Since this component renders the <html> tag it cannot be tested using the
 * usual render() method, as this generates a warning that:
 *   <html> cannot appear as a child of <div>
 */
import React from 'react';

import Layout from '../layout';

/*
 *
 */
describe('Layout', () => {
  /*
   *
   */
  test('it returns a valid element', () => {
    const layout = Layout({children: <p>Hello World</p>});

    expect(React.isValidElement(layout)).toBeTruthy();
  });
});
