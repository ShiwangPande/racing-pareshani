import React from 'react'


const act = [
  
    {
        id: 1,
        text: 'Participated in virtual round if IKC S5 and cleared it with good position in the month of October.',
    },


    {
        id: 2,
        text: 'Conduct a workshop under DRISHTI 22 regarding IC engine and organising induction for new members in November.',
    },


    {
        id: 3,
        text: 'Participate in technical inspection round of IKC S5 which will be conducted in December.',
    },


    {
        id: 4
        text: 'Registered for Indian Karting Championship S5 in the month of September-2023',
    },


    {
        id: 5
        text: 'Participate in final round of IKC S5 which will be held in Kolhapur at Mohite’s racing academy in the month of January.',
    },


    {
        id: 6,
        text: 'Register the club under SAE to get access to various other competitions like SAE BAJA, SAE SUPRA.',
    },


    {
        id: 7
        text: 'Begin the manufacturing of BAJA in the month of March.',
    },

]

function Aim() {
    return (
        <>

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner ">
                    <div className="carousel-item active c-item">
                        <img src="https://drive.google.com/uc?export=view&id=15CsU6QjKzMfNc-bsf3d_PD26zZzZPPai" className=" d-block mb-5 c-img" alt="..." />
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://drive.google.com/uc?export=view&id=1e8dc9iHsstUhNPhbZIIviEhkq6o4Buen" className=" d-block mb-5 c-img" alt="..." />
                    </div>
                    <div className="carousel-item c-item">
                        <img src="https://drive.google.com/uc?export=view&id=1Z7PsCrFMEag-DJDvdyn9XInG3ftxmqH3" className=" d-block mb-5 c-img" alt="..." />
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



            <div className="container px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom text-center text-decoration-underline" style={{ color: "red" }}>Club Activities</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                    {act.map((act) => (

                        <div className="col d-flex align-items-start">
                            <img src='https://img.icons8.com/ios-filled/25/null/wheel.png' className='p-3' />
                            <div>
                                <p>{act.text}</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Aim
