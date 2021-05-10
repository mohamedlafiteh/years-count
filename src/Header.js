import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <header style={headerStyle}>
        <h1>Years counter </h1>
      </header>
    );
  }
}

const headerStyle = {
  background: "#B8B8B8",
  color: "black",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
