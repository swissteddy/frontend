import React, { Component } from 'react';
import '../styles/style.css';

class SimpleEvent extends Component {
    // state = {  }
    constructor(props){
        super(props);
        this.state={toggleStatus:true}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        // console.log('Aww Aku di Klik..');
        // alert('Aww Aku di klik..');
        // this.state.toggleStatus=!this.state.toggleStatus;
        this.setState(state =>({toggleStatus : !state.toggleStatus}))

    }

    //update

    render() { 
        return (
            <div>
                <img className={this.state.toggleStatus ? 'imgOn' : 'imgOff'} alt='' src={require('../image/spidey.jpg')} width ="300" height="300"/>
                <br/>
                <button className ="blueButton" onClick={this.handleClick}>
                    {/* ON */}
                    {!this.state.toggleStatus ? 'ON' : 'OFF'}
                </button>
            </div>
          );
    }
}
 
export default SimpleEvent;