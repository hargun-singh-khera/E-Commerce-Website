import React, { Component } from 'react';
import './Men.css';
import Items from './Items';
import MenCarousel from './MenCarousel';
// import JSON from './API/products.json';
import Filter from './Filter';


const productUrl = "https://restapipractice2.herokuapp.com/men";


class Men extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         product: JSON
    //     }
    // }
    constructor(props){
        super(props)
        this.state={
            product:''
        }
    }
    render() {
        return (
            <>
                <MenCarousel />
                {/* <Items prodData={this.state.product}/> */}
                {/* <div className="garments-collection-container">
                    <div className="card-group card-image-container">
                        <div className="card clothes-image-container">
                            <img src={this.state.product_image} alt="" />
                            <h6 className="card-title">{this.state.title}</h6>
                            <h3>&#8377; {this.state.price}</h3>
                            <h5>
                                <span style={{ color: this.state.availablility === "In Stock" ? "Green" : "Red" }}>{this.state.availablility}</span>
                            </h5>
                        </div>
                    </div>
                </div>                 */}
                {/* <Filter/> */}
                <div className="filters-with-clothes-container">
                    <Filter />
                    <div className="garments-collection-container">
                        <div className="card-group card-image-container">
                            <div className="container my-3">
                                {/* <div className="row ">
                                    {this.state.product.map((item) => {
                                        return (
                                            <>
                                                <div className="col-md-3" key={item.product_id}>
                                                    <Items product_id={item.product_id} title={item.title} price={item.price} availablility={item.availablility} product_image={item.product_image} />
                                                    <h1>{item.product_id}</h1>
                                                    <Items/>
                                                </div>
                                            </>
                                        )
                                    })}                              
                                </div> */}
                                <Items productData = {this.state.product}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        fetch(productUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({product:data})
        })
    }
}

export default Men;