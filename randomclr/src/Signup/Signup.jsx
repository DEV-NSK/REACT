import React from 'react';
import './Signup.css'; 

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            ishow: true
        }
    }
    handlesignup = () => {
        this.setState({ ishow: !this.state.ishow });
    }
    render() {
        return (
            <div id='signup'>
                <form action="" style={{ display: this.state.ishow ? 'flex' : 'none' }}>
                    <h2>SignUp</h2>
                    <input type="text" placeholder='Enter your email'/>
                    <input type="text" placeholder='Enter your password'/>
                    <span>SIGNUP</span>
                </form>
            </div>
        )
    }
}

export default Signup;