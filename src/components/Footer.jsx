import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#00394D] text-white p-6 flex justify-evenly" >
                <div className='max-w-80'>
                    <div className="flex flex-col  mb-6">
                        <img className=' cursor-pointer my-9' src="/images/01.svg" alt="" />
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur. Nunc elit nulla netus tincidunt quisque suspendisse.
                            Nisi a justo cras elementum pellentesque. Lorem ipsum dolor sit amet consectetur. Nunc
                        </p>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className='mx-0 my-auto top-0 bottom-0'>
                    <h4 className="text-lg font-semibold mb-2">Company</h4>
                    <ul >
                        <li className='mt-3'><a href="/" className="hover:underline">Home</a></li>
                        <li className='mt-3'><a href="/cart" className="hover:underline">My Cart</a></li>
                        <li className='mt-3'><a href="/order" className="hover:underline">My Order</a></li>
                        <li className='mt-3'><a href="/categories" className="hover:underline">All Categories</a></li>

                    </ul>
                </div>
                <div className=' mx-0 my-auto top-0 bottom-0'>
                    <h4 className="  text-lg font-semibold mb-2">About Big Trader</h4>
                    <ul>
                        <li className='mt-3'><a href="/about-us" className="hover:underline">About Us</a></li>
                        <li className='mt-3'><a href="/faqs" className="hover:underline">FAQs</a></li>
                        <li className='mt-3' ><a href="/contact" className="hover:underline">Contact Us</a></li>
                        <li className='mt-3'><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                        <li className='mt-3'><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>
            </footer>
            <div className='bg-[#003244] my-0 mx-auto right-0 left-0'>
                <div className='bg-[#003244] my-0 mx-auto right-0 left-0 flex justify-between max-w-[1200px] '>
                    <p className="text-sm text-white text-center ">�� 2024 Big Trader. All rights reserved.</p>
                    <p className="text-sm text-white text-center">BIGTRADER WHOLESALE TRADING WILL</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
