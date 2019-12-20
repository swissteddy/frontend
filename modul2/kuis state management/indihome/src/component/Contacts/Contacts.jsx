import React, { Component } from 'react';


class Contacts extends Component {

    render() {
        return (
            <div className="contact">
                <div className="contactlayout">
                    <div class="imagecs">
                        <img className="imagecustomer" src={require('../../images/kontak.png')} />
                    </div>
                    <div class="container">
                        <form action="" />
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="indonesia">Indonesia</option>
                            <option value="usa">USA</option>
                        </select>
                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                        <input type="submit" value="Submit" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Contacts;