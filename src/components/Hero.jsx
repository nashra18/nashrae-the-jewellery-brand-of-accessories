import React from 'react'
import HeroText from './HeroText'


const Hero = () => {
  return (
    <div className="">


    <div className="bg-[url('/images/phone.hero.jpg')] lg:bg-[url('/images/desktop.hero.jpg')]   bg-cover bg-center  h-[120vh] w-full">
      <HeroText />
      
    </div>
    </div>
  )
}

export default Hero
