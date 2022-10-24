import React, { Component } from 'react'

export default class Contact extends Component {
    render() {

        return (
            <div className='contact_form_wrapper'>
                <form id='contact_form' action="#" class="container_contact">
                    <h1>Sign In</h1>
                    <div class="form-element">
                        <input type="text" name="username" id="username" required />
                        <label class="floating-label" for="username">Email or Phone Number</label>
                    </div>
                    <div class="form-element">
                        <input type="password" name="password" id="password" required />
                        <label class="floating-label" for="password">Password</label>
                    </div>
                    <button class="btn_contact">Sign In</button>
                </form>
            </div>
        )

    }
}
