
import Navbar from "../../components/Navbar"
import './EditProduct.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate,  useParams } from "react-router-dom"


const EditProduct = () => {
  const navigate = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = useState({})

    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name,value)
        setProduct({
            ...product,
            [name] : value
        })
        
    }

    //edit product
    const EditProduct = async(e)=>{
      e.preventDefault()
      const response = await axios.put("https://653a68532e42fd0d54d3d432.mockapi.io/products/" + id,product)
      if(response.status == 200){
        navigate("/singleProduct/" + id)
      }else{
        alert("Something went wrong.Try Again")
      }
    }

    
    
    const fetchProduct = async()=>{
        const response = await axios.get("https://653a68532e42fd0d54d3d432.mockapi.io/products/" + id)
        setProduct(response.data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])
  return (
    <>
    <Navbar />
    <div id="product-form">
    <h2>Edit Product</h2>
    <form onSubmit={EditProduct}>
      <label htmlFor="productImage">Product Image:</label>
      
      
<input type="text" value={product.productImage} id="productImage" name="productImage" onChange={handleChange}   />

      
<label htmlFor="productName">Product Name:</label>
<input value = {product.productName} type="text" id="productName" name="productName" onChange={handleChange}    />

<label htmlFor="productDescription">Product Description:</label>
<textarea value = {product.productDescription} id="productDescription" name="productDescription" rows="4" onChange={handleChange}  ></textarea>

<label htmlFor="productMaterial">Product Material:</label>
<input value = {product.productMaterial} type="text" id="productMaterial" name="productMaterial" onChange={handleChange}   />
<button type="submit">Submit</button>
    </form>
  </div>
    </>

  )
}

export default EditProduct