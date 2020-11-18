import React, { useContext, useReducer, createContext } from "react";

// Creating the Data Layer
export const StateContext = createContext();

// wrap our App to provide the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Information from Data Layer
export const useStateValue = () => useContext(StateContext);
