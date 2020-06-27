import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { errorSelector, sortSelector } from '../selectors';
import { fetching, fetchSuccess, fetchError, setSortNew, setSortOld, setSortAZ, setSortZA } from '../actions';
const endpoint = "https://images-api.nasa.gov/search?q=";

export default function () {
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
