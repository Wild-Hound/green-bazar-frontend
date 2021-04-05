import React,{useContext} from 'react'
import './ManageProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../App'

function ManageProducts() {
    const {produts,setReRender} = useContext(AuthContext)

    function deleteFromDB(e,product){
        fetch(`https://desolate-stream-90591.herokuapp.com/delete/${product._id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => data.message?setReRender(true):alert('Product not deleted'))
    }
    return (
        <div className="w100">
            <table className='productManagment'>
                <tr>
                    <th>Product Name</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                {produts.map((product)=>{
                    const {name,price,weight} = product
                    return(
                        <tr>
                            <td>{name}</td>
                            <td>{weight}</td>
                            <td>{price}</td>
                            <td>
                                <button className='editBtn'><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></button>
                                <button className='deleteBtn'
                                onClick={(event)=>deleteFromDB(event,product)}>
                                    <FontAwesomeIcon icon={faTrashAlt}>
                                    </FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default ManageProducts
