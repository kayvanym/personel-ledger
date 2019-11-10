import React, { Component } from "react";
import RecentMembers from "./components/RecentMembers";
import Menu from "./components/Menu";
import Table from "./components/Table";

import "./App.css";

class App extends Component {
  state = {
    allPersons: [],
    recentPersons: [],
    searchedPerson: [], //this is used to show the searched perrson in the list. in the page load this array is the same as allPersons array.
    searchedPhrase: "",
    yearFrom: "2000",
    yearTo: "2019"
  };

  //fetch data from API
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=40";
    const response = await fetch(url);
    const data = await response.json();

    let recentPersons = data.results.filter(
      person => Date.parse(person.registered.date) > Date.parse("2014-01-01")
    );

    this.setState({
      allPersons: data.results,
      recentPersons: recentPersons,
      searchedPerson: data.results
    });

    console.log("data fetched");
  }

  //event handler for the search button
  handleSearch = e => {
    //console.log(e.target.value);
    //e.target.value is the search phrase from the search text box
    this.filterThePersonArray(
      e.target.value,
      this.state.yearFrom,
      this.state.yearTo
    );
  };

  //event handler for the year filter button
  handleYearFilter = (yearFrom, yearTo) => {
    console.log(yearFrom);
    console.log(yearTo);

    if (yearFrom.length === 0 && yearTo.length === 0) {
      alert("From Year and To Year are empty.");
      return;
    }

    if (yearFrom.length === 0) {
      yearFrom = "2000";
    }
    if (yearTo.length === 0) {
      yearTo = "2019";
    }

    if (isNaN(yearFrom) || isNaN(yearTo)) {
      alert("Please enter valid year.");
      return;
    }
    if (parseInt(yearFrom) < 2000 || parseInt(yearTo) > 2019) {
      alert("Please enter valid year between 2000 and 2019.");
      return;
    }
    if (parseInt(yearFrom) > parseInt(yearTo)) {
      alert("From Year must be earlier than To Year.");
      return;
    }

    this.filterThePersonArray(this.state.searchedPhrase, yearFrom, yearTo);
  };

  filterThePersonArray(searchedPhrase, yearFrom, yearTo) {
    //console.log(searchedPhrase);
    let filtered = this.state.allPersons;
    if (searchedPhrase.length !== 0) {
      //if the searchedPhrase is not empty
      //filter based on the searched phrase
      filtered = filtered.filter(
        person =>
          person.name.first
            .toLowerCase()
            .startsWith(searchedPhrase.toLowerCase()) ||
          person.name.last
            .toLowerCase()
            .startsWith(searchedPhrase.toLowerCase()) //we change the search phrase and name to lowercase for a fair compare
      );
    }
    //filter based on the Year From
    filtered = filtered.filter(
      person =>
        Date.parse(person.registered.date) >= Date.parse(yearFrom + "-01-01")
    );
    //filter based on the Year To
    filtered = filtered.filter(
      person =>
        Date.parse(person.registered.date) <= Date.parse(yearTo + "-01-01")
    );

    //update the stae and then the components renders again
    this.setState({
      searchedPerson: filtered,
      searchedPhrase: searchedPhrase,
      yearFrom: yearFrom,
      yearTo: yearTo
    });
  }

  render() {
    return (
      <div className="App">
        <Menu OnSearch={this.handleSearch} />

        <RecentMembers recentPersons={this.state.recentPersons} />

        <Table
          allPersons={this.state.searchedPerson}
          onYearFilter={this.handleYearFilter}
          onPersonClick={this.handlePersonClick}
        />
      </div>
    );
  }
}

export default App;
