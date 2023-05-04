/**
 *
 * Tests for AddressList
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AddressList from '../index';
// import { DEFAULT_LOCALE } from '../../../i18n';

describe('<AddressList />', () => {

  let shallowExpect; 

  beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
    shallowExpect = compose(expect,toJSON,shallow);
  });

  it('should render the loading indicator when its loading', () => {
    shallowExpect(<AddressList loading />).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <AddressList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('Should render and match the snapshot', () => {
    shallowExpect(<AddressList error={false} />).toMatchSnapshot();
  });
});
