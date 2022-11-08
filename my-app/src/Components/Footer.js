import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            {/* Adding Website Features */}
            <hr className="featurette-divider" />
            <section id="About">
                <div className="fluid-container icon-container" id="icon-grid">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                                <path
                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>
                            <div>
                                <h4 className="fw-bold mb-0">Fast and Free Delivery</h4>
                                <p>Free Shipping for all the Products.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            </svg>
                            <div>
                                <h4 className="fw-bold mb-0">Money Back Guarantee</h4>
                                <p>Money Back Guarantee within 5-10 working days.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                <path
                                    d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                            </svg>
                            <div>
                                <h4 className="fw-bold mb-0">30-Days Return Policy</h4>
                                <p>Return product within 30 days for free and get money back.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" viewBox="0 0 16 16">
                                <path
                                    d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                            </svg>
                            <div>
                                <h4 className="fw-bold mb-0">24/7 Customer Support</h4>
                                <p>Customer support available 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="featurette-divider" />

            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
                    <div className="col mb-3">
                        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="250px" />
                        </a>
                        <p className="text-muted">&copy; 2022-2023 MyHosieryShop.com. All Rights Reserved</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                        <h5>INFORMATION</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#About" className="nav-link p-0 text-muted">About Us</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Customer Service</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Privacy</a></li>
                            <li className="nav-item mb-2" data-bs-toggle="modal" data-bs-target="#contactModal"><a className="nav-link p-0 text-muted contact-modal" aria-current="page" href="#contact">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Orders & Returns</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>WHY BUY FROM US</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Shipping & Returns</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Secure Shopping</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Affiliates</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Group Sales</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="col mb-3">
                        <h5>MY ACCOUNT</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2" data-bs-toggle="modal" data-bs-target="#loginModalToggle"><a href="#login" className="nav-link p-0 text-muted">Sign In</a></li>
                            <li className="nav-item mb-2"><Link to="/cart" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} id="cart-logo" className="nav-link p-0 text-muted">View Cart</Link></li>
                            <li className="nav-item mb-2"><Link to="/wishlist" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} id="cart-logo" className="nav-link p-0 text-muted"> Wishlist</Link></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Track My Order</a></li>
                            <li className="nav-item mb-2"><a href="/#" className="nav-link p-0 text-muted">Help</a></li>
                        </ul>
                    </div>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="/#"><i className="fab fa-facebook-f" style={{ fontSize: "25px" }}></i></a></li>
                        <li className="ms-3"><a className="link-dark" href="/#"><i className="fab fa-linkedin-in" style={{ fontSize: "25px" }}></i></a></li>
                        <li className="ms-3"><a className="link-dark" href="/#"><i className="fab fa-instagram" style={{ fontSize: "25px" }}></i></a></li>
                        <li className="ms-3"><a className="link-dark" href="/#"><i className="fab fa-twitter" style={{ fontSize: "25px" }}></i></a></li>
                    </ul>
                </footer>
                <p className="ewl">Engineered with  <i className="fas fa-heart">&nbsp;</i>by Hargun Singh Khera</p>
            </div>
        </>
    )
}
