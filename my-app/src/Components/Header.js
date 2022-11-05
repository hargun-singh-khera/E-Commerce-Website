import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                {/* Added Navigation */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-cf">
                    <div className="container-fluid nav-cf-1">
                        <Link className="navbar-brand" to="/">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="logo" width="150" className="d-inline-block align-text-top" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        MEN
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/#">T-Shirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Casual Shirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Formal Shirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Sweaters & Sweatshirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Jackets</a></li>
                                        <li><a className="dropdown-item" href="/#">Blazers & Coats</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/#">Jeans</a></li>
                                        <li><a className="dropdown-item" href="/#">Casouel Trousers</a></li>
                                        <li><a className="dropdown-item" href="/#">Formal Trousers</a></li>
                                        <li><a className="dropdown-item" href="/#">Shorts</a></li>
                                        <li><a className="dropdown-item" href="/#">Track Pants and Joggers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        WOMEN
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/#">T-Shirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Dresses</a></li>
                                        <li><a className="dropdown-item" href="/#">Tops</a></li>
                                        <li><a className="dropdown-item" href="/#">Sweaters & Sweatshirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Jackets & Coats</a></li>
                                        <li><a className="dropdown-item" href="/#">Blazzers</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="/#">Jeans</a></li>
                                        <li><a className="dropdown-item" href="/#">Casouel Trousers</a></li>
                                        <li><a className="dropdown-item" href="/#">Formal Trousers</a></li>
                                        <li><a className="dropdown-item" href="/#">Shorts & Skirts</a></li>
                                        <li><a className="dropdown-item" href="/#">Track Pants and Joggers</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#About">ABOUT</a>
                                </li>
                                <li className="nav-item" data-bs-toggle="modal" data-bs-target="#contactModal">
                                    <a className="nav-link active contact-modal" aria-current="page" href="#contact">CONTACT</a>
                                </li>
                            </ul>
                            <form className="d-flex d-flex-form">
                                <input className="form-control me-2" type="search" placeholder="  Search for products" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>

                                <div className="sub-container-icon-nav" data-bs-toggle="modal" data-bs-target="#loginModalToggle">
                                    <i className="bi bi-person" style={{ fontSize: "1.3rem" }}></i>
                                    <p>Profile</p>
                                </div>
                                <div className="sub-container-icon-nav">
                                    <Link to="/wishlist" id="cart-logo">
                                    <i className="bi bi-heart" style={{ fontSize: "1.3rem" }}></i>
                                    <p>Wishlist</p>
                                    </Link>
                                </div>
                                <div className="sub-container-icon-nav">
                                    <Link to="/cart" id="cart-logo">
                                        <i className="bi bi-cart2" style={{ fontSize: "1.3rem" }}></i>
                                        <p>Cart</p>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
