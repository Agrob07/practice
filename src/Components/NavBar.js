import React, { Component } from "react";
import { links } from "../data";
import Heading from "./Heading";

export default class NavBar extends Component {
  state = {
    headingName: "Home",
  };

  handleChange(title) {
    this.setState({ headingName: title });
  }

  render() {
    const { headingName: title } = this.state;
    return (
      <>
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href="#" onClick={() => this.handleChange(link.title)}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Heading title={title} />
      </>
    );
  }
}
