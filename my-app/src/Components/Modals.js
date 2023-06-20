import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Modals() {
    const notifyLogin=()=> {
        toast.success("Login Successfull", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    const notifySignUp=()=> {
        toast.success("SignUp successfull", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    const notifyMssg=()=> {
        toast.success("Message send successfully", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    const dismissAll=()=> {
        toast.dismiss()
    }
    return (
        <>
            {/* Adding Modals */}
            {/* Login with Sign UpModal  */}
            <div className="modal fade" id="loginModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" style={{backgroundColor:'#ffffffe0'}}>
                        <div className="modal-header">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="100"/>
                                <h5 className="modal-title" id="loginModalLabel">Login to MyHosieryShop</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <div className='row mb-3 m-auto'>
                                <div className='col mt-5' >
                                    <img src="https://i.ibb.co/mNhRW1v/login-demo.png" alt="" width="340" />
                                </div>
                                <div className='col' style={{ marginBottom:'25px'}}>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required/>
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" required/>
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                        </div>
                                        <div className='container'>
                                            <div className='row'>
                                                <button type='submit' className="btn btn-primary" style={{borderRadius:'20px', width:'350px', height:'40px',backgroundColor:'rgb(255 0 0 / 88%)',border:'none'}} onClick={notifyLogin}>Login</button>
                                                <hr className='mt-3'/>
                                                <button type='submit' className="btn btn-primary mt-1" style={{borderRadius:'20px', width:'350px', height:'40px', backgroundColor:'white', borderColor:'white', color:'grey', paddingRight:'40px'}} onClick={notifyLogin}><i class="fab fa-google" style={{paddingRight:'20px',paddingLeft:'10px'}}></i>Login with Google</button>
                                                <button type='submit' className="btn btn-primary mt-3" style={{borderRadius:'20px', width:'350px', height:'40px',backgroundColor:'#0d3afd'}} onClick={notifyLogin}><i class="fab fa-facebook" style={{paddingRight:'20px'}}></i>Login with Facebook</button>
                                            </div>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <ToastContainer />
                        </div>
                        <div className="modal-footer">
                            <p>Don't have an account? Create one to get started. </p>
                            <button className="btn btn-primary" data-bs-target="#signupModalToggle2" data-bs-toggle="modal"
                                data-bs-dismiss="modal" style={{borderRadius:'20px', backgroundColor:'rgb(255 0 0 / 88%)',border:'none'}} onClick={dismissAll}>Create a new account</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{borderRadius:'20px'}}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="signupModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1">
                <div className="modal-dialog modal-xl ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="https://i.ibb.co/Rpmngys/logo3-removebg-preview.png" alt="" width="140"/>
                                <h5 className="modal-title" id="signUpModalLabel">Create an Account for MyHosieryShop</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='row'>
                                <div className='col text-center'>
                                    <img src="https://i.ibb.co/6bbLmm7/Mobile-login-pana.png" alt="" width="380"/>
                                </div>
                                <div className='col'>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required/>
                                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" required/>
                                            <div id="passwordHelpBlock" className="form-text">
                                                Your password must be 6-10 characters long, containing letters and numbers, and must not contain spaces,
                                                special characters.
                                            </div>
                                        </div>
                                            <div className="mb-3">
                                                <label htmlFor="cexampleInputPassword1" className="form-label">Confirm Password</label>
                                                <input type="password" className="form-control" id="cexampleInputPassword1" required/>
                                            </div>
                                            <div className='container'>
                                                <div className='row'>
                                                    <button type="submit" className="btn btn-primary mt-3 " style={{borderRadius:'25px', height:'40px', width:'550px',backgroundColor:'rgb(255 0 0 / 88%)',border:'none'}} onClick={notifySignUp}>Sign Up</button>
                                                </div>
                                            </div>  
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p>Already have an account?</p>
                            <button className="btn btn-primary" data-bs-target="#loginModalToggle" data-bs-toggle="modal"
                                data-bs-dismiss="modal" style={{borderRadius:'25px',backgroundColor:'rgb(255 0 0 / 88%)',border:'none'}} onClick={dismissAll}>Sign In</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{borderRadius:'25px'}}>Close</button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
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
                        <div className="modal-body modal-xl">
                            <div className='row'>
                                <div className='col text-center'>
                                    <img src="https://i.ibb.co/BjGgDVP/Get-in-touch-cuate.png" alt="" width="380"/>
                                </div>
                                <div className='col'>
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
                                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Elaborate Your Concern</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{borderRadius:'25px'}}>Close</button>
                                            <button type="button" className="btn btn-primary" style={{borderRadius:'25px',backgroundColor:'red',border:'none'}} onClick={notifyMssg}>Send message</button>
                                            <ToastContainer />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
