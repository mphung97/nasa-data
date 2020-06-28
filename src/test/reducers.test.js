import { appReducer } from "../reducers";
import {
  DATA_FETCHING,
  DADA_SUCCESS,
  DADA_ERROR,
  LIKE,
  REMOVE,
  SET_TAB,
  SET_SORT,
  MODAL,
  EDIT,
} from "../actions";

describe("app reducer", () => {
  it("initial state", () => {
    expect(appReducer(undefined, {})).toEqual({
      items: [],
      loading: false,
      error: "",
      tab: "ALL",
      sort: "NEW",
      showModal: false,
      selectedId: "",
    });
  });

  it("fetch", () => {
    expect(appReducer(undefined, { type: DATA_FETCHING })).toEqual({
      items: [],
      loading: true,
      error: "",
      tab: "ALL",
      sort: "NEW",
      showModal: false,
      selectedId: "",
    });
  });

  it("sucess", () => {
    expect(
      appReducer(undefined, { type: DADA_SUCCESS, items: [{ test: "1" }] })
    ).toEqual({
      items: [{ test: "1" }],
      loading: false,
      error: "",
      tab: "ALL",
      sort: "NEW",
      showModal: false,
      selectedId: "",
    });
  });

  it("error", () => {
    expect(
      appReducer(undefined, { type: DADA_ERROR, payload: "test error" })
    ).toEqual({
      items: [],
      loading: false,
      error: "test error",
      tab: "ALL",
      sort: "NEW",
      showModal: false,
      selectedId: "",
    });
  });

  it("like", () => {
    expect(
      appReducer(
        {
          items: [{ nasa_id: "test", like: false }],
        },
        { type: LIKE, id: "test" }
      )
    ).toEqual({
      items: [{ nasa_id: "test", like: true }],
    });
  });

  it("remove", () => {
    expect(
      appReducer(
        {
          items: [{ nasa_id: "test", remove: false }],
        },
        { type: REMOVE, id: "test" }
      )
    ).toEqual({
      items: [{ nasa_id: "test", remove: true }],
    });
  });

  it("tab all", () => {
    expect(
      appReducer(
        {
          sort: "OLD",
          tab: "LIKED",
        },
        { type: SET_TAB, payload: "ALL" }
      )
    ).toEqual({
      sort: "NEW",
      tab: "ALL",
    });
  });

  it("tab like", () => {
    expect(
      appReducer(
        {
          sort: "NEW",
          tab: "ALL",
        },
        { type: SET_TAB, payload: "LIKED" }
      )
    ).toEqual({
      sort: "NEW",
      tab: "LIKED",
    });
  });

  it("tab remove", () => {
    expect(
      appReducer(
        {
          sort: "AZ",
          tab: "REMOVED",
        },
        { type: SET_TAB, payload: "REMOVED" }
      )
    ).toEqual({
      sort: "NEW",
      tab: "REMOVED",
    });
  });

  it("sort new", () => {
    expect(
      appReducer(
        {
          sort: "AZ",
          tab: "REMOVED",
        },
        { type: SET_SORT, payload: "NEW" }
      )
    ).toEqual({
      sort: "NEW",
      tab: "REMOVED",
    });
  });
  it("sort old", () => {
    expect(
      appReducer(
        {
          sort: "AZ",
          tab: "REMOVED",
        },
        { type: SET_SORT, payload: "OLD" }
      )
    ).toEqual({
      sort: "OLD",
      tab: "REMOVED",
    });
  });
  it("sort AZ", () => {
    expect(
      appReducer(
        {
          sort: "NEW",
          tab: "REMOVED",
        },
        { type: SET_SORT, payload: "AZ" }
      )
    ).toEqual({
      sort: "AZ",
      tab: "REMOVED",
    });
  });
  it("sort ZA", () => {
    expect(
      appReducer(
        {
          sort: "AZ",
          tab: "REMOVED",
        },
        { type: SET_SORT, payload: "ZA" }
      )
    ).toEqual({
      sort: "ZA",
      tab: "REMOVED",
    });
  });

  it("modal on", () => {
    expect(
      appReducer(
        {
          showModal: false,
          selectedId: "",
        },
        { type: MODAL, show: true, id: "1" }
      )
    ).toEqual({
      showModal: true,
      selectedId: "1",
    });
  });

  it("edit item", () => {
    expect(
      appReducer(
        {
          items: [
            { nasa_id: "1", title: "not title", description: "not desc" },
            { nasa_id: "2", title: "not title", description: "not desc" },
          ],
        },
        { type: EDIT, id: "1", title: "title", desc: "desc" }
      )
    ).toEqual({
      items: [
        { nasa_id: "1", title: "title", description: "desc" },
        { nasa_id: "2", title: "not title", description: "not desc" },
      ],
    });
  });
});
