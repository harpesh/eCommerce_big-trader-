import React from 'react'

const Categories = () => {
    return (
        <div>
            <div className='grid grid-cols-6 grid-rows-1 justify-items-center	 '>
                <img src="https://big-trader.netlify.app/static/media/fashion.ef93564b7f8fcb53ab462ebd0b37d499.svg" alt="" />
                <img src="https://big-trader.netlify.app/static/media/electronic.8d27844f82af43928c61d754295f8088.svg" alt="" />
                <img src="https://big-trader.netlify.app/static/media/food.43c13db15b1f9c952d9a77872fb82f8b.svg" alt="" />
                <img src="https://big-trader.netlify.app/static/media/healthBeauty.bda05e426594b53e7cbd3e28c823d0e8.svg" alt="" />
                <img src="https://big-trader.netlify.app/static/media/office.8cc26badde8e1f293c5122455154f1ba.svg" alt="" />
                <img src="https://big-trader.netlify.app/static/media/toys.2dbe831b933b0beed54bd4a81bbb4341.svg" alt="" />
            </div>
            <div className='grid grid-cols-6 grid-rows-1 justify-items-center'>
                <h3>Fashion</h3>
                <h3>Electronics</h3>
                <h3>Food</h3>
                <h3>Beauty</h3>
                <h3>Office</h3>
                <h3>Toys</h3>
            </div>
        </div>
    )
}

export default Categories