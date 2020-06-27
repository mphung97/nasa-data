import { combineReducers } from "redux";

import {
  DATA_FETCHING,
  DADA_SUCCESS,
  DADA_ERROR,
  LIKE,
  REMOVE,
  EDIT,
  SET_SORT,
  SET_TAB,
} from "../actions";

const initialState = {
  items: JSON.parse(localStorage.getItem("items")) || [],
  loading: false,
  error: "",
  tab: "ALL",
  sort: "NEW",
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_FETCHING:
      return { ...initialState, items: [], loading: true, erorr: "" };
    case DADA_SUCCESS:
      return {
        ...initialState,
        items: action.items,
      };
    case DADA_ERROR:
      return { ...state, loading: false, erorr: action.payload };
    case SET_TAB:
      return { ...state, tab: action.payload, sort: "NEW" };
    case SET_SORT:
      return { ...state, sort: action.payload };
    case LIKE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.nasa_id === action.id
            ? {
                ...item,
                like: !item.like,
              }
            : item
        ),
      };
    case REMOVE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.nasa_id === action.id
            ? {
                ...item,
                remove: !item.remove,
              }
            : item
        ),
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  appReducer,
});

export default rootReducer;
