import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike, toggleRemove, toggleModal } from "../actions";
import { toShortDay } from "../utils";

export default function ({
  date_created,
  description,
  like,
  nasa_id,
  remove,
  title,
}) {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-actions">
          <button
            type="button"
            onClick={() => dispatch(toggleLike(nasa_id))}
            className="btn"
          >
            {like ? "unlike" : "like"}
          </button>
          <button
            type="button"
            onClick={() => dispatch(toggleRemove(nasa_id))}
            className="btn"
          >
            {remove ? "undo" : "remove"}
          </button>
          <button
            type="button"
            onClick={() => dispatch(toggleModal(true, nasa_id))}
            className="btn"
          >
            edit
          </button>
        </div>
        <span>{toShortDay(date_created)}</span>
      </div>
      <div className="item-content">
        <h4 className="item-title">{title}</h4>
        <p className="item-desc">{description}</p>
      </div>
    </div>
  );
}
