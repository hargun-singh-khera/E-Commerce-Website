import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import About from './About';
import Video from '../video.mp4'
import './Home.css';
import Spinner from './Spinner';


export default function Home(props) {
  const updateProgress=()=> {
    props.setProgress(0)
    props.setProgress(20)
    props.setProgress(40)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    props.setProgress(100)
  }
  return (
      <>
            <Carousel/>

            <p className="sbe-text">Sustainable. Beautiful. Ethical.</p>

            {/* Used div for aligning the shop now button in the center */}
            <div className="text-center">
                <a href="#Women-Men"><button type="button" className="btn btn-primary sbe-shop-now" onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Shop Now</button></a>
            </div>

            {/* Section for men and women starts here */}
            <section id="Women-Men">
                {/* Added Cards for women , men and kids categories*/}
                <div className='container'>
                    <div className='row'>
                        <h2 className='text-center mb-4'>Shop for Different Categories</h2>
                        <div className='col-md-4'>
                            <div class="card shadow-lg mb-5 bg-body-tertiary rounded">
                                <Link to="/women" onClick={updateProgress}><img src="https://i.ibb.co/YhG4MDm/Untitled-design.png" className="card-img-top" alt="..."
                                width="100" /></Link>
                                <div class="card-body">
                                    <h5 className="card-title"><Link to="/women" onClick={updateProgress}>Shop Women &gt;</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card shadow-lg mb-5 bg-body-tertiary rounded">
                                <Link to="/men" onClick={updateProgress}><img src="https://i.ibb.co/vcxF9Vd/Untitled-design-1.png" className="card-img-top" alt="..."
                                width="100" /></Link>
                                <div class="card-body">
                                    <h5 className="card-title"><Link to="/men" onClick={updateProgress}>Shop Men &gt;</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div class="card shadow-lg mb-5 bg-body-tertiary rounded">
                                <Link to="/kids" onClick={updateProgress}><img src="https://i.ibb.co/nbRZq5X/Untitled-design-2.png" className="card-img-top" alt="..."
                                width="100" /></Link>
                                <div class="card-body">
                                    <h5 className="card-title"><Link to="/kids" onClick={updateProgress}>Shop Kids &gt;</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className='container'>
                <div className='row text-center'>
                    <h4>Popular Products</h4>

                </div>
            </div>

            <div className='container'>
                <div className='row text-center'>
                    <h4>Featured Products</h4>
                    
                </div>
            </div> */}
            {/* Called About Component  */}

            {/* <div>
                <video autoPlay loop muted id="myVideo">
                    <p style={{paddingBottom:'-10rem'}}>Hello</p> 
                    <source src={Video} type="video/mp4"/>
                </video>
            </div> */}

            
            {/* <About/> */}
            
        </>
    )
}