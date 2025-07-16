import React, { useEffect, useState } from 'react'
import Logo from '../img/Logo.jpg'
import { Element } from '../Elements'
import { Link, NavLink } from 'react-router'
import rasm1 from '../img/Link.png'
const Xeader = () => {
  const [visitors, setVisitors] = useState(0)

  useEffect(() => {
    // localStorage dan o‘qiymiz
    let count = localStorage.getItem('visitors')

    if (!count) {
      count = 1
    } else {
      count = parseInt(count) + 1
    }

    // Yangi qiymatni localStorage ga saqlaymiz
    localStorage.setItem('visitors', count)

    // State ga yuklaymiz
    setVisitors(count)
  }, [])

  return (
    
    <>
    <header className={`${Element.Container} py-2 border-b rounded-b-xl flex items-center justify-between sticky top-0 overflow-hidden backdrop-brightness-125 z-50`}>
      <div className="flex items-center shadow-inner shadow-white p-1 rounded-full">
        <Link to='/' className='rounded-full border p-1'>
          <img className='w-10 rounded-full object-cover' src={Logo} alt="Logo" />
        </Link>
      </div>

      <nav className='flex items-center gap-3 shadow-inner shadow-white p-3 rounded-md'>

        <button className='border p-1 px-3 rounded-lg font-semibold max-sm:shadow-sm'>
          <span>
            Users: {visitors}
          </span>
        </button>

        <NavLink to='/' className='border p-1 px-3 rounded-lg font-semibold max-sm:hidden'>
          <span>Asosiy</span>
        </NavLink>

        <NavLink to='/Projects' className='border p-1 px-3 rounded-lg font-semibold max-sm:hidden'>
          <span>Projects</span>
        </NavLink>

        <NavLink to='/Boglanish' className='border p-1 px-3 rounded-lg font-semibold max-sm:hidden'>
          <span>Bog‘lanish</span>
        </NavLink>
      </nav>
    </header>
    <nav className="fixed bottom-0 left-0 w-full bg-blue-400 flex items-center justify-around px-4 py-2 sm:hidden">
    <NavLink to="/" className="px-1 py-1">
      <img className="h-10 w-12 border p-1 rounded-lg" src={rasm1} alt="Asosiy" />
    </NavLink>
    <NavLink to="/Projects" className="px-1 py-1">
      <img className="h-10 w-12 border p-1 rounded-lg" src={rasm1} alt="Projects" />
    </NavLink>
    <NavLink to="/Boglanish" className="px-1 py-1">
      <img className="h-10 w-12 border p-1 rounded-lg" src={rasm1} alt="Bog‘lanish" />
    </NavLink>
    <NavLink to="/Users" className="px-1 py-1">
      <img className="h-10 w-12 border p-1 rounded-lg" src={rasm1} alt="Users" />
    </NavLink>
  </nav>
    </>
  )
}

export default Xeader
