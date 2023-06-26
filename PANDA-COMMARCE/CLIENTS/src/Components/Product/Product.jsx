import React from 'react'
import './Product.css'
import shoes1 from '../../images/products/f1.jpg'
import shoes2 from '../../images/products/f7.jpg'
import shoes3 from '../../images/products/f3.jpg'
import bag1 from '../../images/products/b10.jpg'
import bag2 from '../../images/products/b7.jpg'
import bag3 from '../../images/products/f8.jpg'

function Product() {
    return (
        <div className='productContainer'>
            <h1 className='text-success my-3 border-bottom'>Mens</h1>
            <div className="shoesContainer">
                <div className="shoesCard">
                    <img src={shoes1} alt="" />
                    <h5>Men's Clothing</h5>
                    <p>Explore a wide range of stylish and trendy men's clothing options. From casual t-shirts and comfortable jeans to formal suits and dress shirts, discover the perfect outfit for every occasion. Our collection combines quality fabrics, impeccable craftsmanship, and the latest fashion trends to help you elevate your style effortlessly.</p>
                  
                </div>
                <div className="shoesCard">
                    <img src={shoes2} alt="" />
                    <h5>Men's Footwear</h5>
                    <p>your footwear game with our diverse collection of men's shoes. Whether you're looking for sleek dress shoes, comfortable sneakers, rugged boots, or stylish sandals, we have the perfect pair to complement your style and provide the utmost comfort. Choose from a variety of designs, sizes to find the ideal fit for every step you take.</p>
                  
                </div>
                <div className="shoesCard">
                    <img src={shoes3} alt="" />
                    <h5>Men's Accessories</h5>
                    <p>Complete your look with our exclusive range of men's accessories. From classic watches and sophisticated ties to trendy sunglasses and stylish wallets, our collection offers the perfect finishing touches to enhance your personal style. Elevate your outfits with our carefully curated selection of accessories that combine functionality.</p>
                    
                </div>
            </div>

<h3 className='text-success my-3 border-bottom'>Womens</h3>
            <div className="bagContainer">
                <div className="shoesCard">
                    <img src={bag1} alt="" />
                    <h5>Women's Clothing</h5>
                    <p>Discover an extensive collection of women's clothing that caters to your unique style and fashion preferences. From trendy dresses, comfortable tops, and chic skirts to versatile jeans, formal suits, and elegant evening gowns, our range of women's apparel is designed to empower you with confidence and express your individuality.</p>
                
                </div>
                <div className="shoesCard">
                    <img src={bag2} alt="" />
                    <h5>Women's Footwear</h5>
                    <p>Step into a world of fashionable footwear designed exclusively for women. Explore our diverse range of women's shoes, including stylish heels, casual flats, trendy sneakers, elegant sandals, and practical boots. With attention to detail, quality materials, and comfortable designs, our footwear collection ensures you can put your best</p>
                 
                </div>
                <div className="shoesCard">
                    <img src={bag3} alt="" />
                    <h5>Women's Accessories</h5>
                    <p>omplete your ensemble with our exquisite collection of women's accessories. Enhance your style with statement jewelry, fashionable handbags, elegant scarves, trendy sunglasses, and practical yet stylish watches. Our curated selection of women's accessories is crafted to add that extra touch of glamour and sophistication to your outfits,</p>
                
                </div>
            </div>
        </div>
    )
}

export default Product