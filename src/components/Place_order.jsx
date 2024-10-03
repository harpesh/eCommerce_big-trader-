import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Place_order = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [userDetails, setUserDetails] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: 'cashOnDelivery', // Default payment method
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Order placed:', { userDetails, cartItems });
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <Header />
            <h1 className='text-center text-2xl font-bold m-4'>Place Your Order</h1>
            <div className='max-w-[1000px] font-bold mx-auto p-4 border border-blue-200 shadow-lg'>
                <h2 className='text-lg font-semibold'>Product Summary</h2>
                <ul className='space-y-4'>
                    {cartItems.map((item, index) => (
                        <li key={index} className='flex justify-between p-2 border-b'>
                            <span>{item.productName} </span>
                            <span>&#8377;{item.price} x {item.quantity} = &#8377;{item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className='flex float-right text-2xl font-bold mt-2'>
                    <span className='font-bold '>Total Amount:</span>
                    <span className='font-bold ml-2'>&#8377;{totalAmount}</span>
                </div>

                <h2 className='text-lg font-semibold mt-16'>Delivery Details</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userDetails.name}
                        onChange={handleChange}
                        required
                        className='border p-2 w-full'
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={userDetails.address}
                        onChange={handleChange}
                        required
                        className='border p-2 w-full'
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={userDetails.city}
                        onChange={handleChange}
                        required
                        className='border p-2 w-full'
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={userDetails.postalCode}
                        onChange={handleChange}
                        required
                        className='border p-2 w-full'
                    />
                    <div>
                        <label className='block mb-2'>Payment Method:</label>
                        <select
                            name="paymentMethod"
                            value={userDetails.paymentMethod}
                            onChange={handleChange}
                            className='border p-2 w-full'
                        >
                            <option value="cashOnDelivery">Cash on Delivery</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                        </select>
                    </div>
                    <button type="submit" className='bg-[#DC4326] text-white rounded p-2 w-full'>
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Place_order;
