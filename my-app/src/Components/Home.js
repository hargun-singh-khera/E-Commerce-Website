import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import About from './About';
import './Home.css';


export default function Home() {
    return (
        <>
            {/* <Modals /> */}
            {/* Adding dissmissable discount alert */}
            <div className="alert alert-info alert-dismissible fade show price-alert" role="alert">
                <i className="bi bi-megaphone-fill"></i>Get upto flat <strong className="strong-1">50% Off</strong> on your first purchase.
                <strong className="strong-2"> Hurry Up. Limited Time Offer Only!</strong>
                <a href="#Women-Men"><span className="badge rounded-pill bg-success">Shop Now</span></a>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"> </button>
            </div>
            <Carousel/>
            <p className="sbe-text">Sustainable. Beautiful. Ethical.</p>
            {/* Used div for aligning button in the center */}
            <div className="text-center">
                <a href="#Women-Men"><button type="button" className="btn btn-primary sbe-shop-now">Shop Now</button></a>
            </div>
            <section id="Women-Men">
                {/* Added Cards */}
                <div className="card-group">
                    <div className="card men-women">
                        <Link to="/women"><img src="https://i.ibb.co/c1zjMbR/a9ff3b-3be32fd5866944a0b2bd867c8e0dbaf9.jpg" className="card-img-top" alt="..."
                            width="100" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/women">Shop Women &gt;</Link></h5>
                        </div>
                    </div>
                    <div className="card men-women">
                        <Link to="/men"><img src="https://i.ibb.co/KqTWnXQ/821f4f8cf3ab9cfd4f179e010f09eb27c4e5ca89-home-banner-2-2.jpg"
                            className="card-img-top" alt="..." width="100" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/men">Shop Men &gt;</Link></h5>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            
        </>
    )
}
