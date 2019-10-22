import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  // Default states for component is set here
  state = {
    currentPosition: 1,
    hideNext: false,
    hidePrev: true
  };

  handleNext = () => {
    let currpos = this.state.currentPosition;
    if (currpos * 3 < this.props.recentPersons.length) {
      currpos++;
      this.setState({ currentPosition: currpos });
    }

    if (currpos * 3 >= this.props.recentPersons.length) {
      this.setState({ hideNext: true });
    } else {
      this.setState({ hideNext: false });
    }
    if (currpos === 1) {
      this.setState({ hidePrev: true });
    } else {
      this.setState({ hidePrev: false });
    }
  };

  handlePrev = () => {
    let currpos = this.state.currentPosition;

    if (currpos > 1) {
      currpos--;
      this.setState({ currentPosition: currpos });
    }

    if (currpos * 3 >= this.props.recentPersons.length) {
      this.setState({ hideNext: true });
    } else {
      this.setState({ hideNext: false });
    }
    if (currpos === 1) {
      this.setState({ hidePrev: true });
    } else {
      this.setState({ hidePrev: false });
    }
  };

  // This is the rendering function of the component, this is what we output to the screen.
  render() {
    let { currentPosition } = this.state;
    let { recentPersons } = this.props;

    let filtered = [...recentPersons];
    filtered = filtered.filter(
      (p, index) =>
        index >= (currentPosition - 1) * 3 && index < currentPosition * 3
    );

    if (recentPersons.length === 0) {
      return <div>didn't get any person</div>;
    }

    return (
      // This is what we return to the screen, using Semantic UI CSS.
      <div>
        <p className="left" style={{ width: "400px" }}>
          <button
            className={
              this.state.hidePrev
                ? "ui left labeled icon button"
                : "ui left labeled icon button primary"
            }
            onClick={this.handlePrev}
          >
            <i className="left arrow icon"></i>
            Prev
          </button>
          <button
            className={
              this.state.hideNext
                ? "ui right labeled icon button"
                : "ui right labeled icon button primary"
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
