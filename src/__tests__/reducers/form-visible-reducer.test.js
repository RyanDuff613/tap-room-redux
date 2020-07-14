import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
  test('returns default state if no action type is provided', () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });
})