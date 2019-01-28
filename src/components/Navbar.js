import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  Container,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
    	<div>
	        <Navbar dark expand="md">
	          <Container>
		          <NavbarBrand href="/">Horoscope</NavbarBrand>
		          <NavbarToggler onClick={this.toggle} />
		          <Collapse isOpen={this.state.isOpen} navbar>
		            <Nav className="ml-auto" navbar>
		              <NavItem>
		                <NavLink href="https://github.com/Ripmma/HoroscopeSite">GitHub</NavLink>
		              </NavItem>
		            </Nav>
		          </Collapse>
	          </Container>
	        </Navbar>
    	</div>
    )
  }
}

export default NavBar;
