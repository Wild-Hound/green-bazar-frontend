import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import { AuthContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './MainNav.css'

function MainNav() {
    const {auth} = useContext(AuthContext)
    return (
        <div className="nav">
            <div className='siteTitle'>Green Bazar</div>
            <div className="navUl w100">
                <ul className="navUl navLinks">
                    <li><Link to="/" className='siteNavLinks'>Home</Link></li>
                    <li><Link to="/checkout" className='siteNavLinks'>Checkout</Link></li>
                    <li><Link to="/admin" className='siteNavLinks'>Admin</Link></li>
                </ul>
                <ul className="navUl profile">
                    <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></li>
                    <li><Link to="/login" className='siteNavLinks'>{
                        auth.logged?(auth.username?auth.username:auth.email):"Log In"
                    }</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default MainNav
