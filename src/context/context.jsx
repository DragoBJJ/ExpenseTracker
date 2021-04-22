import React, { useReducer, createContext } from "react";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./typeActions";

import { contextReducer } from "./contextReducer";

const initState = [];
export const ExpenseTrackerContext = createContext(initState);

export const ExpenseProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initState);

  const deleteTransaction = id => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  const addTransaction = transaction => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        transactions
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
