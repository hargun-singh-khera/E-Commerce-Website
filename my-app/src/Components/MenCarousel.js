import React from 'react'
import './Carousel.css';

export default function MenCarousel() {
    return (
        <>
            {/* Adding Carousel Effect */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/wBTw4WK/slide6.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>SUMMER COLLECTIONS</h2>
                                <a href="#Women-Men"><button type="button" className="btn btn-primary carousel-shop-now">Shop
                                    Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/wd21q3W/slide7.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>EXPERIENCE REAL ATTRACTIVENESS</h2>
                                <a href="#Women-Men"><button type="button" className="btn btn-primary carousel-shop-now">Shop
                                    Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/KsTsWgC/slide8.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>ENLIVEN YOUR STYLE</h2>
                                <a href="#Women-Men"><button type="button" className="btn btn-primary carousel-shop-now">Shop
                                    Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/x38HchC/slide9.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>WINTER COLLECTIONS</h2>
                                <a href="#Women-Men"><button type="button" className="btn btn-primary carousel-shop-now">Shop
                                    Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/2PR9hjh/slide10.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h2>WINTER COLLECTIONS</h2>
                                <a href="#Women-Men"><button type="button" className="btn btn-primary carousel-shop-now">Shop
                                    Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
