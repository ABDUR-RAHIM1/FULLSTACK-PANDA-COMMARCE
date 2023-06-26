import React from 'react'
import { Link } from 'react-router-dom';
import "./TrendingProducts.css"
import { BiShoppingBag } from "react-icons/bi"
function TrendingProducts() {
    const trendProduct = [
        {
            id: "1",
            name: "headphone",
            title: "Bluetooth headphone",
            price: 488,
            image: "https://i.postimg.cc/62Lzd00R/headphone.jpg"
        },
        {
            id: "2",
            name: "Power Bank",
            title: "chargeable Power Bank",
            price: 388,
            image: "https://i.ibb.co/MckgCNR/power-bank.jpg"
        },
        {
            id: "3",
            name: "smartphone",
            title: "Best smartphone",
            price: 22388,
            image: "https://i.ibb.co/JHrZgf9/smartphone.jpg"
        },
        {
            id: "4",
            name: "smart watch",
            title: "GPS Smart Watch",
            price: 1388,
            image: "https://i.ibb.co/dBbrBg6/smart-watch.jpg"
        },
        {
            id: "5",
            name: "Loud Speaker",
            title: "With Voice Control",
            price: 788,
            image: "https://i.ibb.co/hskx3GX/loud-speaker.jpg"
        },
        {
            id: "6",
            name: "smart LED TV",
            title: "LED TV with HD",
            price: 43222,
            image: "https://i.ibb.co/T1mv6PM/smart-led-tv.jpg"
        },
        {
            id: "7",
            name: "water filter",
            title: "Pure Water Filter",
            price: 21222,
            image: "https://i.ibb.co/vv6dyYc/water-filter.jpg"
        },
        {
            id: "8",
            name: "laptop",
            title: "Sony Vaio HD Laptop",
            price: 51222,
            image: "https://i.ibb.co/j4vvmYx/laptop.jpg"
        }
    ];

    console.log(trendProduct)
    return (
        <>
            <h4 className='heading'>Trending Products</h4>
            <div className="circleWrapper">
                <span className='circle'></span>
            </div>
            <div className='TrendingProductsConatiner'>
                {
                    trendProduct.map(pd => {
                        return (
                            <div className='trendProduct'>
                                <img src={pd.image} alt="" />
                                <h5>{pd.name}</h5>
                                <p className='my-2'>{pd.title}</p>
                                <p className='text-success'>Price : {pd.price} $</p>
                                <Link to="/allProducts">

                                    <button className='btn btn-warning w-100 mt-3d-flex justify-content-between'>
                                        <BiShoppingBag className='shopIcon' /> Shop Now
                                    </button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TrendingProducts