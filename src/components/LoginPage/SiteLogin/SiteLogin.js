import React from 'react'
import './SiteLogin.css'
import {Link} from "react-router-dom";

function SiteLogin() {
    return (
        <div className="siteLogin">
            <form>
                <h1>Log In</h1>
            <input placeholder="Email" type="text" id="emailInput" required></input>
            <input placeholder="Password" type="password" id="passwordInput" required></input>
            <input type='submit' id="loginBtn" value="Log In"></input>
            <p>Dont have an account? <Link to="/createaccount"><span>Create an account</span></Link></p>
            </form>
        </div>
    )
}

export default SiteLogin
