/*
 *
 * AddrsListItem reducer
 *
 */
import produce from 'immer';
import { ADD_ADDRS } from './constants';

export const initialState = {
  addrsToPing: []
};

/* eslint-disable default-case, no-param-reassign */
const addrsListItemReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_ADDRS:
        draft.addrsToPing = [...draft.addrsToPing, action.addrs]
        break;
    }
  });

export default addrsListItemReducer;
