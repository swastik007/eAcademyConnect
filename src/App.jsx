import { useState } from 'react'
import './App.css'
import BaseNavbar from "./components/HeaderSection.jsx";
import HeroSection from './components/HeroSection.jsx';
import HeroHighlightSection from './components/HeroHiglight.jsx';
import Footer from './components/FooterSection.jsx';
import PricingSection from './components/PricingSection.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaseNavbar />
      <HeroSection />
      <HeroHighlightSection />
      <PricingSection />
      <Footer />
    </>
  )
}

export default App
