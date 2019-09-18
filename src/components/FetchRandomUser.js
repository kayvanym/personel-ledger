import React, { Component } from "react";

export default class FetchRandomUser extends Component {
    // Default states for component is set here
    state = {
        loading: true,
        person: null
    }

    // Asynchronus function that fecth data from an api and put in a person object.
    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }
    

    // This is the rendering function of the component, this is what we output to the screen.
    render() {
        // The if-statement checks if there is data in the object holder or not, and displays data if there is.
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>;
        }
        return (
            // This is what we return to the screen, using Semantic UI CSS.
            <div> 
                <header>
                    <h1>Personel Legder of ACME Inc.</h1>
                    </header>             
                <div class="ui card">
                    <div class="image">
                    <img src={this.state.person.picture.large} alt={this.state.person.name.first} />
                    </div>
                    <div class="content">
                        <a class="header">{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</a>
                        <div class="meta">
                            <span class="date">Joined in {this.state.person.registered.date}</span>
                        </div>
                        <div class="description">
                        {this.state.person.name.first} {this.state.person.name.last} is an art director living in New York.
                    </div>
                    <div className="mail"><i className="user mail"></i> {this.state.person.email}</div>
                    </div>
                    <div class="extra content">
                        <a> Country of origin: {this.state.person.nat}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}