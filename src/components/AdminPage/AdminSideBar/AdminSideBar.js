import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge,faPlus } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"

function AdminSideBar({setSection}) {
    return (
        <div className="adminSideBar">
            <ul>
                <li onClick={(event) => setSection('manage')}><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon> Manage Products</li>
                <li onClick={(event) => setSection('add')}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Products</li>
            </ul>
        </div>
    )
}

export default AdminSideBar
