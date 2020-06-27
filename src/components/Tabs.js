import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tabSelector } from "../selectors";
import { setTabAll, setTabLiked, setTabRemoved } from "../actions";

export default function ({ loading }) {
  const tabSelected = useSelector(tabSelector);
  const dispatch = useDispatch();
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={() => dispatch(setTabAll())}
        className={`btn ${tabSelected === "ALL" && "active"}`}
        disabled={loading}
      >
        all
      </button>
      <button
        type="button"
        onClick={() => dispatch(setTabLiked())}
        className={`btn ${tabSelected === "LIKED" && "active"}`}
        disabled={loading}
      >
        liked
      </button>
      <button
        type="button"
        onClick={() => dispatch(setTabRemoved())}
        className={`btn ${tabSelected === "REMOVED" && "active"}`}
        disabled={loading}
      >
        removed
      </button>
    </div>
  );
}
