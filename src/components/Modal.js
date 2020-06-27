import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModalSelector, getItemById } from "../selectors";
import { toggleModal, editItem } from "../actions";

export default function () {
  const isVisible = useSelector(showModalSelector);
  const { nasa_id, title, description } = useSelector(getItemById);
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    setNewTitle(title);
    setNewDescription(description);
    console.log(title, description);
  }, [title, description]);

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  function onClose() {
    dispatch(toggleModal(false, ""));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (newTitle && newDescription) {
      dispatch(editItem(nasa_id, newTitle, newDescription));
      dispatch(toggleModal(false, ""));
    }
  }

  function keydownHandler({ key }) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  }

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">Edit</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div className="modal-body">
            <div className="modal-content">
              <input
                autoFocus
                className="form-input"
                type="text"
                name="newTitle"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                className="form-input"
                name="newDescription"
                rows="4"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
