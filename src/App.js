import React from "react";
import { Header, Tabs, Items, Modal } from "./components";
import "./App.css";
import { useSelector } from "react-redux";
import { loadingSelector } from "./selectors";

function App() {
  const loading = useSelector(loadingSelector);

  return (
    <div className="container">
      <Header loading={loading} />
      <Tabs loading={loading} />
      <Items loading={loading} />
      <Modal />
    </div>
  );
}

export default App;
