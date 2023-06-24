import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'
import "./Addpost.css"

function Addpost() {
  const nevigate = useNavigate()
  const [massage , setMassage] = useState("")
  const [product, setProduct] = useState({
    title: "",
    price:"",
    desc: "", 
    categorie : "", 
  })

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    fetch("https://panda-backend.onrender.com/product/addProduct", {  
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body : JSON.stringify(product)
    }).then(res => {
      if (res.ok) {
        setMassage("Product added succesfully")
        setTimeout(() => {
          nevigate('/allProducts')
        }, 1500);
      }else{
        setMassage("shomthing went wrong ")

      }
    })

    e.preventDefault()
  }
  return (
    <div className='addPostContainer'>

      <div className="addPostForm">
        <form onSubmit={handleSubmit} method='POST'>
          <input onChange={handleChange} className='form-control mb-2' type="text" placeholder='Title' name='title' required />
          <input onChange={handleChange} className='form-control mb-2' type="number" placeholder='Price' name='price' required />
          <input onChange={handleChange} className='form-control mb-2' type="text" placeholder='Categorie' name='categorie' required />
          <textarea onChange={handleChange} className='form-control mb-2' type="text" placeholder='Description' name='desc' required />
          <button type='submit' className='form-control btn-btn-success fw-bold mb-2'> <AiOutlinePlus className='btnIcon'/>Submit</button>
           
          <h4 className='text-center my-3 text-light'>{massage}</h4>
        </form>
      </div>

    </div>
  )
}

export default Addpost