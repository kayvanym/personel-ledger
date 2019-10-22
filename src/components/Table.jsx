import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  // This is the rendering function of the component, this is what we output to the screen.
  render() {
    let { allPersons: persons } = this.props;

    if (persons.length === 0) {
      return <div>didn't get any person</div>;
    }

    return (
      <table className="ui single line table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration Date</th>
            <th>E-mail address</th>
            <th>Country of Origin</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
