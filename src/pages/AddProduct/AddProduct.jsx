
import { useState } from "react"
import Navbar from "../../components/Navbar"
import './AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"



const AddProduct = () => {
  const navigate = useNavigate()
  
 //First approach
//  const [productImage,setProductImage] = useState("")
//  const [productName,setProductName] = useState("")
//  const [productDescription,setProductDescription] = useState("")
//  const [productMaterial,setProductMaterial] = useState("")
 
//  const addProduct = async(e)=>{
//   e.preventDefault()
// const response = await axios.post("https://653a68532e42fd0d54d3d432.mockapi.io/products",{
//     productImage: productImage,
//     productName: productName,
//     productDescription: productDescription,
//     productMaterial: productMaterial
//   })
//   console.log(response)
//  }
 
//second approach
// const addProduct= async (e)=>{
//   e.preventDefault()
//   const formData=new formData(e.currentTarget);

//   const data = Object.fromEntries(formData)
//  const response = await axios.post("https://653a68532e42fd0d54d3d432.mockapi.io/products",data)
//  console.log(response)

// }

//Third approach
const [data,setData] = useState({
  productName : "",
  productDescription : "",
  productMaterial : "",
  productIamge : "",
})
const handleChange = (e)=>{
  const {name,value} = e.target
  setData({
    ...data,
    [name] : value
  })
  console.log(data)
}

const addProduct = async (e)=>{
  e.preventDefault()
 const response =  await axios.post("https://653a68532e42fd0d54d3d432.mockapi.io/products",data)
 if(response.status == 201){
  navigate("/")
 }else{
  alert("Something went wrong.Try Again")
 }
}
  return (
    <>
    <Navbar />
    <div id="product-form">
    <h2>Product Information</h2>
    <form onSubmit={addProduct}>
      <label htmlFor="productImage">Product Image:</label>
      {/* <input type="text" id="productImage" name="productImage" accept="image/*" onChange={(e)=>setProductImage(e.target.value)}/>

      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" onChange={(e)=>setProductName(e.target.value)} />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4" onChange={(e)=>setProductDescription(e.target.value)}></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial" onChange={(e)=>setProductMaterial(e.target.value)} />
       */}


      {/* <input type="text" id="productImage" name="productImage"  />

      
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName"  />
      
      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" rows="4"  ></textarea>
      
      <label htmlFor="productMaterial">Product Material:</label>
      <input type="text" id="productMaterial" name="productMaterial"/> */}

<input type="text" id="productImage" name="productImage" onChange={handleChange} />

      
<label htmlFor="productName">Product Name:</label>
<input type="text" id="productName" name="productName" onChange={handleChange}  />

<label htmlFor="productDescription">Product Description:</label>
<textarea id="productDescription" name="productDescription" rows="4" onChange={handleChange} ></textarea>

<label htmlFor="productMaterial">Product Material:</label>
<input type="text" id="productMaterial" name="productMaterial" onChange={handleChange} />
<button type="submit">Submit</button>
    </form>
  </div>

    </>
  )
}

export default AddProduct