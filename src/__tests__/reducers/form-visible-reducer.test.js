import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {

  test('returns default state if no action type is provided', () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false);
  });

  test('toggles form visibility to true in redux state', () => {
    expect(formVisibleReducer(false, {type: 'TOGGLE_FORM'})).toEqual(true);
  })

})