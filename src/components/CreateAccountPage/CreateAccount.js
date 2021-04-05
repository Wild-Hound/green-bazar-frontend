// form has inherited styles from SiteLogin.css 
import React from 'react'
import{Link} from "react-router-dom";
import './CreateAccount.css'

function CreateAccount() {
    return (
        <div className='createAccout'>
            <form>
                <input type='text' className="CAInput" placeholder="User Name"></input>
                <input type='email' className="CAInput" placeholder="Email"></input>
                <input type='password' className="CAInput" placeholder="Password"></input>
                <input type='password' className="CAInput" placeholder="Confirm Password"></input>
                <input type='Submit' className="CAInput" placeholder="Create Account"></input>
                <p>Already have an account? <Link to="/login">Sign In</Link></p>
            </form>
        </div>
    )
}

export default CreateAccount
