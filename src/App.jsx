import React from 'react'
import Hero from './components/Hero'
import InfiniteScroll from './components/InfiniteScroll'
import OurProduct from './components/OurProduct'
import ProductItem from './components/ProductItem'

import About from './components/About'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <InfiniteScroll />
      <OurProduct />
      <ProductItem />
      
      <About />
      <ProductShowcase />
      <Footer />
    </div>
  )
}

export default App
