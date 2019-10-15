import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  // Default states for component is set here
  state = {
    loading: true,
    allPersons: [],
    recentPersons: [],
    currentPosition: 1,
    hideNext: false,
    hidePrev: true
  };

  // Asynchronus function that fecth data from an api and put in a person object.
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=30";
    const response = await fetch(url);
    const data = await response.json();

    let recentPersons = data.results.filter(
      person => Date.parse(person.registered.date) > Date.parse("2014-01-01")
    );

    this.setState({
      allPersons: data.results,
      recentPersons: recentPersons,
      loading: false
    });

    console.log("data fetched");
  }

  handleNext = () => {
    if (this.state.currentPosition * 3 < this.state.recentPersons.length) {
      this.setState({ currentPosition: this.state.currentPosition + 1 });
    }
    this.hideButtons();
  };

  handlePrev = () => {
    if (this.state.currentPosition > 1) {
      this.setState({ currentPosition: this.state.currentPosition - 1 });
    }
    this.hideButtons();
  };

  hideButtons = () => {
    if (this.state.currentPosition === 1) {
      this.setState({ hidePrev: true });
    } else {
      this.setState({ hidePrev: false });
    }

    if (this.state.currentPosition * 3 >= this.state.recentPersons.length) {
      this.setState({ hideNext: true });
    } else {
      this.setState({ hideNext: false });
    }
    console.log("Current position:" + this.state.currentPosition);
    console.log("Total persons:" + this.state.recentPersons.length);
  };

  // This is the rendering function of the component, this is what we output to the screen.
  render() {
    /*
   //for workshop2  
    let { person: allpersons } = this.state;

    allpersons = allpersons.filter(
      person => Date.parse(person.registered.date) > Date.parse("2014-01-01") //members in the last 5 years
    );
    allpersons = allpersons.filter((person, index) => index < 3);
   */

    let { recentPersons, currentPosition } = this.state;

    let filtered = [...recentPersons];
    filtered = filtered.filter(
      (p, index) =>
        index >= (currentPosition - 1) * 3 && index < currentPosition * 3
    );

    return (
      // This is what we return to the screen, using Semantic UI CSS.
      <div>
        <p className="left" style={{ width: "400px" }}>
          <button
            className={
              this.state.hidePrev
                ? "ui left labeled icon button hidden"
                : "ui left labeled icon button"
            }
            onClick={this.handlePrev}
          >
            <i className="left arrow icon"></i>
            Prev
          </button>
          <button
            className={
              this.state.hideNext
                ? "ui right labeled icon button hidden"
                : "ui right labeled icon button"
            }
            onClick={this.handleNext}
          >
            <i className="right arrow icon"></i>
            Next
          </button>
        </p>
        <div className="ui six column grid">
          {filtered.map(person => (
            <div className="column" style={{ textTransform: "capitalize" }}>
              <div class="ui fluid card">
                <div class="image">
                  <img src={person.picture.large} alt={person.name.first} />
                </div>
                <div class="content">
                  <a class="header">
                    {person.name.title} {person.name.first} {person.name.last}
                  </a>
                  <div class="meta">
                    <span class="date">Joined in {person.registered.date}</span>
                  </div>
                  <div class="description">
                    {person.name.first} {person.name.last} is an art director
                    living in New York.
                  </div>
                  <div className="mail">
                    <i className="user mail"></i> {person.email}
                  </div>
                </div>
                <div class="extra content">
                  <a> Country of origin: {person.nat}</a>
                </div>
                <div className="extra content">
                  Address: {person.location.street.name}, {person.location.city}{" "}
                  {person.location.state} {person.location.postcode}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
