import React, { useState, useEffect } from 'react'
import Header from './Components/Home/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Home/Footer'
import Event from './Components/Events/Event'
import Team from './Components/Team/Team'
import Gallery from './Components/Gallery/Gallery'
import Activity from './Components/Activity/Activity'
import { Route, Routes } from "react-router-dom";
import Mission from './Components/Otherpages/Mission'
import Sponsarship from './Components/Otherpages/Sponsarship'
import Loader from '../src/Components/Assets/Loader.gif'

export default App
function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>

      <Header></Header>
      <div>

        {loading ? (
          <div className="loader-container">
            <img className='load-img img-fluid' src={Loader} alt="loading..." />
          </div>
        )


          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Event" element={<Event />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/Activity" element={<Activity />} />
              <Route path="/Mission" element={<Mission />} />
              <Route path="/Sponsarship" element={<Sponsarship />} />
            </Routes>
          )
        }
      </div>
      <Footer></Footer>
    </>
  )
}





