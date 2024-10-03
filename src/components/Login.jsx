import React from 'react'
import BasicTextFields from '../mui/field'


const admin = {
    "username": "harpesh", "password": 12345678
}
const Login = () => {
    return (
        <React.Fragment>
            <div className='h-screen w-full '>
                <header className='h-20 w-full p-5 shadow-lg	'>
                    <div >
                        <img src="public/images/01.svg" alt="" />
                    </div>
                </header>
                <main className='flex h-screen  '>
                    <div className='w-7/12 '>
                        <img className='w-full h-full' src="https://big-trader.netlify.app/static/media/login_img.f9eaa359ee466d094380.png" alt="" />
                    </div>
                    <div className='my-14 mx-10'>
                        <div className='ml-10'>
                            <img src="https://big-trader.netlify.app/static/media/logo_content.86dae7d977d6b5f1c6ed4abe77b29c86.svg" alt="" />
                        </div>
                        <p className='text-3xl from-neutral-950 font-extrabold mt-10 p-0 '>Welcome Back</p>
                        <p className='text-xl from-neutral-950 font-normal mt-2 p-0 font-gray '> Please login your account to continue.</p>

                        <div className='w-full mt-10 '>
                            <BasicTextFields />
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment >
    )
}

export default Login