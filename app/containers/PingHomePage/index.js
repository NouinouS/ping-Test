/**
 *
 * PingHomePage
 *
 */

import React, { useEffect, useState, memo } from 'react';
import PropTypes, { string } from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import messages from './messages';
import AddressList from 'components/AddressList';
import { loadAddrs } from '../App/actions';
import PageLayout from './PageLayout';

export function PingHomePage(props) {

  let {
    addrsToPing,
    recentAddrs,
    loadAddrs
  } = props;

  //useInjectReducer({ key: 'pingHomePage', reducer });
  //useInjectSaga({ key: 'pingHomePage', saga });

  useEffect(() => {
    if (!recentAddrs || recentAddrs == []) {
      recentAddrs = JSON.parse(localStorage.getItem('recent_addresses')) || [];
      loadAddrs(recentAddrs);
    }

  }, [])

  return (
    <div>
      <Helmet>
        <title>PingHomePage</title>
        <meta name="description" content="Description of PingHomePage" />
      </Helmet>
      <PageLayout>
        <div style= { { gridColumn: '3/6', gridRow: '1/-1'}}>
          <FormattedMessage {...messages.header} />
        </div>
      <AddressList error={!recentAddrs} addrs={!recentAddrs || recentAddrs.map((item, index) => ({ id: index, addrs: item }))} />
      </PageLayout>
    </div>
  );
}

PingHomePage.propTypes = {
  loadAddrs: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    recentAddrs: state.global.recentAddrs
  };
  
};

function mapDispatchToProps(dispatch) {
  return {
    loadAddrs: (value) => { dispatch(loadAddrs(value)) },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(PingHomePage);
