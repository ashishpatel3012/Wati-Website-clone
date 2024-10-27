
import './App.css'
import './components/jquery.js'
import BennerCards from './components/BennerCards'
import Card_brands from './components/cards'
import CardsAndLogos from './components/CardsAndLogos'
import CompanyLogos from './components/CompanyLogos'
import Footer from './components/footer'
import Header from './components/header'

import backgroundImage from "/images/wati-dashboard-new.webp"

function App() {
 

  return (
    <>
    
    <Header/>
    <CompanyLogos/>
    <Card_brands/>
    <BennerCards/>
    <CardsAndLogos/>
    
    <Footer/>
    </>
  )
}

export default App
