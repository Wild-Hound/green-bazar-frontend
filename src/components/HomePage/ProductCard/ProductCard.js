import React,{useContext,useState,useEffect} from 'react'
import './ProductCard.css'
import { AuthContext } from '../../../App'
import {useHistory} from "react-router-dom"

function ProductCard({title,img,price}) {
    const {selectedProducts,setSelectedProducts} = useContext(AuthContext)
    const[checkSelected,setCheckSelected] = useState(false)
    const history = useHistory()
    useEffect(()=>{
        selectedProducts.forEach((SP) => 
        {SP.name===title&&SP.price===price?
            setCheckSelected(true):
            console.log('bypass')
        })
    },[selectedProducts])

    return (
        <div className="productCard">
            <div className="productHeader">
                <img src={img} alt="" className="productImg"></img>
                <h3 className="productTitle">{title}</h3>
            </div>
            <div className="productFooter">
                <h5 className="productPrice">${price}</h5>
                <button className="productBtn" onClick={(event) => {
                    let x = {name:title, price:price}
                    checkSelected?console.log('bypass'):setSelectedProducts([...selectedProducts,x])
                    history.push("/checkout")
                }}>{checkSelected?"Selected":"Buy Now"}</button>
            </div>
        </div>
    )
}

export default ProductCard
