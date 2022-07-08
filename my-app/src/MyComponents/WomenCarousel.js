import React from 'react'
import './Carousel.css';

export default function WomenCarousel() {
    return (
        <>
            {/* Adding Carousel Effect */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button> */}


                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/K0nYLyd/4.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2>SUMMER COLLECTIONS 2022</h2>
                                <button type="button" className="btn btn-primary carousel-shop-now">Shop Now</button>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/YQh0X6w/6.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2>ENLIVEN YOUR STYLE</h2>
                                <button type="button" className="btn btn-primary carousel-shop-now">Shop Now</button>
                            </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://i.ibb.co/zPQnYq3/3.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2>ENLIVEN YOUR STYLE</h2>
                                <button type="button" className="btn btn-primary carousel-shop-now">Shop Now</button>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span> */}
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span> */}
                </button>
            </div>
        </>
    )
}
