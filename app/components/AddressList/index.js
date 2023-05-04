/**
 *
 * AddressList
 *
 */

import React, { memo } from 'react';
import StyledAddressList from './StyledAddressList';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import AddrsListItem from '../../containers/AddrsListItem';

function AddressList({ loading, error, addrs }) {

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (addrs !== false) {
    return <StyledAddressList items={addrs} component={AddrsListItem} />;
  }

  return null;
}

AddressList.propTypes = {};

export default memo(AddressList);
