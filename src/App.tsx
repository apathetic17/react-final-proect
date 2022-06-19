import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap'; 

function App() {

  
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          Home
        </NavbarBrand>
        <Collapse navbar>
          <Nav  className="me-auto" navbar>
            <NavItem>
              <NavLink href="/MainList">
                Main List 
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Followed">
                Followed Products
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
