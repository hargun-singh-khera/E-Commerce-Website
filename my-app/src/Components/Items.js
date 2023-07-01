import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = (props) => {
    const updateProgress=()=>{
        props.setProgress(0)
        props.setProgress(20)
        props.setProgress(40)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        props.setProgress(100)
    }
    console.log(props)
    const renderProduct = ({ productData }) => {
        if (productData) {
            return productData.map((item) => {
                return (
                    <>
                        <div className="col-md-3">
                            <div className="my-3">
                                <div className="card-group">
                                    <Link id="link" to={`${item.department.toLowerCase()}/${item.product_id}`} onClick={updateProgress}>
                                        <div className="card">
                                            <img src={item.product_image} className="card-img-top img-fluid" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <div className="rating-container">
                                                    <Rating val = {item.rating}/>
                                                </div>
                                                <h3 id="product-price" style={{color: "#e00b0b",  marginTop: "15px", marginBottom: "0px"}} >&#8377; {item.price}</h3>
                                                <h5>
                                                    <span style={{fontSize: "16px",color: item.availability === "In Stock" ? "Green" : "Red" }}>{item.availability}</span>
                                                </h5>
                                            </div>
                                        </div>
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
            <div className="row">
                {renderProduct(props)}
            </div>
        </>
    )
}
export default Product;