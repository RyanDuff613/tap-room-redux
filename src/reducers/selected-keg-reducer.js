export default (state = {}, action) => {
  const { id } = action;

  switch (action.type) {
  case 'SELECT_KEG':
    const newState = {...state};
    return newState[id];
  default:
    return state;
  };
}