import React from "react";
import { Header, Tabs, Items, Modal } from "./components";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs />
      <Items />
      <Modal />
    </div>
  );
}

export default App;
