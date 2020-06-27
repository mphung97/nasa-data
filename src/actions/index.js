export const DATA_FETCHING = "DATA_FETCHING";
export const DADA_SUCCESS = "DADA_SUCCESS";
export const DADA_ERROR = "DADA_ERROR";
export const LIKE = "LIKE";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";
export const SET_SORT = "SET_SORT";
export const SET_TAB = "SET_TAB";
export const MODAL = "MODAL";

export const fetching = () => ({ type: DATA_FETCHING });
export const fetchSuccess = (items) => ({ type: DADA_SUCCESS, items });
export const fetchError = (payload) => ({ type: DADA_ERROR, payload });

export const toggleLike = (id) => ({ type: LIKE, id });
export const toggleRemove = (id) => ({ type: REMOVE, id });

export const setTabAll = () => ({ type: SET_TAB, payload: "ALL" });
export const setTabLiked = () => ({ type: SET_TAB, payload: "LIKED" });
export const setTabRemoved = () => ({ type: SET_TAB, payload: "REMOVED" });

export const setSortNew = () => ({ type: SET_SORT, payload: "NEW" });
export const setSortOld = () => ({ type: SET_SORT, payload: "OLD" });
export const setSortAZ = () => ({ type: SET_SORT, payload: "AZ" });
export const setSortZA = () => ({ type: SET_SORT, payload: "ZA" });

export const toggleModal = (show, id) => ({ type: MODAL, show, id });
export const editItem = (id, title, desc) => ({ type: EDIT, id, title, desc });
