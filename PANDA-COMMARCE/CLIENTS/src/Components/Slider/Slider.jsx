import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import tv from "../../images/banner-images/tv.png"
import headphone from "../../images/banner-images/headphone.png"
import xbox from "../../images/banner-images/watch.png"
import "./Slider.css"
function Slider() {
    return (
        <div className="sldierWrapper">
            <Carousel className='CaruselCoontainer'>
                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner">
                                <h2>Super Deal Full HD TV for sports</h2>
                                <p>
                                    Everything happens here,Watch,play And Connect
                                </p>
                                <h1 className='bannerPrice'>501$</h1>
                                <Link to="/allProducts">
                                    <button className='btn btn-info fw-bold'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={tv} alt="" />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner">
                                <h2>Super Deal Full HD TV for sports</h2>
                                <p>
                                    Everything happens here,Watch,play And Connect
                                </p>
                                <h1 className='bannerPrice'>501$</h1>
                                <Link to="/allProducts">
                                    <button className='btn btn-info fw-bold'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={headphone} alt="" />
                            </div>

                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="sliderTextConatiner">
                                <h2>Super Deal Full HD TV for sports</h2>
                                <p>
                                    Everything happens here,Watch,play And Connect
                                </p>
                                <h1 className='bannerPrice'>501$</h1>
                                <Link to="/allProducts">
                                    <button className='btn btn-info fw-bold'>Shop now</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="sliderImgContainer">
                                <img className='slliderIImg' src={xbox} alt="" />
                            </div>

                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;