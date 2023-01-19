import React, { Component } from 'react';
import './Men.css';
import Items from './Items';
import MenCarousel from './MenCarousel';
// import JSON from './API/products.json';
import Filter from './Filter';


const productUrl = "https://fashionwebsiteapi.onrender.com/products/men";


class Men extends Component {
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
                <div className="filters-with-clothes-container">
                    <Filter />
                    <div className="garments-collection-container">
                        <div className="card-group card-image-container">
                            <div className="container my-3">
                                <Items productData = {this.state.product}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        console.log("In mens mount method");
        fetch(productUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({product:data})
        })
    }
}

export default Men;