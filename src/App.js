import React, { useState } from "react";
import "./App.css";

function Header(params) {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    console.log(query);
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
            <button type="submit" className="btn">
              search
            </button>
          </form>
          <div>
            <button type="button" className="btn">
              newest
            </button>
            <button type="button" className="btn">
              oldest
            </button>
            <button type="button" className="btn">
              a-z
            </button>
            <button type="button" className="btn">
              z-a
            </button>
          </div>
        </div>
      </div>
      <p className="text-error">error message</p>
    </>
  );
}

function Tabs(params) {
  return (
    <div className="tabs">
      <button type="button" className="btn active">
        all
      </button>
      <button type="button" className="btn">
        liked
      </button>
      <button type="button" className="btn">
        removed
      </button>
    </div>
  );
}

function Item(params) {
  return (
    <div className="item">
      <div className="item-header">
        <div className="item-actions">
          <button type="button" className="btn">
            like
          </button>
          <button type="button" className="btn">
            remove
          </button>
          <button type="button" className="btn">
            edit
          </button>
        </div>
        <span>Date</span>
      </div>
      <div className="item-content">
        <h4 className="item-title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h4>
        <p className="item-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
}

function Items(params) {
  return (
    <div className="items">
      <Item />
    </div>
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
