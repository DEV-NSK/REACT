import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        
        return (
            <div id='navbar'>
                <Link to='/'>RANDOM-COLOR</Link>
                <Link to='/teluguquotes'>TELUGU QUOTES</Link>
                <Link to='/themetoggler'>THEME TOGGLER</Link>
                <Link to='/signup' onClick={this.handlesignup}>SIGN UP</Link>
            </div>
        )
    }
}

export default Navbar;