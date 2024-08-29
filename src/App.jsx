import './App.css'
import Cards from './Components/Cards'
import Carousels from './Components/Carousel'
import Curations from './Components/Curations'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Navbars from './Components/Navbar'
import SecondCarosel from './Components/SecondCarosel'

function App() {

  return (
    <>
      <Navbars/>
      <Nav/>
      <Carousels/>
      <Curations/>
      <Cards/>
      <SecondCarosel/>
      <Footer/>
    </>
  )
}

export default App
