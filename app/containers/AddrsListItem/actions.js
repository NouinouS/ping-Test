/*
 *
 * AddrsListItem actions
 *
 */

import { ADD_ADDRS } from './constants';

export function addAddrs(addrs) {
  return {
    type: ADD_ADDRS,
    addrs
  };
}
