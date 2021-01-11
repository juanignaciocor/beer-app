import React from "react";
import styles from '../commons.module.scss';
import {Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap'

const Header = () => {

  return (<div className={styles.headercontainer}>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Birra Puerka</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav>
  </Navbar>

  </div>);

};

export default Header;
