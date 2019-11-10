import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    let { person } = this.props;
    return (
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
              {person.name.first} {person.name.last} is an art director living
              in New York.
            </div>
            <div className="mail">
              <i className="user mail"></i> {person.email}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonCard;
