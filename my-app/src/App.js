import React, { useState } from "react";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Modals from './Components/Modals';
import Men from './Components/Men';
import Women from './Components/Women';
import Kids from './Components/Kids';
import MenProduct from './Components/MenProduct';
import WomenProduct from './Components/WomenProduct';
import Cart from './Components/Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wishlist from "./Components/Wishlist";
import LoadingBar from 'react-top-loading-bar'
import About from "./Components/About";

function App() {
  const [progress,setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          height={2.5}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Header setProgress={setProgress}/>
        <Modals />
        <Switch>
          {/* <button onClick={()=>setProgress(progress+100)}>Click me</button> */}
          <Route exact path="/" >
            <Home setProgress={setProgress}/>
          </Route>
          <Route exact path="/men" >
            <Men setProgress={setProgress}/>
          </Route>
          <Route exact path="/men/:id" component={MenProduct} />
          <Route exact path="/women" >
            <Women setProgress={setProgress}/>
          </Route>
          <Route exact path="/kids" >
            <Kids setProgress={setProgress}/>
          </Route>
          <Route exact path="/women/:id" component={WomenProduct} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <About />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
