

import './App.css'
import HeroPart from './Components/HeroSection/HeroPart'
import GetStart from './Components/Main/GetStart'
import Pricing from './Components/Main/Pricing'
import Reviw from './Components/Main/Reviw'
import Transform from './Components/Main/Transform'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <HeroPart />
      <Reviw />
      <GetStart />
      <Pricing />
      <Transform />

    </>
  )
}

export default App
