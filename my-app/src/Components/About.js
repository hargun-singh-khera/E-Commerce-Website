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
                        <p className="lead">Online wholesale maketplace for fashion professional actors and deci-sion makers. A wide
                            range of women and men garments.
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
