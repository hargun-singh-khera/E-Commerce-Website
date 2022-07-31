import React from 'react';
import Rating from './Rating';

const ProductItem2 = (props) => {
    const renderProduct = ({ productData }) => {
        if (productData) {
            return productData.map((item) => {
                return (
                    <>
                        <div className="product-details-container-2">
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.product_image} className="img-fluid rounded-start" alt="..." width="700" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1 id="product-title">{item.title}</h1>
                                            <div className="rating-container">
                                                <Rating val = {item.rating}/>
                                            </div>
                                            <hr />
                                            <h6 id="price">Price: <span id="product-price">&#8377; {item.price}</span></h6>
                                            <p>Inclusive of all Taxes</p>
                                            <h6>Colour:
                                                <span id="product-colour">{item.colour[0].colour}</span>
                                                {/* {item.colour.map((item) => {
                                                    return (
                                                        <>
                                                            <span id="product-colour">{item.colour}</span>
                                                        </>
                                                    )
                                                })} */}
                                            </h6>
                                            <div className="colours-container">
                                                {item.colour.map((item) => {
                                                    return (
                                                        <>
                                                            <div className="colours-container-1">
                                                                <span className="border"><img src={item.image} alt="" width="40" /></span>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                            <h6 style={{marginTop: '10px'}}>Size:</h6>
                                            <div className="dropdown">
                                                <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Select
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a className="dropdown-item active" href="/#">Select</a></li>
                                                    {item.size.map((item) => {
                                                        return (
                                                            <>
                                                                <li><a className="dropdown-item" href="/#">{item.size}</a></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className="usp">
                                                <ul>
                                                    {item.description.map((item) => {
                                                        return (
                                                            <>
                                                                <li>{item}</li>
                                                            </>
                                                        )
                                                    })}
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
            })
        }
    }
    return (
        <>
            {renderProduct(props)}
        </>
    )
}
export default ProductItem2;
