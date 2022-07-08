// import React, { Component } from 'react'

// export default class ProductItem extends Component {
//     render() {
//         let { title, product_image, price, rating, colour, size, description } = this.props;
//         return (
//             <>
// <div className="product-details-container-2">
//     <div className="card mb-3">
//         <div className="row g-0">
//             <div className="col-md-4">
//                 <img src={product_image} className="img-fluid rounded-start" alt="..." width="700" />
//             </div>
//             <div className="col-md-8">
//                 <div className="card-body">
//                     <h1 id="product-title">{title}</h1>
//                     <div className="rating-container">
//                         <i className="bi bi-star-fill"></i>
//                         <i className="bi bi-star-fill"></i>
//                         <i className="bi bi-star-fill"></i>
//                         <i className="bi bi-star-fill"></i>
//                         <i className="bi bi-star"></i>
//                     </div>
//                     <hr />
//                     <h6 id="price">Price: <span id="product-price">&#8377; </span> {price}</h6>
//                     <p>Inclusive of all Taxes</p>
//                     <h6>Colour:
//                         <span id="product-colour">Yellow</span>
//                     </h6>
//                     <div className="colours-container">
//                         <div className="colours-container-1">
//                             <span className="border"><img src="" alt="" width="40" /></span>
//                         </div>
//                     </div>
//                     <h6>Size:</h6>
//                     <div className="dropdown">
//                         <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
//                             aria-expanded="false">
//                             Select
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><a className="dropdown-item active" href="/#">XS</a></li>
//                         </ul>
//                     </div>
//                     <div className="usp">
//                         <ul>
//                             <li>Care Instructions: Wash in cold water</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
//                 <button type="button" className="btn btn-primary btn-sm btn-buy-now">Buy Now</button>
//                 <button type="button" className="btn btn-primary btn-sm btn-add-to-wishlist">Add to Wishlist</button>
//             </div>
//         </div>
//     </div>

// </div>
//             </>
//         )
//     }
// }


// import React from 'react'

// export default function ProductItem(props) {
//     let { title, product_image, price, rating, colour, size, description } = this.props;
//     const renderproduct = props.prodData.map((item) => {
//         return (
//             <>
//                 <div className="product-details-container-2">
//                     <div className="card mb-3">
//                         <div className="row g-0">
//                             <div className="col-md-4">
//                                 <img src={item.product_image} className="img-fluid rounded-start" alt="..." width="700" />
//                             </div>
//                             <div className="col-md-8">
//                                 <div className="card-body">
//                                     <h1 id="product-title">{item.title}</h1>
//                                     <div className="rating-container">
//                                         <i className="bi bi-star-fill"></i>
//                                         <i className="bi bi-star-fill"></i>
//                                         <i className="bi bi-star-fill"></i>
//                                         <i className="bi bi-star-fill"></i>
//                                         <i className="bi bi-star"></i>
//                                     </div>
//                                     <hr />
//                                     <h6 id="price">Price: <span id="product-price">&#8377; {item.price}</span></h6>
//                                     <p>Inclusive of all Taxes</p>
//                                     <h6>Colour:
//                                         <span id="product-colour">{item.colour[0].colour}</span>
//                                     </h6>
//                                     <div className="colours-container">
//                                         <div className="colours-container-1">
//                                             <span className="border"><img src="" alt="" width="40" /></span>
//                                         </div>
//                                     </div>
//                                     <h6>Size:</h6>
//                                     <div className="dropdown">
//                                         <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
//                                             aria-expanded="false">
//                                             Select
//                                         </button>
//                                         <ul className="dropdown-menu">
//                                             <li><a className="dropdown-item active" href="/#">XS</a></li>
//                                         </ul>
//                                     </div>
//                                     <div className="usp">
//                                         <ul>
//                                             <li>Care Instructions: Wash in cold water</li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <button type="button" className="btn btn-primary btn-sm btn-add-to-card">Add to Cart</button>
//                                 <button type="button" className="btn btn-primary btn-sm btn-buy-now">Buy Now</button>
//                                 <button type="button" className="btn btn-primary btn-sm btn-add-to-wishlist">Add to Wishlist</button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </>
//         )
//     })
//     return (
//         <>
//             {renderproduct}
//         </>
//     )
// }



import React from 'react'

const ProductItem = (props) => {
    const renderProduct = ({ productData }) => {
        if (productData) {
            return productData.map((item) => {
                return (
                    <>
                        <div className="product-details-container-2" key={item.product_id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.product_image} className="img-fluid rounded-start" alt="..." width="700" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h1 id="product-title">{item.title}</h1>
                                            <div className="rating-container">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star"></i>
                                            </div>
                                            <hr />
                                            <h6 id="price">Price: <span id="product-price">&#8377; {item.price}</span></h6>
                                            <p>Inclusive of all Taxes</p>
                                            <h6>Colour:
                                                <span id="product-colour">{item.colour.colour}</span>
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
                                            <h6>Size:</h6>
                                            <div className="dropdown">
                                                <button className="btn btn-sm dropdown-toggle dropdown-toggle-size" type="button" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    Select
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item active" href="/#">Select</a></li>
                                                    {item.size.map((item) => {
                                                        return (
                                                            <>
                                                                <li><a class="dropdown-item" href="/#">{item.size}</a></li>
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
            {/* <div className="row "> */}
            {renderProduct(props)}
            {/* </div> */}
        </>
    )
}
export default ProductItem;
