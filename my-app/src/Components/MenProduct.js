import React, { Component } from 'react';
import Rating from './Rating';
import axios from 'axios';

const productUrl = "https://fashionwebsiteapi.onrender.com/products/men";

class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: ''
        }
    }
    render() {
        const { product } = this.state;
        return (
            <>
                <div className="product-details-container-2">
                    <div className="card mb-3 ">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.product_image} className="img-fluid rounded-start" alt="..." width="700" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 id="product-title">{product.title}</h1>
                                    <div className="rating-container">
                                        <Rating val={product.rating} />
                                    </div>
                                    <hr />
                                    <h6 id="price">Price: <span id="product-price">&#8377; {product.price}</span></h6>
                                    <p>Inclusive of all Taxes</p>
                                    <h6>Colour:
                                        <span id="product-colour">{product.colour?.colour}</span>
                                        {/* {product.colour?.map((item) => {
                                            return (
                                                <>
                                                    <span id="product-colour"> {item.colour} </span>
                                                </>
                                            )
                                        })} */}
                                    </h6>
                                    <div className="colours-container">
                                        {product.colour?.map((item) => {
                                            return (
                                                <>
                                                    <div className="colours-container-1">
                                                        <span className="border"><img src={item.image} alt="" width="40" /></span>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        
                                    </div>
                                    <h6 style={{ marginTop: '10px' }}>Size:</h6>
                                    <div className="dropdown">
                                        <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Select
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item active" href="/#">Select</a></li>
                                            {product.size?.map((item) => {
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
                                            {product.description?.map((item) => {
                                                return(
                                                    <>
                                                        <li>{item}</li>
                                                    </>
                                                )
                                            })}

                                        </ul>
                                    </div>
                                </div>
                                <div className="btn-container"> 
                                    <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
                                    <button type="button" className="btn btn-primary btn-sm btn-buy-now">Buy Now</button>
                                    <button type="button" className="btn btn-primary btn-sm btn-add-to-wishlist">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    async componentDidMount() {
        try {
            const prodId = this.props.match.params.id;
            const response = await axios.get(`${productUrl}/${prodId}`);
            this.setState({ product: response.data[0]})
            console.log(response.data[0]);
            console.log(response.data[0].colour[0].colour);
        } catch(err) {
            console.log(err);
        }
    }
}
export default ProductItem;
