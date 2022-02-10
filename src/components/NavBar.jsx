import React, { useState, useContext } from 'react'
import {Nav, Navbar, Container } from 'react-bootstrap';
import { AccountContext } from '../contexts/AccountContext';

function NavBar() {
  //const { currentUserId, accounts } = useContext(AccountContext);
  //const currentUser = accounts.filter(account => account.id === currentUserId)[0];
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
          {/* <span>
            <div style={{ color: "palegoldenrod", display: "flex", justifyContent: "flex-end", paddingRight: 130 }}><div>currentUser.name</div>
            <div style={{ color: "deepskyblue", cursor: 'pointer', textDecoration: 'underline', marginLeft: 20}}>Log In / Log Out</div>
            </div>
          </span>  */}
        </Navbar>
        </>
      );
}

export default NavBar
