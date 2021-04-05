import React, {useContext} from 'react'
import {useHistory} from "react-router-dom"
import SiteLogin from './SiteLogin/SiteLogin'
import firebase from "firebase/app"
import "firebase/auth"
import AuthLogin from './AuthLogin/AuthLogin'
import { AuthContext } from '../../App'

function LoginArea() {

    const{setAuth} = useContext(AuthContext)
    const history = useHistory()

    const firebaseConfig = {
        apiKey: `AIzaSyCV-Fe-nrTflgsgBBTjMnk5PmLDkHcKdkA`,
        authDomain: "react-tut-404.firebaseapp.com",
        projectId: "react-tut-404",
        storageBucket: "react-tut-404.appspot.com",
        messagingSenderId: "928254644686",
        appId: "1:928254644686:web:acd5a553fb6e4e1251db9f",
        measurementId: "G-WNRES7VMJ5"
    }

    !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app()

    const googleSignIn = e =>{
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                // This gives you a Google Access Token. You can use it to access the Google API.
                var user = result.user;
                handleLogin(user.email,user.displayName)
            }).catch((error) => {
               console.log(error)
        });                                                                                            
    }

    const githubSignIn = e =>{
        const provider = new firebase.auth.GithubAuthProvider()

        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            // The signed-in user info.
            var user = result.user;
            handleLogin(user.email,user.displayName)
        }).catch((error) => {
            console.log(error)
        })
    }

    function handleLogin(email,userName){
        setAuth({logged:true,email:email,username:userName?userName:email})
        history.push(history.location.state.from.pathname)
    }

    return (
        <div>
            <SiteLogin></SiteLogin>
            <hr></hr>
            <AuthLogin googleSignIn={googleSignIn} githubSignIn={githubSignIn}></AuthLogin>
        </div>
    )
}

export default LoginArea
