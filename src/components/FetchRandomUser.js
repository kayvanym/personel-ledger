import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  // Default states for component is set here
  state = {
    loading: true,
    person: []
  };

  // Asynchronus function that fecth data from an api and put in a person object.
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=30";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
  }

  // This is the rendering function of the component, this is what we output to the screen.
  render() {
    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    let { person: allpersons } = this.state;

    allpersons = allpersons.filter(
      person => Date.parse(person.registered.date) > Date.parse("2014-01-01") //members in the last 5 years
    );
    allpersons = allpersons.filter((person, index) => index < 3);

    return (
      // This is what we return to the screen, using Semantic UI CSS.
      <div>
        <header>
          <h1>Personel Legder of ACME Inc.</h1>
        </header>
        <div className="ui five column grid">
          {allpersons.map(person => (
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
