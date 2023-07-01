import React, { Component } from 'react';
import './Men.css';
import Items from './Items';
import KidsCarousel from './KidsCarousel';
// import JSON from './API/products.json';
import Filter from './Filter';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';


const productUrl = "https://fashionwebsiteapi.onrender.com/products/men";


class Kids extends Component {
    constructor(props){
        super(props)
        this.state={
            product:'',
            loading: false,
        }
    }
    render() {
        return (
            <>
                <KidsCarousel />
                <div>
                    <nav aria-label="breadcrumb ml-auto">
                        <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
                            <li class="breadcrumb-item"><Link to='/' style={{textDecoration:'none', color:'black'}}>Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Kids</li>
                        </ol>
                    </nav>
                </div>
                {this.state.loading && <Spinner/>}
                <div className="filters-with-clothes-container">
                    <Filter />
                    <div className="garments-collection-container">
                        <div className="card-group card-image-container">
                            <div className="container my-3">
                                {!this.state.loading && <Items productData = {this.state.product} setProgress={this.props.setProgress}/>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        this.props.setProgress(0);
        console.log("In mens mount method");
        this.setState({loading:true})
        fetch(productUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({product:data,loading:false})
            console.log(this.state.product);
        })
        this.props.setProgress(100);

    }
}

export default Kids;