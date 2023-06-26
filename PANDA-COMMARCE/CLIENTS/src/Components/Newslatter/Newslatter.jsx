import React from 'react'
import './Newslatter.css'

function Newslatter() {
    return (
        <div className='newsletterContainer'>
            <div className="formContainer">
                <div className="formText">
                    <h2>Let's Stay in Touch</h2>
                    <h5>Get Update on sales, specials and more</h5>
                    <form action="">
                         <input className='form-control' type="text" placeholder='Email' />
                         <button className='btn btn-info fw-bold mt-1'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newslatter