import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  test('returns default state if no action type provided', () => {
    expect(selectedKegReducer({}, {type:null})).toEqual({});
  });

})