import React from 'react'
import './About.css';

export default function About() {
    return (
        <>
            <br /><br />
            <div className="container marketing">

                <div className="row featurette">
                    <div className="col-md-7">
                        <h1 className="featurette-heading">About Us</h1>
                        <p className="lead">
                            Our Mission is to make a difference through our branding by staying ahead of the fashion trends, defining style and giving customers what they want.
                            <br />
                            MyHosieryShop's Store is here to serve you and make sure you find the Perfect Look for every occasion. 
                            <br />
                            Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.
                            <br />
                            <span className="make-casual-unique">Make Casual Unique</span>
                        </p>
                        <a href="#Women-Men"><button type="button" className="btn btn-primary abt-buy-now">Buy Now &gt;</button></a>
                    </div>
                    <div className="col-md-5">
                        <img src="https://i.ibb.co/M6qXdLX/About-Us-1071x492-2.png" alt="" width="100%" />
                    </div>
                </div>
                {/* END THE FEATURETTES */}
            </div>
        </>
    )
}
