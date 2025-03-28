
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <FAQ/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
