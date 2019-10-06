import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  // Default states for component is set here
  state = {
    loading: true,
    persons: []
  };

  // Asynchronus function that fecth data from an api and put in a person object.
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=30";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ persons: data.results, loading: false });
  }

  // This is the rendering function of the component, this is what we output to the screen.
  render() {
    // The if-statement checks if there is data in the object holder or not, and displays data if there is.
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    let { persons } = this.state;

    if (persons.length == 0) {
      return <div>didn't get any person</div>;
    }

    return (
      <table class="ui single line table">
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
