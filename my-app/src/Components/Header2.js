import React from 'react'
// import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Header.css';


export default function Header() {
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
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    MEN
                                </Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                                </ul> */}
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    WOMEN
                                </Link>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                                </ul> */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#About">ABOUT</Link>
                            </li>
                            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#contactModal">
                                <Link className="nav-link active" aria-current="page" to="/#">CONTACT</Link>
                            </li>
                        </ul>
                        <form className="d-flex d-flex-form">
                            <input className="form-control me-2" type="search" placeholder="  Search for products" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {/* <div className="container-icon-nav">
                            <div className="sub-container-icon-nav" data-bs-toggle="modal" data-bs-target="#loginModalToggle">
                                <i className="bi bi-person" style="font-size: 20px;"></i>
                                <p>Profile</p>
                            </div>
                            <div className="sub-container-icon-nav">
                                <i className="bi bi-heart" style="font-size: 20px;"></i>
                                <p>Wishlist</p>
                            </div>
                            <div className="sub-container-icon-nav">
                                <a href="Cart.html" id="cart-logo">
                                    <i className="bi bi-cart2" style="font-size: 20px;"></i>
                                    <p>Cart</p>
                                </a>
                            </div>
                        </div> */}
                        <div className="dropdown text-end">
                            <Link to="/#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
                            </Link>
                            {/* <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item" href="/#">New project...</a></li>
                                <li><a className="dropdown-item" href="/#">Settings</a></li>
                                <li><a className="dropdown-item" href="/#">Profile</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/#">Sign out</a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Adding dissmissable discount alert */}
            <div className="alert alert-info alert-dismissible fade show price-alert" role="alert">
                Get upto flat <strong className="strong-1">50% Off</strong> on your first purchase.
                <strong className="strong-2"> Hurry Up. Limited Time Offer Only!</strong>
                <Link to="#Women-Men"><span className="badge rounded-pill bg-success">Shop Now</span></Link>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"> </button>
            </div>
        </>
    )
}
