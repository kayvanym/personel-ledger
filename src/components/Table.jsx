import React, { Component } from "react";
import { throwStatement } from "@babel/types";

export default class FetchRandomUser extends Component {
  // This is the rendering function of the component, this is what we output to the screen.
  state = {
    yearFrom: "",
    yearTo: ""
  };

  //event handler
  handleYearFrom(e) {
    this.setState({ yearFrom: e.target.value });
  }
  //event handler
  handleYearTo(e) {
    this.setState({ yearTo: e.target.value });
  }

  render() {
    let { allPersons: persons } = this.props;

    if (persons.length === 0) {
      return <div>didn't get any person</div>;
    }

    return (
      <React.Fragment>
        <div
          class="ui input"
          style={{ marginTop: "20px", marginRight: "20px", width: "20px;" }}
        >
          <input
            type="text"
            placeholder="Year From..."
            onChange={e => this.handleYearFrom(e)}
          />
        </div>
        <div
          class="ui input"
          style={{ marginTop: "20px", marginRight: "20px" }}
        >
          <input
            type="text"
            placeholder="Year To..."
            onChange={e => this.handleYearTo(e)}
          />
        </div>
        <button
          class="ui primary button"
          onClick={() =>
            this.props.onYearFilter(this.state.yearFrom, this.state.yearTo)
          }
        >
          Filter
        </button>
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
                  <button
                    class="ui active primary button"
                    onClick={() => this.props.onPersonClick(person)}
                  >
                    <i class="user icon"></i>
                    Follow
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
