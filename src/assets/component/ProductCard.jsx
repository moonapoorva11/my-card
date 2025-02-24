import React from 'react'
import './ProductCard.css'

 // Make sure the path is correct



const ProductCard = (Props) => {
  return (
  
 <div className='product-box'>

    <img src={Props.image} alt=''/>
    <h2 className='nameheading'>{Props.name}</h2>
    <p className='price'><b>Price</b> <span>{Props.price}</span></p>
    <div className='description'>{Props. description}</div>
    
    <button className='btn'>Buy-Now</button>

 </div>
  

)
}

export default ProductCard ;