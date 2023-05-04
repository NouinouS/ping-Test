/**
 *
 * Tests for AddButton
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import AddButton from '../index';

describe('<AddButton />', () => {
  it('should render a <svg> tag', () => {
    const {
      container: { firstChild },
    } = render(<AddButton />);
    expect(firstChild.tagName).toEqual('svg');
  });

  it('should take fill attribute value from theme.color', () => {
    const theme= {
      color: '#000000',
      bgColor: 'black'
    };
    const {
      container: { firstChild },
    } = render(<AddButton theme={theme} />);
    expect(firstChild.getAttribute('fill')).toEqual(theme.color);
  });
});
