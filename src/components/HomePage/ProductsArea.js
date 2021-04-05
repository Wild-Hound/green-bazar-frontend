// use well defined data,methods,render areas
// give key to every productcard here

import React, {useContext} from 'react'
import ProductCard from './ProductCard/ProductCard'
import CircularProgress from '@material-ui/core/CircularProgress';
import './ProductArea.css'
import { AuthContext } from '../../App'

function ProductsArea() {

    const {produts} = useContext(AuthContext)

    if(produts.length < 1){
        return(
            <div className="loading">
                <CircularProgress disableShrink />
            </div>
        )
    }
    else{
        return(
            <div className="productsArea">
                {produts?.map(({name,price,image}) =>{
                    return(
                    <ProductCard 
                    title={name} 
                    img={image} 
                    price={price}
                    ></ProductCard>
                    )
                })}
            </div>
        )
    }

    // return (
    //     <div className="productsArea">
    //         {produts?.map(({name,price,image}) =>{
    //             return(
    //             <ProductCard 
    //             title={name} 
    //             img={image} 
    //             price={price}
    //             ></ProductCard>
    //             )
    //         })}
    //     </div>
    // )
}

export default ProductsArea
