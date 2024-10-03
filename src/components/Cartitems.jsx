import React from 'react'

const Cartitems = ({CartItems}) => {
  
    return (
        <div>
            {CartItems.map((item, index) => (
                <div key={index}>
                    <h2>{item.productName}</h2>
                    <p>{item.price} * {item.count}</p>
                </div>
            ))}
            <h3>Total: {CartItems.reduce((acc, item) => acc + (item.price * item.count), 0)}</h3>
        </div>
    )
}

export default Cartitems