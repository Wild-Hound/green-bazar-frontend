import React,{useContext,useState} from 'react'
import { AuthContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './CheckOut.css'
import CheckedOutModal from './CheckedOutModal/CheckedOutModal'

function CheckOut() {

    const{selectedProducts,setSelectedProducts,auth} = useContext(AuthContext)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function removeItemFromList(event, product){
        let x = []
        selectedProducts.forEach(item =>{
            if(!(item.name == product.name)){
                x.push(item)
            }
        })
        setSelectedProducts([...x])
    }

    function buyProduct(event){
        let userData = {
            email:auth.email,
            product:selectedProducts
        }
        fetch('http://localhost:5200/buy',{
            method:"POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body:JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => { if(data.insertedCount > 0){
            handleOpen()
            }else{
                alert("Somethign went wrogn")
            } 
        })
    }

    return (
        <div>
            <h1>Check Out</h1>
            {selectedProducts?.map((product =>{
                return(
                    <div className='indProduct'>
                        <h2>{product.name}</h2>
                        <h2>${product.price}</h2>
                        <button className='removeCartItem' onClick={(event) => {
                            removeItemFromList(event, product)
                        } }>
                            <FontAwesomeIcon icon={faTimes}>
                            </FontAwesomeIcon>
                            </button>
                    </div>
                )
            }))}
            <button className="buyProducts" onClick={(event) => buyProduct(event)}>Buy All Products</button>
            <CheckedOutModal
            handleClose={handleClose}
            open={open}
            ></CheckedOutModal>
        </div>
    )
}

export default CheckOut
