import React from 'react'
import Itemcards from './Itemcards';
import { mensdata } from '../APIDATA/Apidara';
import Header from './Header';


const Men = () => {

  return (
    <>
    <Header/>
    <hr />
      <div className='flex-wrap  flex justify-center mt-10'>
        {mensdata.map((product, index) => (
          <div className='m-2 '>
            <Itemcards key={index} product={product} />
          </div>
        ))}
      </div></>
  )
}

export default Men