import React, { Component } from 'react';
// import JSON from './API/products.json';
import './Product.css'
import ProductItem from './ProductItem';

const productUrl = "https://restapipractice2.herokuapp.com/women";


class WomenProduct extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         product: JSON,
    //         filtered: JSON
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
                {/* {this.state.product.map((item) => {
                    return (
                        <>
                            <ProductItem product_image={item.product_image} title={item.title} price={item.price} colour={item.colour}/>
                        </>
                    )
                })} */}
                <ProductItem productData = {this.state.product}/>;
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

export default WomenProduct;