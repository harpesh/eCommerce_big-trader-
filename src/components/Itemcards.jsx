import React from 'react'

const Itemcards = ({ product }) => {
  return (
    <div>
          <article className=' w-[300px] shadow-lg rounded '>
            <div className=' w-full rounded  '>
              <img className=' rounded-md  '
                src={product.image[0].src}/>
            </div>
            <div>
              <p className='mt-2 ml-1'> {product.image[0].dataAltText}
              </p>
              <p className='mt-3 pb-5 ml-1 font-bold text-sm '>
                {product.price}
              </p>
            </div>
          </article>
    </div>
  )
}

export default Itemcards