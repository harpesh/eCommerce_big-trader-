import React from 'react'
import Hero from './Hero';
import Categories from './Categories';
import Footwaer from './Footwaer';
import Productlist from './Productlist';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className='h-screen'>
       <Header/>
        <main>
          <div>
            <Hero />
          </div>
        </main>
        <div className=' max-w-[1000px]  my-4 mx-auto right-0 left-0 '>
          <div className='max-w-[1000px]  my-4 mx-auto right-0 left-0'>
            <p className='text-2xl font-bold pl-9 mb-7'>Categories</p>
            <div>
              <Categories />
            </div>
            <div>
              <p className='text-2xl font-bold pl-9 mb-7  mt-9'>Popular Brands in footwear</p>
              <div className='max-w-[950px] my-4 mx-auto right-0 left-0' >
                <Footwaer />
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className='max-w-[1170px] my-4 mx-auto right-0 left-0'>
          <p className='text-2xl font-bold mb-7 mt-16'>Best Deals Of The Day</p>
          <div className='flex flex-col' >
            <Productlist />
          </div>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

export default Home