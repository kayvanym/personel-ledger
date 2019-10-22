import React, { Component } from "react";
import FetchRandomUser from "./components/FetchRandomUser";
import Menu from "./components/Menu";
import Table from "./components/Table";

import "./App.css";

class App extends Component {
  state = {
    allPersons: [],
    recentPersons: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=40";
    const response = await fetch(url);
    const data = await response.json();

    let recentPersons = data.results.filter(
      person => Date.parse(person.registered.date) > Date.parse("2014-01-01")
    );

    this.setState({
      allPersons: data.results,
      recentPersons: recentPersons
    });

    console.log("data fetched");
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <FetchRandomUser recentPersons={this.state.recentPersons} />
        <Table allPersons={this.state.allPersons} />
      </div>
    );
  }
}

export default App;
