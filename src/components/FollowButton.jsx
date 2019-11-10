import React, { Component } from "react";
class FollowButton extends Component {
  //event handler
  //handle the Follow Button click
  handlePersonClick = () => {
    let person = this.props.person;

    alert(
      "Do you want to follow " +
        person.name.first +
        " " +
        person.name.last +
        "?"
    );
  };
  render() {
    return (
      <button class="ui active primary button" onClick={this.handlePersonClick}>
        <i class="user icon"></i>
        Follow
      </button>
    );
  }
}

export default FollowButton;
