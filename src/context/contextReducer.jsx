import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./typeActions";

export const contextReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TRANSACTION:
      return [...state, payload];
    case DELETE_TRANSACTION:
      return state.filter(item => item.id !== payload);
    default:
      return state;
      break;
  }
};
