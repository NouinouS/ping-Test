import { addAddrs } from '../actions';
import { ADD_ADDRS } from '../constants';

describe('AddrsListItem actions', () => {
  describe('Default Action', () => {
    it('has a type of ADD_ADDRS', () => {
      const expected = {
        type: ADD_ADDRS,
      };
      expect(addAddrs()).toEqual(expected);
    });
  });
});
