export default (state = {}, action) => {
  const {brand, name, price, alcoholContent, id} = action;

  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        brand: brand,
        name: name,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
  case 'DELETE_KEG':
    const newState = {...state};
    delete newState[id];
    return newState;
  default:
    return state;
  }
};