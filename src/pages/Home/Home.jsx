import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './Home.css'
import axios from 'axios'

const Home = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async ()=>{
   const response = await axios.get("https://653a68532e42fd0d54d3d432.mockapi.io/products")
   setProducts(response.data)
}

  
  useEffect(()=>{
    fetchProducts()
  },[])
  console.log(products)
  return (
    <>
    <Navbar />
    {
      products.map((product)=>{
        return (
          <div key={product.id} className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        <p>{product.productMaterial}</p>
    </div>
        )
      })
    }
    </>
  )
}

export default Home