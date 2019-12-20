import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
class Keypad extends Component {


    render() {
        const useStyles = makeStyles(theme => ({
            button: {
              margin: theme.spacing(1),
            },
            input: {
              display: 'none',
            },
          }));
        return (
            <div className="Button">
                <Button variant="contained" name="C" onClick={a => this.props.onClick(a.target.name)}>C</Button><br/>

                <Button variant="contained" name="7" onClick={a => this.props.onClick(a.target.name)}>7</Button>
                <Button variant="contained" name="8" onClick={a => this.props.onClick(a.target.name)}>8</Button>
                <Button variant="contained" name="9" onClick={a => this.props.onClick(a.target.name)}>9</Button>
                <Button variant="contained" name="+" onClick={a => this.props.onClick(a.target.name)}>+</Button><br/>


                <Button variant="contained" name="4" onClick={a => this.props.onClick(a.target.name)}>4</Button>
                <Button variant="contained" name="5" onClick={a => this.props.onClick(a.target.name)}>5</Button>
                <Button variant="contained" name="6" onClick={a => this.props.onClick(a.target.name)}>6</Button>
                <Button variant="contained" name="-" onClick={a => this.props.onClick(a.target.name)}>-</Button><br/>

                <Button variant="contained" name="1" onClick={a => this.props.onClick(a.target.name)}>1</Button>
                <Button variant="contained" name="2" onClick={a => this.props.onClick(a.target.name)}>2</Button>
                <Button variant="contained" name="3" onClick={a => this.props.onClick(a.target.name)}>3</Button>
                <Button variant="contained" name="*" onClick={a => this.props.onClick(a.target.name)}>x</Button><br/>


                <Button variant="contained" name="." onClick={a => this.props.onClick(a.target.name)}>.</Button>
                <Button variant="contained" name="0" onClick={a => this.props.onClick(a.target.name)}>0</Button>
                <Button variant="contained" name="=" onClick={a => this.props.onClick(a.target.name)}>=</Button>
                <Button variant="contained" name="/" onClick={a => this.props.onClick(a.target.name)}>÷</Button><br/>
            </div>
        );
    }
}


export default Keypad;
