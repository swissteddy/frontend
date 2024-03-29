import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class navbar extends Component {
    render(){
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default navbar;