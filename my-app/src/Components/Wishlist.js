import React from 'react'
import './Wishlist.css';
import './Product.css';

export default function Wishlist() {
    return (
        <>
            <div className="container-fluid cart-container">
                <div className="shopping-cart-heading">
                    <h3>Your Wishlist</h3>
                    <a href="/#" id="cart-deselect-item">Empty Wishlist</a>
                    <hr />
                </div>
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/Kj7m7HS/71r7g8c-Gq4-L-SY741-SX-UX-SY-UY.jpg" className="img-fluid rounded-start"
                                alt="..." width="200" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cart-card-body">
                                <h5>Dennis Lingo Men's Checkered Slim fit Casual Shirt</h5>
                                    <div className="rating">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                <h6>
                                    Size: <span id="product-size"> XL &nbsp;|&nbsp; </span>
                                    Colour: <span id="product-colour"> Blue  </span>
                                </h6>
                                <h6 id="price">
                                    Price: <span id="product-price">&#8377; 657.00</span>
                                </h6>
                                <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
                                <button type="button" className="btn btn-primary btn-sm btn-delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="lasthr" />
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/Kj7m7HS/71r7g8c-Gq4-L-SY741-SX-UX-SY-UY.jpg" className="img-fluid rounded-start"
                                alt="..." width="200" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cart-card-body">
                                <h5>Dennis Lingo Men's Checkered Slim fit Casual Shirt</h5>
                                <div className="rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h6>
                                    Size: <span id="product-size"> XL &nbsp;|&nbsp; </span>
                                    Colour: <span id="product-colour"> Blue  </span>
                                </h6>
                                <h6 id="price">
                                    Price: <span id="product-price">&#8377; 657.00</span>
                                </h6>
                                <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
                                <button type="button" className="btn btn-primary btn-sm btn-delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
