import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../redux/counterSlice';
// import { incrementQuantity,decrementQuantity } from '../redux/counterSlice';
import Header from './Header';
import { Link } from 'react-router-dom';


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();


    return (
        <div>
            <Header />
            <div className='text-center text-2xl font-bold m-4'>Your Cart</div>
            <div className='max-w-[1000px] mx-auto my-0 right-0 left-0'>
                {cartItems.length === 0 ? (
                    <p className='text-lg'>Your cart is empty.</p>
                ) : (
                    <div className=' shadow-2xl border border-blue-200 mx-auto my-0 right-0 left-0' >

                        {cartItems.map((item, index) => (

                            <>
                                {console.log('cart item',item )}
                                <div className=' mx-auto my-0 right-0 left-0'>
                                    <div key={index} className='flex p-4'>
                                        <img className='w-52 h-80  shadow-lg ' src={item.images[0].src} alt={item.productName} />

                                        <div className='ml-4 min-w-[750px]'>
                                            <h2 className='text-lg font-semibold'>{item.productName}</h2>

                                            <div className='flex items-center mt-2 ml-0'>
                                                <strong className='text-2xl pr-2 text-[#282C3F]'>&#8377;{item.price}  <span className='text-sm'>/piece</span> </strong>
                                                <span className='text-xl text-[#282C3F]'> MRP</span>
                                                <del className='text-xl pl-1 text-[#282C3F]'>&#8377;{item.mrp}{item.productID} </del>
                                                <h1 className='ml-2 text-orange-700'>{item.discountDisplayLabel}</h1>
                                                <h3 className='text-xl pl-3 font-bold text-[#282C3F]'>selected size:{item.selectedsize}</h3>
                                            </div>
                                            <h5 className='text-sm my-2 text-[#282C3F]'>(min. order 10 piece)</h5>
                                            <h3 className='text-orange-700 font-bold mt-2'>inclusive of all taxes</h3>
                                            <div className='border m-2 ml-0  border-blue-200 max-w-72 rounded text-sm p-2'>
                                                <p className='text-green-500  font-semibold'>Delivery</p>
                                                <p className='text-[#282C3F]'>Estimated delivery between Mon,<span className='text-lg font-semibold'>Oct 8</span></p>
                                            </div>
                                            <div className=' mx-auto my-0 right-0 left-0 mt-7 flex justify-between p-2'>
                                                <div className='bg-slate-200 rounded-md p-2' >

                                                    <p className='font-bold text-[#DC4326]'>Total ammount: </p>
                                                    <p className='font-bold text-xl  text-[#282C3F]'>&#8377;{item.price * item.quantity}/-</p>
                                                </div>
                                                
                                                <div className='text-3xl flex justify-center  items-center bg-slate-200 rounded-3xl min-w-28'>
                                                    <button onClick={() => dispatch(decrementQuantity(item))}
                                                        className='rounded-full h-7 w-7 bg-[#DC4326] flex items-center justify-center hover:bg-orange-600 text-white'>-</button>
                                                    <span className='text-2xl px-2'>
                                                        {item.quantity}
                                                    </span>
                                                    <button onClick={() => dispatch(incrementQuantity(item))}
                                                        className='rounded-full h-7 w-7 bg-[#DC4326] flex items-center justify-center hover:bg-orange-600 text-white'>+</button>
                                                </div>
                                            </div>
                                            <button onClick={() => dispatch(removeItem(item))}
                                                className='mr-4 bg-[#DC4326] float-end max-h-10 rounded-md p-2 font-semibold  text-white'>Remove</button>
                                        </div>
                                    </div>
                                </div >
                            </>
                        ))}
                    </div>
                )}
                <Link to="/orderdeails">
                    <button className='bg-green-700 font-bold text-lg float-end mt-5 text-white p-4 rounded'>Place Order</button>
                </Link>
            </div>

        </div >
    );
};

export default Cart;
