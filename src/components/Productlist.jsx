import React from 'react'
import { myntradata,myntradata2 } from '../APIDATA/Apidara';
import { useNavigate } from 'react-router-dom';

const Productlist = () => {
    const navigate = useNavigate()
    // const [product, setProduct] = useState(myntradata);
    // const [product2, setProduct2] = useState(myntradata2);   
    return (
        <>
            <div className=' rounded-lg mb-5 cursor-pointer	 ' >
                <div className="w-full overflow-x-auto rounded scroll-smooth scroll-hide">
                    <div className="flex  flex-row space-x-4 p-4 rounded ">
                        {myntradata.map((product, index) => (
                            <>
                            {console.log(product)}
                            <div className=' relative min-w-[215px] shadow-2xl rounded-xl p-2 '
                                onClick={() => { navigate('/productdetails', { state: { product } }); }}>
                                <img className=' w-[210px] h-[280px] rounded ' key={product.productId} src={product.images[0].src} alt="" />
                                <div className='absolute  max-h-[24px] flex rounded-sm top-[265px] left-4 '>
                                    <span className='pl-1 font-bold text-xs'>{product.rating.toFixed(1)}</span>
                                    <img className='h-4 w-full ' src="/images/02.png" alt="" />
                                    <span className='pr-1 font-semibold text-xs'>|{product.ratingCount}</span>
                                </div>
                                <div className='m-2'>
                                    <h3 className=' font-bold text-[#282C3F]'>{product.brand}</h3>
                                    <h4 className='text-sm'>{product.productName}</h4>
                                    <strong className='text-sm text-[#282C3F]'>&#8377;{product.price}
                                        <span className='text-xs text-gray-500'>/piece</span>
                                    </strong>
                                    <p>
                                        <del className='text-sm text-[#282C3F]'>&#8377;{product.mrp}</del>
                                        <span className='ml-2 text-green-500'>{product.discountDisplayLabel}</span>
                                    </p>
                                </div>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' rounded-lg mb-10 cursor-pointer	 ' >
                <div className="w-full overflow-x-auto rounded scroll-smooth scroll-hide">
                    <div className="flex  flex-row space-x-4 p-4 rounded ">
                        {myntradata2.map((product, index) => (
                            <div className=' relative min-w-[215px] shadow-2xl rounded-xl p-2 bg-slate-100'
                                onClick={() => { navigate('/productdetails', { state: { product } }); }}>
                                <img className=' w-[210px] h-[280px] rounded ' key={product.productId} src={product.images[0].src} alt="" />
                                <div className='absolute  max-h-[24px] flex rounded-sm top-[265px] left-4 bg-slate-100'>
                                    <span className='pl-1 font-bold text-xs'>{product.rating.toFixed(1)}</span>
                                    <img className='h-4 w-full ' src="/images/02.png" alt="" />
                                    <span className='pr-1 font-semibold text-xs'>|{product.ratingCount}</span>
                                </div>
                                <div className='m-2'>
                                    <h3 className=' font-bold text-[#282C3F]'>{product.brand}</h3>
                                    <h4 className='text-sm'>{product.productName}</h4>
                                    <strong className='text-sm text-[#282C3F]'>&#8377;{product.price}
                                        <span className='text-xs text-gray-500'>/piece</span>
                                    </strong>
                                    <p>
                                        <del className='text-sm text-[#282C3F]'>&#8377;{product.mrp}</del>
                                        <span className='ml-2 text-green-500'>{product.discountDisplayLabel}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};



export default Productlist
