import { useState } from 'react'
import './App.css'
import BaseNavbar from "./components/HeaderSection.jsx";
import HeroSection from './components/HeroSection.jsx';
import HeroHighlightSection from './components/HeroHiglight.jsx';
import Footer from './components/FooterSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import VideoSection from './components/VideoSection.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BaseNavbar />
      <HeroSection />
      <HeroHighlightSection />
      <AboutSection />
      <VideoSection />
      <PricingSection />
      <Footer />
    </>
  )
}

export default App
