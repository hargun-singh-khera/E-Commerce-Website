// import logo from './logo.svg';
// import * as Icon from 'react-bootstrap-icons';
import React from "react";
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Home from './Components/Home';
// import About from './Components/About';
import Footer from './Components/Footer';
import Modals from './Components/Modals';
import Men from './Components/Men';
import Women from './Components/Women';
import MenProduct from './Components/MenProduct';
import WomenProduct from './Components/WomenProduct';
// import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        {/* <Header userInput={(data) => { this.filterProduct(data);}} /> */}
        <Header/>
        <Modals />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path={`/men/product`} element={<MenProduct />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/women/product" element={<WomenProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
