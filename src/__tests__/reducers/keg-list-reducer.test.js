import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
  const kegData = {
    brand: 'ninkasi',
    name: 'believer',
    price: '$5.00',
    alcoholContent: '8%',
    id: 1
  };

  test('returns default state if no action type is supplied', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('should add new keg information to masterKegList', () => {
    const {brand, name, price, alcoholContent, id } = kegData;
    action = {
      type: 'ADD_KEG',
      brand: brand,
      name: name,
      price: price,
      alcoholContent: alcoholContent,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        brand: brand,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  });

});