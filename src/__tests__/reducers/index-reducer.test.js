import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer'
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('returns default state if no action is provided', () => {
    expect(rootReducer({}, {type: null} )).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    });
  });

  test('initial state of kegListReducer should match rootReducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, {type:null}));
  });

  test('initial state of formVisibleReducer should match rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

});