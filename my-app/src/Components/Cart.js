import React from 'react'
import './Cart.css';
import './Product.css';


export default function Cart() {
    return (
        <>
            <div className="container-fluid cart-container">
                <div className="shopping-cart-heading">
                    <h3>Shopping Cart</h3>
                    <a href="/#" id="cart-deselect-item">Deselect all items</a>
                    <hr />
                </div>
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/JHN4p00/be327827-401c-478b-8dfa-098750faadad1614061004812-1.jpg" className="img-fluid rounded-start"
                                alt="..." width="200" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cart-card-body">
                                <h5>FAVELA Vendetta Comic Anonymous Face Mask White for Boys</h5>
                                <p id="availability"><span>In Stock</span></p>
                                <h6 id="colour">
                                    Colour: <span id="product-colour"> Yellow</span>
                                </h6>
                                <h6 id="size">
                                    Size: <span id="product-size"> XL</span>
                                </h6>
                                <div className="dropdown">
                                    <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Qty: 1
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item active" href="/#">0 (Deselect)</a></li>
                                        <li><a className="dropdown-item" href="/#">1</a></li>
                                        <li><a className="dropdown-item" href="/#">2</a></li>
                                        <li><a className="dropdown-item" href="/#">3</a></li>
                                        <li><a className="dropdown-item" href="/#">4</a></li>
                                        <li><a className="dropdown-item" href="/#">5</a></li>
                                        <li><a className="dropdown-item" href="/#">6</a></li>
                                    </ul>
                                </div>

                                <h6 id="price">
                                    Price: <span id="product-price">&#8377; 657.00</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="lasthr" />
                <div className="card mb-3 border-0">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.ibb.co/JHN4p00/be327827-401c-478b-8dfa-098750faadad1614061004812-1.jpg" className="img-fluid rounded-start"
                                alt="..." width="200" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body cart-card-body">
                                <h5>FAVELA Vendetta Comic Anonymous Face Mask White for Boys</h5>
                                <p id="availability"><span>In Stock</span></p>
                                <h6 id="colour">
                                    Colour: <span id="product-colour"> Yellow</span>
                                </h6>
                                <h6 id="size">
                                    Size: <span id="product-size"> XL</span>
                                </h6>
                                <div className="dropdown">
                                    <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Qty: 1
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item active" href="/#">0 (Deselect)</a></li>
                                        <li><a className="dropdown-item" href="/#">1</a></li>
                                        <li><a className="dropdown-item" href="/#">2</a></li>
                                        <li><a className="dropdown-item" href="/#">3</a></li>
                                        <li><a className="dropdown-item" href="/#">4</a></li>
                                        <li><a className="dropdown-item" href="/#">5</a></li>
                                        <li><a className="dropdown-item" href="/#">6</a></li>
                                    </ul>
                                </div>

                                <h6 id="price">
                                    Price: <span id="product-price">&#8377; 657.00</span>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr id="lasthr" />
                <div className="subtotal">
                    <p>Subtotal: (1 item):
                        <span id="total-price">&#8377; 657.00</span>
                        <button type="button" className="btn btn-primary btn-sm btn-proceed-to-buy">Proceed to Buy</button>
                    </p>
                </div>
            </div>
        </>
    )
}
