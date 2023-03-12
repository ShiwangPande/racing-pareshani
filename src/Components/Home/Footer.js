import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Footer() {
    return (
        <>
            <div className="Footer container mx-auto mt-5 mb-0">

                <footer className="py-3 ">
                    <div className="row  py-6 py-md-8 py-lg-0">
                        <div className="col-lg-4 px-lg-5 text-center">
                            <h5 className='py-3' style={{ color: "#EE3131" }}>Automobile Club</h5>
                            <img className='w-50 mx-auto mb-3' src="https://drive.google.com/uc?export=view&id=1i2U8yWheKk-yiXMNXYApZobG9a1cnjHl" alt="drive image" />
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXewhkhdITtGHKZJViWZ74zD4y7FGM9q5Um-aW-8y4mybfZA/viewform?usp=sf_link">
                                <button type="button" className="btn  btn-lg px-4">Join Excel-o-Racers</button>
                            </a>
                        </div>

                        <div className="col-lg-4 px-lg-5 border-lg-start border-lg-end py-md-7 text-center">
                            <h5 className=' py-3' style={{ color: "#EE3131" }}>Quick Links</h5>
                            <ul className="nav flex-column text-left">
                                <li className="nav-item mb-1"><Link to="/Mission" className="nav-link p-2 ">MISSION</Link></li>
                                <li className="nav-item mb-1"><Link to="/Activity" className="nav-link p-2 ">ACTIVITY</Link></li>
                                <li className="nav-item mb-1"><Link to="/Sponsarship" className="nav-link p-2 ">SPONSORSHIP</Link></li>
                            </ul>

                            <h6 className=' py-3' style={{ color: "#EE3131" }}>We are Social</h6>
                            <div className="text-center">
                                <a href='https://instagram.com/gcoen_racing?igshid=ZDdkNTZiNTM=' >
                                    <img src="https://img.icons8.com/windows/40/FFFFFF/instagram-new.png" className='mx-2 hover' />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-4 px-lg-5 text-center">
                            <div>
                                <div className="contact-form-wrapper">
                                    <form action="#" className="contact-form">
                                        <h5 style={{ color: "#EE3131" }} className="title py-3" >Contact us</h5>
                                        <div>
                                            <input type="text" className="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
                                        </div>
                                        <div>
                                            <input type="email" className="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
                                        </div>
                                        <div>
                                            <textarea id="message" className="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
                                        </div>
                                        <div className="submit-button-wrapper">
                                            <input className="btn" type="button" value="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-center pt-4 my-4 border-top text-center">
                        <p>© All rights reserved. <br>
                        </br>AUTOMOBILE CLUB @ GOVERNMENT COLLEGE OF ENGINEERING NAGPUR MECHANICAL DEPT</p>
                        <ul className="list-unstyled d-flex">
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer