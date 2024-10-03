import React from 'react'
import CustomizedInputBase from '../mui/Homesearch'
import CountrySelector from '../mui/country';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasicMenu from '../mui/All_items';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const cartItem = useSelector((store) => store.cart.items)
    const navigate = useNavigate()
    return (
        <div>
            <div className='bg-[#082D41] h-7'>
                <ul className='flex justify-evenly  text-white'>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <header className='bg-[#00394D] h-20 flex items-center '>
                <div className='flex items-center w-full'>
                    <img className='ml-52 cursor-pointer' src="/images/01.svg" alt="" onClick={() => {
                        navigate('/home')

                    }} />
                    <div className='ml-32'>
                        <CustomizedInputBase />
                    </div>
                    <div className=' flex justify-around w-full p-5'>
                        <CountrySelector />
                        <ul className='flex w-full items-center justify-around text-white '>
                            <Link to='/cart'> 
                                <li className='font-bold'>
                                    <ShoppingCartIcon sx={{ fontSize: 40 }} />
                                    Cart({cartItem.length})</li>
                            </Link>
                            <li onClick={() => { navigate('/') }} className='font-bold cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                </div>
            </header>
            <nav className='flex  items-center w-full h-14 shadow-lg'>
                <div className='ml-72'>
                    <BasicMenu />
                </div>
                <ul className='flex justify-around w-1/3 ml-5 '>
                    <li>Services</li>
                    <li>Commodity Trade</li>
                    <li>Request For Quotes</li>
                </ul>
                <div className='ml-60'>

                    <button type='button ' className='bg-[#DC4326] p-3 rounded-lg text-white '>  Become Seller</button>
                </div>
            </nav>
        </div>
    )
}

export default Header