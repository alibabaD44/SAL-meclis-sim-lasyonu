import Navbar from "./navbar/Navbar"
import Home from "./home/home"
import Hakkımızda from "./hakkımızda/hakkimizda"
import Misyonandviyzonsection from "./misyonvevizyon/misyonvevizyon"
import Map from "./map/map"
import Programakisi from "./program/programAkisi"
import Footer from "./footer/footer"
import Faq from "./faq/faq"

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <Hakkımızda/>
      <Misyonandviyzonsection/>
      <Map/>
      <Programakisi/>
      <Faq/>
      <Footer/>
    </>
  )
}

export default App
