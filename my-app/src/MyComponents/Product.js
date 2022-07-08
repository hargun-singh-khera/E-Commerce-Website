import React from 'react'
import './Product.css';

export default function product() {
    return (
        <>
            <div className="product-details-container-2">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/kG9BmfD/41-X50-USMBSL.jpg" className="img-fluid rounded-start" alt="..." width="700" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 id="product-title">More & More Unisex-Adult Cotton Hooded Neck Star War Printed Hoodie</h1>
                                <div className="rating-container">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star"></i>
                                </div>
                                <hr />
                                <h6 id="price">Price: <span id="product-price">&#8377;657.00</span> </h6>
                                <p>Inclusive of all Taxes</p>
                                <h6>Colour:
                                    <span id="product-colour">Yellow</span>
                                </h6>
                                <div className="colours-container">
                                    <div className="colours-container-1">
                                        <span className="border"><img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" alt="" width="40" /></span>
                                    </div>
                                    <div className="colours-container-1">
                                        <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" alt="" width="40" />
                                    </div>
                                    <div className="colours-container-1">
                                        <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" alt="" width="40" />
                                    </div>
                                    <div className="colours-container-1">
                                        <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" alt="" width="40" />
                                    </div>
                                    <div className="colours-container-1">
                                        <img src="https://i.ibb.co/wCbgQKY/41v-Wik-VP5-ML.jpg" alt="" width="40" />
                                    </div>
                                </div>
                                <h6>Size:</h6>
                                <div className="dropdown">
                                    <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Select
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item active" href="/#">XS</a></li>
                                        <li><a className="dropdown-item" href="/#">S</a></li>
                                        <li><a className="dropdown-item" href="/#">M</a></li>
                                        <li><a className="dropdown-item" href="/#">L</a></li>
                                        <li><a className="dropdown-item" href="/#">XL</a></li>
                                        <li><a className="dropdown-item" href="/#">XXL</a></li>
                                    </ul>
                                </div>
                                <div className="usp">
                                    <ul>
                                        <li>Care Instructions: Wash in cold water</li>
                                        <li>Fit Type: Regular</li>
                                        <li>Fit Type: Regular Fit; Main material: 100% Cotton , 320GSM (Bio-Washed & Pre-XShrunk for
                                            Minimum shrinkage)</li>
                                        <li>Actual Products color may vary with product due to monitor settings</li>
                                        <li>Care Instructions: Wash in cold water</li>
                                        <li>Fit Type: Regular</li>
                                        <li>Fit Type: Regular Fit; Main material: 100% Cotton , 320GSM (Bio-Washed & Pre-XShrunk for
                                            Minimum shrinkage)</li>
                                        <li>Actual Products color may vary with product due to monitor settings</li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
                            <button type="button" className="btn btn-primary btn-sm btn-buy-now">Buy Now</button>
                            <button type="button" className="btn btn-primary btn-sm btn-add-to-wishlist">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}    
                
                    
