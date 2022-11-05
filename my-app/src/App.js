import React from "react";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Modals from './Components/Modals';
import Men from './Components/Men';
import Women from './Components/Women';
import MenProduct from './Components/MenProduct';
import WomenProduct from './Components/WomenProduct';
import Cart from './Components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wishlist from "./Components/Wishlist";

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
          <Route exact path="/wishlist" component={Wishlist}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
