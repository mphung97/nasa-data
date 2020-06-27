import { combineReducers } from "redux";

import {
  DATA_FETCHING,
  DADA_SUCCESS,
  DADA_ERROR,
  LIKE,
  REMOVE,
  EDIT,
  SET_SORT,
} from "../actions";

const initialState = {
  items: [],
  loading: false,
  error: "",
  tab: "ALL",
  sort: "NEW",
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCHING:
      return { ...initialState, loading: true, erorr: "" };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
