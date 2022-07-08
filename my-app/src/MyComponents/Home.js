import React from 'react'
import './Home.css';


export default function Home() {
    return (
        <>
            <p className="sbe-text">Sustainable. Beautiful. Ethical.</p>
            {/* Used div for aligning button in the center */}
            <div className="text-center">
                <a href="#Women-Men"><button type="button" className="btn btn-primary sbe-shop-now">Shop Now</button></a>
            </div>
            <section id="Women-Men">
                {/* Added Cards */}
                <div className="card-group">
                    <div className="card">
                        <a href="Women.html"><img src="https://i.ibb.co/c1zjMbR/a9ff3b-3be32fd5866944a0b2bd867c8e0dbaf9.jpg" className="card-img-top" alt="..."
                            width="100" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="Women.html">Shop Women &gt;</a></h5>
                        </div>
                    </div>
                    <div className="card">
                        <a href="Men.html"><img src="https://i.ibb.co/KqTWnXQ/821f4f8cf3ab9cfd4f179e010f09eb27c4e5ca89-home-banner-2-2.jpg"
                            className="card-img-top" alt="..." width="100" /></a>
                        <div className="card-body">
                            <h5 className="card-title"><a href="Men.html">Shop Men &gt;</a></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
