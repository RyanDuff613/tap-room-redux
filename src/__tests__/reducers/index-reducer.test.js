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

  test('initial state of kegListReducer matches rootReducer when action type provided', () => {
    const action = {
      type: 'ADD_KEG',
      brand: 'ninkasi',
      name: 'believer',
      price: '$5.00',
      alcoholContent: '8%',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('initial state of formVisibleReducer matches rootReducer when action type provided', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});