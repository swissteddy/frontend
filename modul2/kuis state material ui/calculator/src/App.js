import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keypad from "./components/Keypad";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    

    onClick = Button => {

        if(Button === "="){
            this.calculate()
        }

        else if(Button === "C"){
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + Button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>test Calculator</h1>
                    <Result result={this.state.result}/>
                    <Keypad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
