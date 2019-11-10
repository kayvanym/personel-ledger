import React, { Component } from "react";
import PersonCard from "./PersonCard";
import PrevNext from "./PrevNext";

export default class RecentMembers extends Component {
  // Default states for component is set here
  state = {
    currentPosition: 1
  };

  handleNextPrev = currentPos => {
    this.setState({ currentPosition: currentPos });
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
        <PrevNext
          listLength={recentPersons.length}
          currentPosition={this.state.currentPosition}
          OnPrevNext={this.handleNextPrev}
        />
        <div className="ui six column grid">
          {filtered.map(person => (
            <PersonCard person={person} />
          ))}
        </div>
      </div>
    );
  }
}
