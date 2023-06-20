import React, { Component } from 'react';
import './Men.css';
import Items from './Items';
import MenCarousel from './MenCarousel';
// import JSON from './API/products.json';
import Filter from './Filter';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';


const productUrl = "https://fashionwebsiteapi.onrender.com/products/men";


class Men extends Component {
    constructor(props){
        super(props)
        this.state={
            product:'',
            loading: false
        }
    }
    render() {
        return (
            <>
                <MenCarousel />
                <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb p-3 bg-body-tertiary rounded-3">
                        <li class="breadcrumb-item"><i class="bi bi-house-door-fill"></i><Link to='/'>Home</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Category</li>
                        <li class="breadcrumb-item active" aria-current="page">Mens</li>
                        </ol>
                    </nav>
                </div>
                {this.state.loading && <Spinner/>}
                <div className="filters-with-clothes-container">
                    <Filter />
                    <div className="garments-collection-container">
                        <div className="card-group card-image-container">
                            <div className="container my-3">
                                {!this.state.loading && <Items productData = {this.state.product}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        console.log("In mens mount method");
        this.setState({loading:true})
        fetch(productUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({product:data,loading:false})
            console.log(this.state.product);
        })

    }
}

export default Men;