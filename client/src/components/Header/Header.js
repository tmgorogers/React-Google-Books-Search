import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>React Google Search Books</h1>
        <p>Search for and Save Books of Interest</p>
      </Container>
    </Jumbotron >
  )
};

export default Header;
