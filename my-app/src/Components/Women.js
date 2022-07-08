import React, { Component } from 'react';
import './Men.css';
// import JSON from './API/products.json';
import Items from './Items';
import WomenCarousel from './WomenCarousel';
import Filter from './Filter';


const productUrl = "https://restapipractice2.herokuapp.com/women";


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
        <div class="filters-with-clothes-container">
          <Filter />
          <div class="garments-collection-container">
            <div class="card-group card-image-container">
              <div className="container my-3">
                <Items productData={this.state.product} />
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
