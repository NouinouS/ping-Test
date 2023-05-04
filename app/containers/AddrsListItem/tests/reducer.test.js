import produce from 'immer';
import addrsListItemReducer from '../reducer';
import { addAddrs } from '../actions';
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addrsListItemReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      addrsToPing: []
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addrsListItemReducer(undefined, {})).toEqual(expectedResult);
  });

  

   it('should handle the addAddrs action correctly', () => {
    const expectedResult = produce(state, draft => {
       draft.addrsToPing = ['192.168.1.1'];
     });
  
     expect(addrsListItemReducer(state, addAddrs('192.168.1.1'))).toEqual(expectedResult);
  });
  
});
