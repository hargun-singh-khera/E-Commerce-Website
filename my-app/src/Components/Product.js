import React, { Component } from 'react';
import Rating from './Rating';
import axios from 'axios';
import product from './Product2';

const productUrl = "https://restapipractice2.herokuapp.com/products/men";

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

                {/* {this.renderProduct(this.state.product)} */}
                <div>
                    {this.state.courses.map((item)=> {
                        return(
                            <>
                                <h1>{item.pageNo}</h1>
                                <h1>{item.TotalRecordsCount}</h1>
                                <h3>
                                    {item.colour.map((item)=> {
                                        return <h6>{item.colour}</h6>
                                    })}
                                    {product.title}, {product.price}
                                    {product.colour?.map((item)=> {
                                        return <h6>{item.colour}</h6>
                                    })}
                                </h3>
                            </>
                        )
                    })}
                </div>
                
            </>
        )
    }
    async componentDidMount() {
        try {
            const prodId = this.props.match.params.id;
            const response = await axios.get(`${productUrl}/${prodId}`);
            // console.log(response);
            this.setState({ product: response.data[0] })
            // console.log(response.data);
            console.log(this.state.product.title);
            console.log(this.state.courses);

            // const response = await fetch(`${productUrl}/${prodId}`);
            // const data = await response.json();
            // console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
}

// const ProductItem = (props) => {
//     const renderProduct = ({ productData }) => {
//         if (productData) {
//             return (
//                 <>
//                     <div className="product-details-container-2">
//                         <div className="card mb-3">
//                             <div className="row g-0">
//                                 <div className="col-md-4">
//                                     <img src="https://i.ibb.co/kG9BmfD/41-X50-USMBSL.jpg" className="img-fluid rounded-start" alt="..." width="700" />
//                                 </div>
//                                 <div className="col-md-8">
//                                     <div className="card-body">
//                                         <h1 id="product-title">More & More Unisex-Adult Cotton Hooded Neck Star War Printed Hoodie</h1>
//                                         <div className="rating-container">
//                                             {/* <Rating val = {item.rating}/> */}
//                                             <i className="bi bi-star-fill"></i>
//                                             <i className="bi bi-star-fill"></i>
//                                             <i className="bi bi-star-fill"></i>
//                                             <i className="bi bi-star-fill"></i>
//                                             <i className="bi bi-star"></i>
//                                         </div>
//                                         <hr />
//                                         <h6 id="price">Price: <span id="product-price">&#8377; 657.00</span></h6>
//                                         <p>Inclusive of all Taxes</p>
//                                         <h6>Colour:
//                                             <span id="product-colour">Yellow</span>
//                                             {/* {item.colour.map((item) => {
//                                                     return (
//                                                         <>
//                                                             <span id="product-colour">{item.colour}</span>
//                                                         </>
//                                                     )
//                                                 })} */}
//                                         </h6>
//                                         <div className="colours-container">
//                                             {/* {item.colour.map((item) => {
//                                                     return (
//                                                         <>
//                                                             <div className="colours-container-1">
//                                                                 <span className="border"><img src={item.image} alt="" width="40" /></span>
//                                                             </div>
//                                                         </>
//                                                     )
//                                                 })} */}
//                                             <div className="colours-container-1">
//                                                 <span className="border"><img src="image/41vWikVP5ML.jpg" alt="" width="40" /></span>
//                                             </div>
//                                             <div className="colours-container-1">
//                                                 <img src="image/41vWikVP5ML.jpg" alt="" width="40" />
//                                             </div>
//                                             <div className="colours-container-1">
//                                                 <img src="image/41vWikVP5ML.jpg" alt="" width="40" />
//                                             </div>
//                                             <div className="colours-container-1">
//                                                 <img src="image/41vWikVP5ML.jpg" alt="" width="40" />
//                                             </div>
//                                             <div className="colours-container-1">
//                                                 <img src="image/41vWikVP5ML.jpg" alt="" width="40" />
//                                             </div>
//                                         </div>
//                                         <h6 style={{ marginTop: '10px' }}>Size:</h6>
//                                         <div className="dropdown">
//                                             <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
//                                                 aria-expanded="false">
//                                                 Select
//                                             </button>
//                                             {/* <ul className="dropdown-menu">
//                                                     <li><a className="dropdown-item active" href="/#">Select</a></li>
//                                                     {item.size.map((item) => {
//                                                         return (
//                                                             <>
//                                                                 <li><a className="dropdown-item" href="/#">{item.size}</a></li>
//                                                             </>
//                                                         )
//                                                     })}
//                                                 </ul> */}
//                                             <ul className="dropdown-menu">
//                                                 <li><a className="dropdown-item active" href="/#">XS</a></li>
//                                                 <li><a className="dropdown-item" href="/#">S</a></li>
//                                                 <li><a className="dropdown-item" href="/#">M</a></li>
//                                                 <li><a className="dropdown-item" href="/#">L</a></li>
//                                                 <li><a className="dropdown-item" href="/#">XL</a></li>
//                                                 <li><a className="dropdown-item" href="/#">XXL</a></li>
//                                             </ul>
//                                         </div>
//                                         <div className="usp">
//                                             {/* <ul>
//                                                     {item.description.map((item) => {
//                                                         return (
//                                                             <>
//                                                                 <li>{item}</li>
//                                                             </>
//                                                         )
//                                                     })}
//                                                 </ul> */}
//                                             <ul>
//                                                 <li>Care Instructions: Wash in cold water</li>
//                                                 <li>Fit Type: Regular</li>
//                                                 <li>Fit Type: Regular Fit; Main material: 100% Cotton , 320GSM (Bio-Washed & Pre-XShrunk for
//                                                     Minimum shrinkage)</li>
//                                                 <li>Actual Products color may vary with product due to monitor settings</li>
//                                                 <li>Care Instructions: Wash in cold water</li>
//                                                 <li>Fit Type: Regular</li>
//                                                 <li>Fit Type: Regular Fit; Main material: 100% Cotton , 320GSM (Bio-Washed & Pre-XShrunk for
//                                                     Minimum shrinkage)</li>
//                                                 <li>Actual Products color may vary with product due to monitor settings</li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                     <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
//                                     <button type="button" className="btn btn-primary btn-sm btn-buy-now">Buy Now</button>
//                                     <button type="button" className="btn btn-primary btn-sm btn-add-to-wishlist">Add to Wishlist</button>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </>
//             )
//         }
//     }
//     return (
//         <>
//             {renderProduct(props)}
//         </>
//     )
// }
export default ProductItem;