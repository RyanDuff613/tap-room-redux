import kegListReducer from '../../reducers/keg-list-redecuer';

describe('kegListReducer', () => {
  test('returns default state if no action type is supplied', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });
});