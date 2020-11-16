/* eslint-disable import/no-anonymous-default-export */

export default (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
        return [...state, action.payload];
      case 'DELETE':
        return state.filter((post) => post.id !== action.payload);
      default:
        return state;
    }
  };