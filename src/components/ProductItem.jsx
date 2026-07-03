import React from 'react'

const ProductItem = () => {
  return (
    <div className='w-full h-[50vh]  grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 font-serif font-bold text-olive-500'>
      <div className="w-full bg-olive-300"><h1 className="m-5">RING<i className="fa-solid fa-arrow-right text-olive-600 ml-4  text-sm"></i></h1> </div>
      
      <div className="w-full bg-olive-300"><h1 className="m-5">NECKLACE <i className="fa-solid fa-arrow-right text-olive-600  ml-4 text-sm"></i></h1> </div>
      <div className="w-full  bg-olive-300"><h1 className="m-5">EARRING<i className="fa-solid fa-arrow-right text-olive-600 ml-4 text-sm"></i></h1></div>
      <div className="w-full bg-olive-300"><h1 className="m-5">BRACELET<i className="fa-solid fa-arrow-right text-olive-600 ml-4  text-sm"></i></h1></div>
    </div>
  )
}

export default ProductItem
