import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import vdo from '../Assets/vdo_Qw17Z8lZ (online-video-cutter.com).mp4'



const supporter = [
    {
        Name: 'SWANAND JUGADE',
    },
    {
        Name: 'HAARDIK VERMA',
    },
    {
        Name: 'YASH GHATE',
    },
    {
        Name: 'AKSHITA BAGHEL',
    },
    {
        Name: ' AMEYA VYAS',
    },
    {
        Name: 'RUTVIK SHENDE',
    },
    {
        Name: 'PANKAJ BENDRE',
    },
    {
        Name: 'ATHARV MHASKE',
    },
    {
        Name: 'UNNATI CHAUHAN',
    },
    {
        Name: 'MANJIRI KAHARE',
    },
    {
        Name: 'SAMARTHA GHATTUWAR',
    },
    {
        Name: 'ANURAG MALDURE',
    },
    {
        Name: 'KAUSTUBH PATIL',
    },
    {
        Name: 'SWANAND DESHPANDE',
    },
    {
        Name: 'HARNOOR TULI',
    },
    {
        Name: 'NILESH SORTE',
    },
    {
        Name: ' VAIBHAV PATIL',
    },
    {
        Name: 'RUSHABH LAWANKAR',
    },
    {
        Name: ' ASHUTOSH ACHARYA',
    },
]

function Home() {
    return (
        <>

            <div className="hero">
                <video className='bg-video' autoPlay loop muted>
                    <source src={vdo} type="video/mp4" />
                </video>
            </div>




            <h2 className='text-center py-5 text-decoration-underline ' style={{ color: "red" }}>About Us</h2>


            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center m-3 my-5">
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden mx-auto">
                    <img className=" ratio ratio 4x3" src="https://drive.google.com/uc?export=view&id=16HHx5VzkT4mNTgehY_TVoPzemreRSSwb" alt="" />
                </div>
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-center">
                    <p> It all begin In the year 2019, a group of enthusiastic students came together with a shared passion for motorsports to establish a student racing club. This club was aimed at providing a platform for students to come together and share their love for racing while also providing them with opportunities to hone their skills and compete in various racing events.</p>
                    <p> The aim of the club is to nurture and expand knowledge of automobile sector, and to cultivate interest and provide a platform to showcase practical knowledge of students irrespective of their academic backgrounds. The Automobile club, focuses on enhancing awareness of individuals about quality automation in the industry and boost excellence in vehicle design with modified safety features. </p>
                    <br></br>
                    <p className='fw-bold'>
                        Automobiile Club @ gcoen provide an open opportunities for its students apart from their Branches and specilaization who share common interestin Automobile
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center my-4 mb-lg-3">
                        <Link to="/Mission">
                            <button type="button" className="btn  btn-lg px-4">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>




            {/* team */}
            <h2 className='text-center py-5 text-decoration-underline' style={{ color: "red" }}>Team Objectives</h2>

            <div className="container">
                <div className="row m-2">
                    <div className="col-12 ps-lg-7">
                        <div className="row align-items-end m-2">
                            <div className="col-lg-6 order-lg-2 text-center">
                                <img className='m-2 w-50 ' src="https://drive.google.com/uc?export=view&id=1CRsVXS3mqtyWdK_KBN555cD6FBOoI6gm" alt="Icon" />
                            </div>
                            <div className="col-lg-6 border-lg-start border-lg-bottom pb-lg-8 mt-4 mt-lg-0 mb-8 mb-lg-0">
                                <div className="process-item ms-6 ms-sm-8 ms-lg-6"><span className="process-item-number">01</span>
                                    <h3>Race</h3>
                                    <p>To create an interest in students about Automobile manufacturing and a chain link of participation in Go-Kart, Eco-Kart, SAE Supra, formula Bharat .</p>
                                    <a href="https://www.fmae.in/events/">
                                        <button type="button" className="btn px-4">Learn More</button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="row m-2">
                            <div className="col-lg-6 border-lg-end border-lg-bottom text-center py-lg-8">
                                <img className='m-2 w-50 ' src="https://drive.google.com/uc?export=view&id=1YqKkqmS91GX_3SCIIhh60nn0vnH2FBX8" alt="Icon" />
                            </div>
                            <div className="col-lg-6 mt-4 mb-8 my-lg-8">
                                <div className="process-item ms-6 ms-sm-8 ms-lg-6"><span className="process-item-number">02</span>
                                    <h3>Research</h3>
                                    <p>To be a part of Society of Automobile engineers (SAE). and get access to various research Papers and thesis related to advance development in the Mechanical and Automobile sector</p>
                                    <a href="https://www.sae.org/">
                                        <button type="button" className="btn px-4">Learn More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row m-2">
                            <div className="col-lg-6 order-lg-2 text-center align-self-center">
                                <img className='m-2 w-50 ' src="https://drive.google.com/uc?export=view&id=1cpz__VgE0rWcO_Wz31z8v7wFIyD_PEFV" alt="Icon" />
                            </div>
                            <div className="col-lg-6 border-lg-start border-lg-bottom py-lg-8 mt-4 mt-lg-0 mb-8 mb-lg-0">
                                <div className="process-item ms-6 ms-sm-8 ms-lg-6"><span className="process-item-number">03</span>
                                    <h3>develop</h3>
                                    <p>To make students familiar with latest government regulations and policies related to safety and luxury, as well as, roads and highways.</p>
                                    <a href="https://morth.nic.in/related-actrules">
                                        <button type="button" className="btn px-4">Learn More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row pb-1 m-2">
                            <div className="col-lg-6 border-lg-end text-center py-lg-8">
                                <img className='m-2 w-50 ' src="https://drive.google.com/uc?export=view&id=1R2iA55iOt2A3UkunMHrPkCWmcmhDdQpW" alt="Icon" />
                            </div>
                            <div className="col-lg-6 align-self-center mt-4 mt-lg-0 mt-lg-8">
                                <div className="process-item process-item-last ms-6 ms-sm-8 ms-lg-6"><span className="process-item-number">04</span>
                                    <h3>deploy</h3>
                                    <p>To develop partnership with Industries for product development and research in automobile sector and traine student for their future endeavour in the Industries</p>
                                    <a href="https://heavyindustries.gov.in/UserView/index?mid=1319">
                                        <button type="button" className="btn px-4">Learn More</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="row text-center m-5 gap-5 mb-5">
                <div className="row justify-content-center text-center mb-6">
                    <div className="col-lg-6">
                        <h2 className="fs-3 fs-sm-4 text-decoration-underline mb-3">Our process</h2>
                        <p className=""> Training, Manufacturing, and racing are three distinct aspects of a racing team, each requiring specific skills and expertise. The process for manufacturing, training, and racing a racing team can be broken down into the following steps:</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg  border  rounded-4 shadow-lg p-3">
                    <img className="rounded img-fluid p-5" src="https://img.icons8.com/external-sbts2018-mixed-sbts2018/58/null/external-training-lean-thinking-sbts2018-mixed-sbts2018.png" alt="" />
                    <div className="overflow-hidden" data-zanim-timeline="{}">
                        <h5 style={{ color: "red" }}>Training</h5>
                        <p className='text-muted'>We begin our journey each year by designing our vehicle from scratch. Every component is carefully designed, taking all the parameters into consideration. The design is then subject to analysis through which all the little aberrations are removed.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg mt-6 mt-md-0 border rounded-4 shadow-lg p-3">
                    <img className="rounded img-fluid p-5" src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/null/external-welding-mask-industrial-production-factory-automation-smashingstocks-glyph-smashing-stocks.png" alt="" />
                    <div className="overflow-hidden" data-zanim-timeline="{}">
                        <h5 style={{ color: "red" }}>Manufacturing</h5>
                        <p className='text-muted'>In this phase, we take the vehicle from our computer screens and bring them into reality. Once every component is machined and ready, everything is assembled and just like that, we go from pieces of metal to one of the most important inventions of our century.</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg mt-6 mt-lg-0 border rounded-4 shadow-lg p-3">
                    <img className="rounded img-fluid p-5" src="https://img.icons8.com/external-others-pike-picture/60/null/external-racing-karting-motorsport-others-pike-picture-2.png" alt="" />
                    <div className="overflow-hidden" data-zanim-timeline="{}">
                        <h5 style={{ color: "red" }}>Racing</h5>
                        <p className='text-muted'>Once our sweet ride is ready, we take it out to compete in competitions throughout the world. The thrill and joy of competing with a car made by our own hands is unparalleled.</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <section className="text-center " >
                    <div className="container">
                        <h3 className='text-center py-5 text-decoration-underline' style={{ color: "red" }}>Speacial Thanks for supporting us</h3>

                        <div className="row align-items-center row justify-content-center text-center">
                            {supporter.map((supporter) => (
                                <div className="col-6 col-sm-6 col-md-4 col-lg-3 shadow-lg rounded p-2 m-1">{supporter.Name}</div>
                            ))}

                        </div>
                    </div>
                </section>

            </div>


        </>
    )
}

export default Home