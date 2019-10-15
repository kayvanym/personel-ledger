import React, { Component } from "react";
import FetchRandomUser from "./components/FetchRandomUser";
import Menu from "./components/Menu";
import Table from "./components/Table";

import "./App.css";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <Menu />
        <FetchRandomUser />
        <Table />
      </div>
    );
  }
}

export default App;
