import React, { Component } from 'react';
import './Men.css';
// import JSON from './API/products.json';
import Items from './Items';
import WomenCarousel from './WomenCarousel';
import Filter from './Filter';


const productUrl = "https://fashionwebsiteapi.onrender.com/products/women";


class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    }
  }
  render() {
    return (
      <>
        <WomenCarousel />
        <div className="filters-with-clothes-container">
          <Filter />
          <div className="garments-collection-container">
            <div className="card-group card-image-container">
              <div className="container my-3">
                <Items productData={this.state.product}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    fetch(productUrl, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ product: data })
      })
  }
}

export default Women;
