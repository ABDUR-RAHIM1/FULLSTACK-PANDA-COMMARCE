import React from 'react'
import "./Categories.css"
import shoes from '../../images/categories/shoes.png'
import bag from '../../images/categories/bag.png'
import watch from '../../images/categories/watch.png'
function Categories() {
    return (
        <div className='container my-4'>
            <div className="row">
                <div className="col-md-4">
                    <div className="col1">
                        <div className="text">
                            <h2>Shoes</h2>
                        </div>
                        <div className="img">
                            <img src={shoes} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="col1 col2">
                        <div className="text">
                            <h2>Bag</h2>
                        </div>
                        <div className="img">
                            <img src={bag} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="col1 col3">
                        <div className="text">
                            <h2>Watch</h2>
                        </div>
                        <div className="img">
                            <img src={watch} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories