import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div class="ui pointing menu">
        <a class="active item">Home</a>
        <a class="item">Messages</a>
        <a class="item">Friends</a>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent icon input">
              <input
                type="text"
                placeholder="Search..."
                onChange={e => this.props.OnSearch(e)}
              />
              <i class="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
