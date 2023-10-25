
import Navbar from '../../components/Navbar'
import './Home.css'
const Home = () => {
  return (
    <>
    <Navbar />
    <div className="card">
        <img src="product-image.jpg" alt="Product Image" />
        <div className="product-name">Product Name</div>
        <div className="product-description">
            This is a sample product description. You can replace it with your own text.
        </div>
    </div>
    </>
  )
}

export default Home