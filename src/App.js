import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchError,
  fetching,
  fetchSuccess,
  setTabAll,
  setTabLiked,
  setTabRemoved,
  toggleLike,
  toggleRemove,
  setSortNew,
  setSortAZ,
  setSortOld,
  setSortZA,
} from "./actions";
import "./App.css";
import {
  errorSelector,
  loadingSelector,
  tabSelector,
  getSortAndTabItems,
  sortSelector,
} from "./selectors";
const endpoint = "https://images-api.nasa.gov/search?q=";

function Header() {
  const [query, setQuery] = useState("");
  const error = useSelector(errorSelector);
  const sortSelected = useSelector(sortSelector);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    dispatch(fetching());
    fetch(`${endpoint}${query}`)
      .then((response) => response.json())
      .then((data) => data.collection)
      .then((collection) => collection.items)
      .then((items) =>
        items.map(({ data }) => {
          const { date_created, description, title, nasa_id } = data[0];
          const item = {
            date_created,
            description,
            title,
            nasa_id,
            like: false,
            remove: false,
          };
          return item;
        })
      )
      .then((data) => {
        dispatch(fetchSuccess(data));
      })
      .catch((err) => dispatch(fetchError(err.message)));
    setQuery("");
  };

  return (
    <>
      <div className="app-header">
        <img
          id="logo"
          src="https://images.nasa.gov/images/nasa_logo-large.ee501ef4.png"
          alt="nasa logo"
          height="88"
          width="107"
        />
        <div className="app-actions">
          <form onSubmit={onSubmit}>
            <input
              className="input"
              type="text"
              name="query"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn active">
              search
            </button>
          </form>
          <div>
            <button
              type="button"
              onClick={() => dispatch(setSortNew())}
              className={`btn ${sortSelected === "NEW" && "active"}`}
            >
              newest
            </button>
            <button
              type="button"
              onClick={() => dispatch(setSortOld())}
              className={`btn ${sortSelected === "OLD" && "active"}`}
            >
              oldest
            </button>
            <button
              type="button"
              onClick={() => dispatch(setSortAZ())}
              className={`btn ${sortSelected === "AZ" && "active"}`}
            >
              a-z
            </button>
            <button
              type="button"
              onClick={() => dispatch(setSortZA())}
              className={`btn ${sortSelected === "ZA" && "active"}`}
            >
              z-a
            </button>
          </div>
        </div>
      </div>
      <p className="text-error">{error}</p>
    </>
  );
}

function Tabs() {
  const tabSelected = useSelector(tabSelector);
  const dispatch = useDispatch();
  return (
    <div className="tabs">
      <button
        type="button"
        onClick={() => dispatch(setTabAll())}
        className={`btn ${tabSelected === "ALL" && "active"}`}
      >
        all
      </button>
      <button
        type="button"
        onClick={() => dispatch(setTabLiked())}
        className={`btn ${tabSelected === "LIKED" && "active"}`}
      >
        liked
      </button>
      <button
        type="button"
        onClick={() => dispatch(setTabRemoved())}
        className={`btn ${tabSelected === "REMOVED" && "active"}`}
      >
        removed
      </button>
    </div>
  );
}

function toShortDay(string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(string);

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

function Item({ date_created, description, like, nasa_id, remove, title }) {
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
          <button type="button" className="btn">
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

function Items() {
  const loading = useSelector(loadingSelector);
  const items = useSelector(getSortAndTabItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      {loading && "fetching..."}
      {!loading && !items.length ? (
        <p className="text-error">Nothing to show</p>
      ) : (
        <div className="items">
          {items.map((item) => (
            <Item key={item.nasa_id} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs />
      <Items />
    </div>
  );
}

export default App;
