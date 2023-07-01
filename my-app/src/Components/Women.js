import React, { Component } from 'react';
import './Men.css';
// import JSON from './API/products.json';
import Items from './Items';
import WomenCarousel from './WomenCarousel';
import Filter from './Filter';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const productUrl = "https://fashionwebsiteapi.onrender.com/products/women";


class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      loading: false
    }
  }
  render() {
    return (
      <>
        <WomenCarousel />
        <div>
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-chevron p-3 bg-body-tertiary rounded-3">
                  <li class="breadcrumb-item"><Link to='/' style={{textDecoration:'none', color:'black'}}><i class="bi bi-house-door"></i>Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">Womens</li>
              </ol>
          </nav>
        </div>
        {this.state.loading && <Spinner/>}
        <div className="filters-with-clothes-container">
          <Filter />
          <div className="garments-collection-container">
            <div className="card-group card-image-container">
              <div className="container my-3">
                {!this.state.loading && <Items productData={this.state.product} setProgress={this.props.setProgress}/>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.setProgress(0);
    this.setState({loading: true})
    fetch(productUrl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data, loading: false })
      })
    this.props.setProgress(100);
  }
}

export default Women;
