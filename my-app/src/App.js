// import logo from './logo.svg';
// import * as Icon from 'react-bootstrap-icons';
import React from "react";
import './App.css';
import Header from './Components/Header';
// import Carousel from './Components/Carousel';
import Home from './Components/Home';
// import About from './Components/About';
import Footer from './Components/Footer';
import Modals from './Components/Modals';
import Men from './Components/Men';
import Women from './Components/Women';
import MenProduct from './Components/MenProduct';
import ProductItem from './Components/ProductItem';
import Product2 from './Components/Product2';

import Bookings from './Components/Bookings';
import WomenProduct from './Components/WomenProduct';
import Cart from './Components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Doctor from "./Components/Doctor";
// import { Link } from 'react-router-dom';

// filterProduct = (userText) => { 
//     const output = this.state.product.filter((data)=> { 
//       return data.product_name.toLowerCase().indexOf(userText.toLowerCase())>-1;
//     });
//     this.setState({filtered: output});
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Modals />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/men" component={Men}/>
          <Route exact path="/men/:id" component={MenProduct}/>
          <Route exact path="/women" component={Women}/>
          <Route exact path="/women/:id" component={WomenProduct}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
        <Footer />
      </BrowserRouter>
        {/* <Header userInput={(data) => { this.filterProduct(data);}} /> */}
    </>
  );
}

export default App;
