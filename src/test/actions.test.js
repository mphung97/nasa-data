import * as actions from "../actions";

describe("actions fetch", () => {
  it("action fetching", () => {
    const expectedAction = {
      type: actions.DATA_FETCHING,
    };
    expect(actions.fetching()).toEqual(expectedAction);
  });

  it("action fetching success", () => {
    const items = [];
    const expectedAction = {
      type: actions.DADA_SUCCESS,
      items,
    };
    expect(actions.fetchSuccess(items)).toEqual(expectedAction);
  });

  it("action fetching error", () => {
    const payload = "error";
    const expectedAction = {
      type: actions.DADA_ERROR,
      payload,
    };
    expect(actions.fetchError(payload)).toEqual(expectedAction);
  });
});

describe("actions toggle", () => {
  it("action toggle like", () => {
    const id = "1";
    const expectedAction = {
      type: actions.LIKE,
      id,
    };
    expect(actions.toggleLike(id)).toEqual(expectedAction);
  });

  it("action tooggle remove", () => {
    const id = "1";
    const expectedAction = {
      type: actions.REMOVE,
      id,
    };
    expect(actions.toggleRemove(id)).toEqual(expectedAction);
  });

  it("action set toogle MODAL", () => {
    const expectedAction = {
      type: actions.MODAL,
      show: true,
      id: "1",
    };
    expect(actions.toggleModal(true, "1")).toEqual(expectedAction);
  });
});

describe("actions tab", () => {
  it("action set tab ALL", () => {
    const expectedAction = {
      type: actions.SET_TAB,
      payload: "ALL",
    };
    expect(actions.setTabAll()).toEqual(expectedAction);
  });

  it("action set tab LIKED", () => {
    const expectedAction = {
      type: actions.SET_TAB,
      payload: "LIKED",
    };
    expect(actions.setTabLiked()).toEqual(expectedAction);
  });

  it("action set tab REMOVED", () => {
    const expectedAction = {
      type: actions.SET_TAB,
      payload: "REMOVED",
    };
    expect(actions.setTabRemoved()).toEqual(expectedAction);
  });
});

describe("actions sort", () => {
  it("action set sort NEWest", () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: "NEW",
    };
    expect(actions.setSortNew()).toEqual(expectedAction);
  });
  it("action set sort OLDest", () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: "OLD",
    };
    expect(actions.setSortOld()).toEqual(expectedAction);
  });
  it("action set sort AZ", () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: "AZ",
    };
    expect(actions.setSortAZ()).toEqual(expectedAction);
  });
  it("action set sort ZA", () => {
    const expectedAction = {
      type: actions.SET_SORT,
      payload: "ZA",
    };
    expect(actions.setSortZA()).toEqual(expectedAction);
  });
});

describe("actions edit", () => {
  it("action editItem", () => {
    const expectedAction = {
      type: actions.EDIT,
      id: "1",
      title: "lorem",
      desc: "lorem",
    };
    expect(actions.editItem("1", "lorem", "lorem")).toEqual(expectedAction);
  });
});
