/**
 *
 * Tests for AddrsListItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { AddrsListItem, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { browserHistory } from 'react-router-dom';
import { addAddrs } from '../actions';

const renderComponent = (store, props = {}) =>
  renderer.create(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddrsListItem {...props} />
        </IntlProvider>
      </Provider>
    )
    .toJSON();

describe('<AddrsListItem />', () => {
  let item;
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  beforeEach(() => {
    item = {
      id: 1,
      addrs: "192.168.1.1"
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = renderComponent(store, { item });
    expect(renderedComponent).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('onAddAddrs', () => {

      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onAddAddrs).toBeDefined();
      });

      it('should dispatch addAddrs when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch, { item: {addrs: "192.168.1.1"}});
        result.onAddAddrs({ addrs: "192.168.1.1" });
        expect(dispatch).toHaveBeenCalledWith(addAddrs("192.168.1.1"));
      });

    });

  });
});
