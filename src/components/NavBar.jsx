import React, { useState, useContext } from 'react'
import {Nav, Navbar, Container } from 'react-bootstrap';
import { AccountContext } from '../contexts/AccountContext';




function NavBar() {
    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#/">No Safe Bank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link href="#/CreateAccount">Create Account</Nav.Link>
                <Nav.Link href="#/Deposit">Deposit</Nav.Link>
                <Nav.Link href="#/Withdraw">Withdraw</Nav.Link>
                <Nav.Link href="#/AllData">All Data</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
}

export default NavBar
