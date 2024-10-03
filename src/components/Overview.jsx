import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/counterSlice';
import { incrementQuantity, decrementQuantity } from '../redux/counterSlice';


const Overview = () => {
    const [selectedsize, setSelectedsize] = useState('');
    const cartItems = useSelector((state) => state.cart.items);
    // console.log(cartItems)
    const dispatch = useDispatch();
    const location = useLocation();
    const { product } = location.state;
    console.log(product)    
    console.log(selectedsize)    


    const sizeArray = product.sizes.split(',');

    const handleAddItem = () => {
        if (!selectedsize) {
            alert("Please select a size.");
            return; 
        }
        dispatch(addItem({ ...product, selectedsize })); 
    };
    
    return (
        <div>
            <Header />
            <hr />
            <div className='flex max-w-[1700px] my-4 mx-auto'>
                <div className='grid grid-cols-2 max-w-[910px] gap-3'>
                    {product.images.map((imgData, index) => (
                        imgData.src ? (
                            <img key={index} className='max-w-[450px] max-h-[600px]' src={imgData.src} alt={product.productName} />
                        ) : null
                    ))}
                </div>
                <div className='max-w-[700px] w-[700px] pl-5'>
                    <div className='w-full'>
                        <h1 className='text-2xl mb-3 font-bold'>{product.brand}</h1>
                        <h4 className='text-xl mb-3 text-[#535665]'>{product.productName}</h4>
                        <div className='inline-flex items-center border border-slate-300 mb-2'>
                            <div className='p-1 inline-flex items-center'>
                                <h4 className='pl-1 font-bold text-base'>{product.rating.toFixed(1)}</h4>
                                <img className='h-5 w-5' src="/images/02.png" alt="Rating Icon" />
                                <h4 className='p-1 font-medium text-base'>| {product.ratingCount} Ratings</h4>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className='flex items-center mt-2'>
                                <strong className='text-2xl pr-2 text-[#282C3F]'>&#8377;{product.price} <span className='text-sm'>/piece</span></strong>
                                <span className='text-xl text-[#282C3F]'> MRP</span>
                                <del className='text-xl pl-1 text-[#282C3F]'>&#8377;{product.mrp}</del>
                                <h1 className='ml-2 text-orange-700'>{product.discountDisplayLabel}</h1>
                            </div>
                            <h5 className='text-sm my-2 text-[#282C3F]'>(min. order 10 pieces)</h5>
                            <h3 className='text-orange-700 font-bold mt-2'>Inclusive of all taxes</h3>
                            <div className='border m-2 ml-0 border-blue-200 max-w-72 rounded text-sm p-2'>
                                <p className='text-green-500 font-semibold'>Delivery</p>
                                <p className='text-[#282C3F]'>Estimated delivery between Mon, <span className='text-lg font-semibold'>Oct 8</span></p>
                            </div>
                            <h3 className='font-bold py-5'>SELECT SIZE</h3>
                            <div className='flex'>
                                {sizeArray.map(size => (
                                    <li
                                        key={size}
                                        onClick={() => setSelectedsize(size)}
                                        className={`relative flex justify-center items-center list-none m-2 min-h-16 min-w-16 border rounded-full cursor-pointer 
                                            ${selectedsize === size ? 'bg-orange-300' : 'border-slate-400 hover:bg-orange-300'}`}>
                                        <p className='min-w-9 font-bold text-center text-[#282C3F]'>{size}</p>
                                    </li>
                                ))}
                            </div>
                            <p className='max-w-[560px] text-sm pr-32 float-end'>min. order 10 pieces</p>
                            {cartItems.map(cartdata => (
                                <>
                                {console.log('----->',cartdata) }
                                {console.log('----->',cartdata.selectedsize) }
                                {cartdata.product === product.product && cartdata.selectedsize === selectedsize ? (
                                    <div className=' mx-auto my-0 right-0 left-0 mt-7 flex justify-between p-2'>
                                    <div className='bg-slate-200 rounded-md p-2' >
                                    <p className='font-bold text-black'>selected size : {cartdata.selectedsize} </p>
                                        <p className='font-bold text-[#DC4326]'>Total ammount: </p>
                                        <p className='font-bold text-xl  text-[#282C3F]'>&#8377;{product.price * cartdata.quantity}/-</p>
                                    </div>
                                    <div className='text-3xl flex justify-center  items-center bg-slate-200 rounded-3xl min-w-28'>
                                        <button onClick={() => dispatch(decrementQuantity(cartdata))}
                                            className='rounded-full h-7 w-7 bg-[#DC4326] flex items-center justify-center hover:bg-orange-600 text-white'>-</button>
                                        <span className='text-2xl px-2'>
                                            {cartdata.quantity}
                                        </span>
                                        <button onClick={() => dispatch(incrementQuantity(cartdata))}
                                            className='rounded-full h-7 w-7 bg-[#DC4326] flex items-center justify-center hover:bg-orange-600 text-white'>+</button>
                                    </div>
                                </div>) : ( null )
                                }
                                </>
                            ))}

                            
                            
                            <div className='my-7'>
                                <button onClick={()=>handleAddItem()}
                                    className='bg-[#DC4326] text-white rounded font-bold p-5 min-w-72'>ADD TO CART</button>
                                <button className='border border-black ml-4 rounded font-bold p-5 min-w-64'>ADD TO WISHLIST</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
