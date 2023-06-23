import React from 'react'
import {Link} from 'react-router-dom'
import Product from '../Product/Product'
import './Products.css'

function Products() {
  return (
    <div className='productContainer '>
        <Product />
     <Link to="/allProducts"><button className='btn btn-outline-primary my-3'>All Products</button></Link>
    </div>
  )
}

export default Products