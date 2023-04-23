import React from 'react'
import './Events.css'


function Event() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active c-item">
                        <img src="https://drive.google.com/uc?export=view&id=1ZmbtAMbLqR1OD0eNYSaB_-iCEf2T3L_n" className=" d-block mb-5  c-img" alt="..." />
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://drive.google.com/uc?export=view&id=1jqNPOARyDCa8Z2Dr75DlnUtdI30_yCkN" className=" d-block mb-5  c-img" alt="..." />
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://drive.google.com/uc?export=view&id=1RSeADQogMiuPvGVp2OiPSToor6nl7EKb" className=" d-block mb-5  c-img" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <div className="container-fluid">
                <h2 className='text-center py-5 text-decoration-underline' style={{ color: "red" }}>Events</h2>

                <div className="row row-para">
                    <div className="col-lg-6 px-0 order-lg-2">
                        <div className="sticky-top vh-lg-100 py-9">
                            <div className="bg-holder-event1">
                                <video className='bg-video' autoPlay loop muted>
                                    <source src={"https://drive.google.com/uc?export=view&id=1Pqn5s7x7sldhhVbzZmKAb-ohD0ZBRP5o"} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 py-6">
                        <div className="row h-100 d-flex justify-content-center">
                            <div className="col-sm-11 col-md-8 col-lg-11 col-xl-9 px-xl-5">
                                <div className="mb-5 mb-lg-7 overflow-hidden">
                                    <h3 className=" text-center pt-5">01 <hr></hr>AIRC</h3>
                                </div>
                                <ul className='list'>
                                    <li>Event No 01</li>
                                    <li>Event Name : Auto India Racing  Championship</li>
                                    <li>Event Dated : 7-12 February 2020 </li>
                                    <li>Event Loation : Pune</li>
                                   
                                </ul>

                                <div className="card-footer text-center p-3">
                                    <input className="btn" type="button" value="Know More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-6 px-0 ">
                        <div className="sticky-top vh-lg-100 py-9">
                            <div className="bg-holder-event2">
                                <video className='bg-video' autoPlay loop muted>
                                    <source src={"https://drive.google.com/uc?export=view&id=1SB7UkDhtBWqFJszb4DzKTrb72h6wXp0Y"} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 py-6">
                        <div className="row h-100 d-flex justify-content-center">
                            <div className="col-sm-11 col-md-8 col-lg-11 col-xl-9 px-xl-5">
                                <div className="mb-5 mb-lg-7 overflow-hidden">
                                    <h3 className=" text-center pt-5">02<hr></hr>Formula Bharat</h3>
                                    
                                </div>
                                <ul className='wheel fs-5'>
                                    <li>Event No 02</li>
                                    <li>Event Name : Formula Bharat</li>
                                    <li>Event Dated : 12-16 September 2021 </li>
                                    <li>Event Loation : Kolhapur</li>
                                    
                                </ul>

                                <div className=" text-center p-2">
                                    <input className="btn" type="button" value="Know More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 px-0 order-lg-2">
                        <div className="sticky-top vh-lg-100 py-9">
                            <div className="bg-holder-event3">
                                <video className='bg-video' autoPlay loop muted>
                                    <source src={"https://drive.google.com/uc?export=view&id=1F7Wf5rdN3lDRibZePtG_TMFOQFzJZPAq"} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 py-6">
                        <div className="row h-100 d-flex justify-content-center">
                            <div className="col-sm-11 col-md-8 col-lg-11 col-xl-9 px-xl-5">
                                <div className="mb-5 mb-lg-7 overflow-hidden">
                                    <h3 className=" text-center pt-5">03 <hr></hr>IKC</h3>
                                    <h5 className=" text-center text-muted">Season-5</h5>
                                </div>
                                 <ul className='wheel fs-5'>
                                    <li>Event No 03</li>
                                    <li>Event Name : Indian Karting  Championship</li>
                                    <li>Event Dated : 13-18 February 2023 </li>
                                    <li>Event Loation : Kolhapur</li>
                                    
                                </ul>
                                <div className="card-footer text-center p-3">
                                    <input className="btn" type="button" value="Know More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
