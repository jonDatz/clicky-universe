import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <a href="#" class="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
