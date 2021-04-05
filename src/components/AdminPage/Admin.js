import React, {useState} from 'react'
import AdminSideBar from './AdminSideBar/AdminSideBar'
import './Admin.css'
import AddProducts from './AddProducts/AddProducts'
import ManageProducts from './ManageProducts/ManageProducts'

function Admin() {
    const [section,setSection] = useState()
    return (
        <div className="admin">
            <AdminSideBar setSection={setSection}></AdminSideBar>
            {section === 'add'?<AddProducts></AddProducts>:<ManageProducts></ManageProducts>}
        </div>
    )
}

export default Admin
