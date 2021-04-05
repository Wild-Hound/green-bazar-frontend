import React from 'react'
import './AuthLogin.css'

function AuthLogin({googleSignIn,githubSignIn}) {
    return (
        <div className='authBtnArea'>
            <button onClick={event => googleSignIn(event)} className='authBtn' id='googleSignin'>Login With Google</button>
            <button onClick={event => githubSignIn(event)} className='authBtn' id='githubSignin'>Login With Github</button>
        </div>
    )
}

export default AuthLogin
