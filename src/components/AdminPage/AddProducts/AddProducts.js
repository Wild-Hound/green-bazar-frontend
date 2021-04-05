import React,{useContext,useState} from 'react'
import { AuthContext } from '../../../App'
import AddedModal from './AddedModal/AddedModal'
import './AddProducts.css'

function AddProducts() {

    let uploadedImg
    const {setReRender} = useContext(AuthContext)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function uploadProduct(event){
        const imgData = new FormData()
        imgData.set('key', '63f07279f0cf65c441494d21f318f551')
        imgData.append('image',uploadedImg)
        await fetch('https://api.imgbb.com/1/upload/1/upload',{
            method:'POST',
            body:imgData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            data.success?sendData(data.data.url):alert("No Image Found")
        })
    }

     async function sendData(imgUrl){
         console.log(imgUrl)
         let name = document.getElementById('proName').value
         let weight = document.getElementById('proWeight').value
         let price = document.getElementById('proPrice').value
         const proData = new FormData()
         proData.append('name',name)
         proData.append('price',price)
         proData.append('image',imgUrl)
         proData.append('weight',weight)
         console.log(name,weight,price,imgUrl)
         let testData = {
             name:name,
             price:price,
             image:imgUrl,
             weight:weight
         }

        await fetch('https://desolate-stream-90591.herokuapp.com/add/product',{
             method:'POST',
             headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
             body:JSON.stringify(testData)
         }).then(res => res.json())
            .then(data => {data.message?setReRender(true):
            alert('Something went wrogn!')})
            handleOpen()
        
        
            
     }

    return (
        <div className="w100">
            <div className='fitCon'>
                <div className="d-f-s">
                    <input type="text" placeholder="Product Name" id='proName'></input>
                    <input type="text" placeholder="Product Weight" id='proWeight'></input>
                </div>
                <div className="d-f-s">
                    <input type="text" placeholder="Product Price" id='proPrice'></input>
                    <input type="file" placeholder='Upload Image' 
                    onChange={(event) => {uploadedImg = event.target.files[0]}}
                    ></input>
                </div>
                <button className="ADPBtn" onClick={(event) => uploadProduct(event)}>Add Product</button>
            </div>
            <AddedModal 
            handleClose={handleClose}
            open={open}></AddedModal>
        </div>
    )
}

export default AddProducts
