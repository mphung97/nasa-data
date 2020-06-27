import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
import { getSortAndTabItems, sortSelector } from "../selectors";
import Item from "./Item";

const Loading = () => (
  <div className="item loading">
    <div
      className="item-header"
      style={{ height: "24px", backgroundColor: "#e8e8e8" }}
    >
      <span></span>
    </div>
    <div className="item-content">
      <div
        className="item-title"
        style={{
          height: "16px",
          marginBottom: "1px",
          backgroundColor: "#e8e8e8",
        }}
      >
        <span></span>
      </div>
      <div
        className="item-desc"
        style={{ height: "75px", backgroundColor: "#e8e8e8" }}
      >
        <span></span>
      </div>
    </div>
  </div>
);

export default function ({ loading }) {
  const items = useSelector(getSortAndTabItems);
  const sort = useSelector(sortSelector);

  useEffect(() => {
    const currentY = window.pageYOffset;
    window.scrollTo(0, currentY + 1);
    window.scrollTo(0, currentY);
  }, [sort]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      {loading && (
        <p className="text-center">
          <span className="lds-ring">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </p>
      )}
      {!loading && !items.length ? (
        <p className="text-error text-center" style={{ marginTop: "3rem" }}>
          Nothing here!
        </p>
      ) : (
        <div className="items">
          {items.map((item) => (
            <LazyLoad key={item.nasa_id} placeholder={<Loading />}>
              <Item key={item.nasa_id} {...item} />
            </LazyLoad>
          ))}
        </div>
      )}
    </>
  );
}
