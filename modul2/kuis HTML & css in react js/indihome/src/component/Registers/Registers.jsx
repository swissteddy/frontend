import React, { Component } from 'react';

class Registers extends Component {

    render() {
        return (
            <div className="register">
                <div className="registlayout">
                    <div class="container">
                        <h1>Register</h1>
                        <p>Please Fill in this Form to Create an account</p>
                        <form action="" />
                        <label for="email">Email</label>
                        <input type="text" placeholder="Enter Email" name="Email" required />
                        <label for="psw">Password</label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <label for="psw-repeat">Repeat Password</label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                        <button type="submit" class="registerbtn">Register</button>
                        <div class="container-signin">
                            <p>Already have an account? <a href="#">Sign in</a>.</p>
                        </div>
                    </div>

                    <div class="verifikasi">
                        <img className="verifikasiregis" src={require('../../images/verifikasi.png')} />
                    </div>
                </div>
            </div>

        )
    }
}

export default Registers;