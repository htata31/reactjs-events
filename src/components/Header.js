import React, {Component} from 'react';
import './bootstrap.min.css';
import './Header.css'
import { Navbar } from 'react-bootstrap';


class Header extends Component {
    render(){
        return (
            <Navbar sticky="top" id="navbar" className="bg-dark justify-content-between">
                <Navbar.Brand href='https://www.call-em-all.com/'><img alt='Call-Em-All Logo' id='call-em-all-logo' src='Images/Call-Em-All-logo.png'/></Navbar.Brand>
                <Navbar.Text className='navbar-title'> {this.props.title}
                </Navbar.Text>
                <Navbar.Brand href='https://www.meetup.com/'><img alt='Meetup Logo' id='meetup-logo' src='Images/meetup_logo.png'/></Navbar.Brand>
            </Navbar>
        );
    }
  }
  
  export default Header;