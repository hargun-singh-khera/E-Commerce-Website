// import logo from './logo.svg';
// import * as Icon from 'react-bootstrap-icons';
import './App.css';
import Header from './MyComponents/Header';
import Carousel from './MyComponents/Carousel';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Footer from './MyComponents/Footer';
import Modals from './MyComponents/Modals';
// import Men from './MyComponents/Men';
// import WomenCarousel from './MyComponents/WomenCarousel';
// import MenCarousel from './MyComponents/MenCarousel';
// import Women from './MyComponents/Women';
// import Product from './MyComponents/Product'
// import Cart from './MyComponents/Cart';

function App() {
  return (
    <>
      <Header/>
      <Modals/>
      <Carousel/>
      <Home/>
      <About/>
      <Footer/>
      {/* <Men/> */}
      {/* <MenCarousel/>
      <WomenCarousel/> */}
      {/* <Cart/> */}
      {/* <Product/> */}
    </>
  );
}

export default App;
