import React from 'react';
import './Items.css';
// import Filter from './Filter';

// export default function Items() {
//     const renderProduct = props.prodData.map((item) => {
//         return (
//             <>
//                 <div className="card my-3">
//                     <div className="card-image">
//                         <img src="" alt="" />
//                     </div>
//                     <div class="card-body">
//                         <h6 class="card-title">{item.title}</h6>
//                         <h3>&#8377; {item.price}</h3>
//                         <h5>
//                             <span style={{ color: item.availablility === "In Stock" ? "Green" : "Red" }}>{item.availablility}</span>
//                         </h5>
//                     </div>
//                 </div>
//                 <div class="garments-collection-container">
//                     <div class="card-group card-image-container">
//                         <div class="card clothes-image-container">
//                             <img src={item.product_image} alt="" />
//                             <h6 class="card-title">{item.title}</h6>
//                             <h3>&#8377; {item.price}</h3>
//                             <h5>
//                                 <span style={{ color: item.availablility === "In Stock" ? "Green" : "Red" }}>{item.availablility}</span>
//                             </h5>
//                         </div>
//                         <div class="card clothes-image-container">
//                             <img src={"https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"} class="card-img-top" alt="..." />
//                             <h6>
//                                 <p>ONLY</p>
//                             </h6>
//                             <h3>&#8377; 1149</h3>
//                             <h5>
//                                 <span>In Stock</span>
//                             </h5>
//                         </div>
//                     </div>
//                 </div>
//             </>
//         )
//     })
//     return (
//         <>
//             <div className="items">
//                 {renderProduct}
//             </div>
//             <div class="container">
//                 <Filter/>
//                 {renderProduct}
//             </div>
//         </>
//     )
// }



// import React, { Component } from 'react'

// export default class Items extends Component {
//     render() {
//         let { product_id, product_image, title, price, availablility } = this.props;
//         return (
//             <>
//                 <div className="my-3">
//                     <div className="card-group">
//                         {/* <a href="#product_id"> */}
//                             <div className="card">
//                                 <img src={product_image} className="card-img-top" alt="..." />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{title}</h5>
//                                     <h3 id="product-price">&#8377; {price}</h3>
//                                     <h5>
//                                         <span style={{ color: availablility === "In Stock" ? "Green" : "Red" }}>{availablility}</span>
//                                     </h5>
//                                 </div>
//                             </div>
//                         {/* </a> */}
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Product = (props) => {
    const renderProduct = ({ productData }) => {
        if (productData) {
            return productData.map((item) => {
                return (
                    <>
                        <div className="col-md-3">
                            <div className="my-3">
                                <div className="card-group">
                                    {/* <a href="#product_id"> */}
                                    <Link to={`/men/${item.product_id}`} style={{ textDecoration: 'none', color: '#212529' }}>
                                        {/* {item.product_id} */}
                                        <div className="card">
                                            <img src={item.product_image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <div className="rating-container">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star"></i>
                                                </div>
                                                <h3 id="product-price" style={{color: "#e00b0b",  marginTop: "15px", marginBottom: "0px"}} >&#8377; {item.price}</h3>
                                                <h5>
                                                    <span style={{fontSize: "16px",color: item.availablility === "In Stock" ? "Green" : "Red" }}>{item.availablility}</span>
                                                </h5>
                                            </div>
                                        </div>
                                        {/* </a> */}
                                    </Link>
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
            <div className="row ">
                {renderProduct(props)}
            </div>
        </>
    )
}
export default Product;