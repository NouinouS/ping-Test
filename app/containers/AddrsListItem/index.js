/**
 *
 * AddrsListItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AddButton from '../../components/AddButton'

import { useInjectReducer } from 'utils/injectReducer';

import reducer from './reducer';
import { addAddrs } from './actions';

export function AddrsListItem(props) {

  const { item, onAddAddrs } = props;

  useInjectReducer({ key: 'addrsListItem', reducer });

  return (
    <div>
      <AddButton onClick={onAddAddrs} />
      { item.addrs }
    </div>
  );
}

AddrsListItem.propTypes = {
  item: PropTypes.object,
  onAddAddrs: PropTypes.func
};

export function mapDispatchToProps(dispatch, props) {
  return {
    onAddAddrs: () => {
      debugger;
      if(props.item.addrs) dispatch(addAddrs(props.item.addrs))
    }
  };
}

const withConnect = connect(
  null, //mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddrsListItem);
