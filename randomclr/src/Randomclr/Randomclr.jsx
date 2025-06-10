import React from 'react';
import './Randomclr.css'; 

class Randomclr extends React.Component {
    constructor () {
            super()
            this.state = {
                bgcolor:"#abcdef"
            }
        }
        handleclr = () => {
            let chars= "abcdef0123456789";
            let clrcode = "#";
            for (let i = 0; i < 6; i++) {
                const code=Math.floor(Math.random() * chars.length)
                clrcode += chars[code];
            }
            this.setState({bgcolor:clrcode});
        }
    render() {
        return (
            <div id='randomclr' style={{backgroundColor: this.state.bgcolor}}>
                <h1>RANDOM COLOR GENERATOR</h1>
                <button onClick={this.handleclr}>
                    CLICK ME
                </button>
            </div>
        )
    }
}

export default Randomclr;