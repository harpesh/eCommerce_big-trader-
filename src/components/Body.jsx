import React from 'react'
import Home from './Home'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Forget from './Forget'
import CreateAccount from './CreateAccount'
import Men from './Men'
import Overview from './Overview'
import Cart from './Cart'
import Place_order from './Place_order'


const Body = () => {

    const appRouter = createBrowserRouter([

        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home/>
        },
        {
            path: "/forget",
            element: <Forget/>
        },
        {
            path: "/createAccount",
            element: <CreateAccount/>
        },
        {
            path: "/AllItems/Men",
            element:<Men/>
        },
        {
            path:"/productdetails",
            element:<Overview/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"/orderdeails",
            element:<Place_order/>
        }

    ])  

    return (
        <>
        <RouterProvider router={appRouter}/>
            
        </>
    )
}

export default Body