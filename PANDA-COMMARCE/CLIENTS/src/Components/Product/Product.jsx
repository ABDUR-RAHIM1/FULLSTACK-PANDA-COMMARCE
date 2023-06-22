import React from 'react'
import './Product.css'
import shoes1 from '../../images/shoes/shoe-1.png'
import shoes2 from '../../images/shoes/shoe-2.png'
import shoes3 from '../../images/shoes/shoe-3.png'
import bag1 from '../../images/bags/bag-1.png'
import bag2 from '../../images/bags/bag-2.png'
import bag3 from '../../images/bags/bag-3.png'

function Product() {
    return (
        <div className='productContainer'>
            <h1 className='text-success my-3 border-bottom'>Shoes</h1>
            <div className="shoesContainer">
                <div className="shoesCard">
                    <img src={shoes1} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
                <div className="shoesCard">
                    <img src={shoes2} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
                <div className="shoesCard">
                    <img src={shoes3} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
            </div>

<h3 className='text-success my-3 border-bottom'>Backpack</h3>
            <div className="bagContainer">
                <div className="shoesCard">
                    <img src={bag1} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
                <div className="shoesCard">
                    <img src={bag2} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
                <div className="shoesCard">
                    <img src={bag3} alt="" />
                    <h5>Supply 350</h5>
                    <p>This card has supporting text below as a natural lead-in to additional content.</p>
                    <h3>Price : $120</h3>
                    <button className='btn btn-crimson'>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Product