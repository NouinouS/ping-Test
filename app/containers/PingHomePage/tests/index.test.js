/**
 *
 * Tests for PingHomePage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import configureStore from '../../../configureStore';
import { PingHomePage, mapDispatchToProps } from '../index';


describe('<PingHomePage />', () => {

  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <PingHomePage loadAddrs={()=>{}} recentAddrs={['192.168.1.1','1.1.1.1']} />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the localStorage on mount', () => {
    const loadSpy = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <PingHomePage
            loadAddrs={loadSpy}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(loadSpy).toHaveBeenCalled();
  });

});
