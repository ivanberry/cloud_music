/*
 * @Description: Create data.js, Happy Coding.
 * @Author: header.css@gmail.com
 * @Date: 2020/8/4
 */
import React, { createContext, useReducer } from "react";
import produce from "immer";
import { CHANGE_ALPHA, CHANGE_CATEGORY } from "../../constants";

export const CategoryDataContext = createContext({});

const initialState = {
  category: "",
  alpha: ""
};

const reducer = produce((draft = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      draft.category = action.data;
      break;
    case CHANGE_ALPHA:
      draft.alpha = action.data;
      break;
    default:
      return draft;
  }
});

export const Data = props => {
  const [data, dispatch] = useReducer(reducer, initialState, undefined);

  return (
    <CategoryDataContext.Provider value={{ data, dispatch }}>
      {props.children}
    </CategoryDataContext.Provider>
  );
};
