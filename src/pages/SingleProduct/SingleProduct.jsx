import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import './SingleProduct.css'
import axios from "axios"
import { useEffect, useState } from "react"

const SingleProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = useState({})

    //delete product
    const deleteProduct = async ()=>{
        //api hit to delete
    const response = await axios.delete("https://653a68532e42fd0d54d3d432.mockapi.io/products/" + id)
    if(response.status == 200){
        navigate("/")
    }else{
        alert("Something went wrong . Try Again!!")
    }
    }


    //fetch single product
    const fetchSingleProduct = async ()=>{
        const response = await axios.get("https://653a68532e42fd0d54d3d432.mockapi.io/products/" + id)
        setProduct(response.data)
    }
    useEffect(()=>{
        fetchSingleProduct()
    },[])
  return (
    <>
    <Navbar />
    <div  className="card">
        <img src ={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        <mark>{product.productMaterial}</mark><br/>
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>
    </div>
    </>
  )
}

export default SingleProduct