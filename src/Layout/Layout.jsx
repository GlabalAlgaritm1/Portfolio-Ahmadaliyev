import React from 'react'
import Xeader from '../Components/Xeader'
import { Outlet } from 'react-router'
import BG from '../img/rasm.jpg'
import Form from '../Components/Form'
const Layout = () => {
    return (
        <section className='text-white'> 
            <img className='fixed -z-50 h-screen w-full' src={BG} alt="Bacround Image" />
            <Xeader />
            <Form/>
            <main>
                <Outlet/>
            </main>
        </section>
    )
}

export default Layout