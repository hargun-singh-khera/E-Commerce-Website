import React from 'react'

export default function Modals() {
    return (
        <>
            {/* Adding Modals */}
            {/* Login with Sign UpModal  */}
            <div className="modal fade" id="loginModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="100"/>
                                <h5 className="modal-title" id="loginModalLabel">Login to MyHosieryShop.com</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                </div>
                                <button type="Login" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p>Don't have an account? Create one to get started. </p>
                            <button className="btn btn-primary" data-bs-target="#signupModalToggle2" data-bs-toggle="modal"
                                data-bs-dismiss="modal">Create a new account</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="signupModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="140"/>
                                <h5 className="modal-title" id="signUpModalLabel">Create an Account for MyHosieryShop.com</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                        placeholder="First and Last Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
                                    <div id="passwordHelpBlock" className="form-text">
                                        Your password must be 6-10 characters long, containing letters and numbers, and must not contain spaces,
                                        special characters.
                                    </div>
                                </div>
                                    <div className="mb-3">
                                        <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control" id="cexampleInputPassword1"/>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <p>Already have an account?</p>
                            <button className="btn btn-primary" data-bs-target="#loginModalToggle" data-bs-toggle="modal"
                                data-bs-dismiss="modal">Sign In</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* Modal */}
            {/* Contact Us Modal */}
            <div className="modal fade" id="contactModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content modal-xl modal-dialoge-centered">
                        <div className="modal-header">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="120"/>
                                <h3 className="modal-title" id="exampleModalLabel">We'd love to hear from you!</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                                    <input type="text" className="form-control" id="exampleInputEmai3" aria-describedby="emailHelp"
                                        placeholder="First and Last Name"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <label htmlFor="exampleFormControlInput1" className="form-label">Please select your Query</label>
                                <select defaultValue="" className="form-select" aria-label="Default select example">
                                    <option defaultValue>Open this select menu</option>
                                    <option defaultValue="1">Product quality was not good.</option>
                                    <option defaultValue="2">Wrong product sended.</option>
                                    <option defaultValue="3">Delivery not done on time.</option>
                                </select>
                                <div className="mb-3">

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Elaborate Your Concern</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
