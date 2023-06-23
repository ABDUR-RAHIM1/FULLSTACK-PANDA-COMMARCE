import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import img1 from "../../images/banner-images/tv.png"
import img2 from "../../images/banner-images/headphone.png"
import img3 from "../../images/banner-images/xbox.png"

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='container mt-4'>
            <Carousel.Item>
                <div className="slideWrapper">
                    <div className="sliderText">
                        <h1>Panda Full HD TV for sports
                        </h1>
                        <p>
                            Everything happens here,Watch,play And Connect
                        </p>
                        <button className='btn btn-crimson'>Shop now</button>
                    </div>
                    <div className="sliderImg">
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Second slide"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slideWrapper">
                    <div className="sliderText">
                        <h1>Panda Full HD TV for sports
                        </h1>
                        <p>
                            Everything happens here,Watch,play And Connect
                        </p>
                        <h1 className='bannerPrice'>301$</h1>
                        <button className='btn btn-crimson'>Shop now</button>
                    </div>
                    <div className="sliderImg">
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slideWrapper">
                    <div className="sliderText">
                        <h1>
                            Panda HEADPHONE for lissening good music
                        </h1>
                        <p>
                            Buy this headphone and enjoy Your Favorite song

                        </p>
                        <h1 className='bannerPrice'>501$</h1>
                        <button className='btn btn-crimson'>Shop now</button>
                    </div>
                    <div className="sliderImg">
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Second slide"
                        />
                    </div>
                </div>

            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;