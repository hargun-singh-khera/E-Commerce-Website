import React from 'react'
import './Men.css';


export default function Men() {
    return (
        <>
            {/* Added Cards  */}
            <div className="filters-with-clothes-container">
                <div className="container-fluid filters-container">
                    <h3>APPLY FILTERS</h3>
                    <hr />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Men
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Women
                        </label>
                    </div>
                    <hr />
                    <h3>CATEGORIES</h3>
                    <h5>Top-Wear</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            T-Shirts
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Casual Shirts
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Formal Shirts
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Dresses
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Jackets
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Blazzers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Coats
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Sweatshirts
                        </label>
                    </div>
                    <h5>Bottom-Wear</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Jeans
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Casual Trousers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Formal Trousers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Shorts
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Track Pants
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Joggers
                        </label>
                    </div>
                    <hr />
                    <h3>PRICE RANGE</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            &#8377; 500-1000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            &#8377; 1000-2000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            &#8377; 2000-3000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            &#8377; 3000-4000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            &#8377; 4000-5000
                        </label>
                    </div>
                </div>
                <div className="garments-collection-container">
                    <div className="card-group card-image-container">
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                    </div>
                    <div className="card-group card-image-container">
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                    </div>
                    <div className="card-group card-image-container">
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                        <div className="card clothes-image-container">
                            <img src="https://i.ibb.co/KWfR5SJ/e38bcd96-1336-48cd-87c0-cbe04bbc7e041632164085479-ONLYWomen-Orange-Printed-Hooded-Sweatshirt1.png"
                                className="card-img-top" alt="..." />
                            <h6>ONLY
                                <p>Women Printed Sweatshirts</p>
                            </h6>
                            <h3>&#8377; 1149</h3>
                            <h5>
                                <span>In Stock</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
