import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe('selectedKegReducer', () => {

  const currentState = {
    1: {brand: 'ninkasi',
        name: 'believer',
        price: '$5.00',
        alcoholContent: '8%',
        id: 1 },
    2: {brand: 'widmer',
        name: 'hef',
        price: '$4.00',
        alcoholContent: '5%',
        id: 2 },
  };

  test('returns default state if no action type provided', () => {
    expect(selectedKegReducer({},{ type:null })).toEqual({});
  });

  test('returns keg data for a given id', () => {
    const action = {
      type: 'SELECT_KEG',
      id: 1
    };
    expect(selectedKegReducer(currentState, action)).toEqual({
      1: {brand: 'ninkasi',
          name: 'believer',
          price: '$5.00',
          alcoholContent: '8%',
          id: 1 }
    });
  });

})