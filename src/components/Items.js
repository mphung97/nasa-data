import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { loadingSelector, getSortAndTabItems } from "../selectors";
import Item from "./Item";

export default function () {
  const loading = useSelector(loadingSelector);
  const items = useSelector(getSortAndTabItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      {loading && "fetching..."}
      {!loading && !items.length ? (
        <p className="text-error text-center" style={{ marginTop: "3rem" }}>
          Nothing here!
        </p>
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
