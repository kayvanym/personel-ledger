import React, { Component } from "react";
import { throwStatement } from "@babel/types";
import FollowButton from "./FollowButton";
import YearFilter from "./YearFilter";

export default class Table extends Component {
  // This is the rendering function of the component, this is what we output to the screen.
  handleYearFilter = (yearFrom, yearTo) => {
    this.props.onYearFilter(yearFrom, yearTo);
  };

  render() {
    let { allPersons: persons } = this.props;

    if (persons.length === 0) {
      return <div>didn't get any person</div>;
    }

    return (
      <React.Fragment>
        <YearFilter OnYearFilter={this.handleYearFilter} />

        <table className="ui single line table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration Date</th>
              <th>E-mail address</th>
              <th>Country of Origin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {persons.map(person => (
              <tr>
                <td>
                  {person.name.title} {person.name.first} {person.name.last}
                </td>
                <td>{person.registered.date}</td>
                <td>{person.email}</td>
                <td>{person.nat}</td>
                <td>
                  <FollowButton person={person} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
