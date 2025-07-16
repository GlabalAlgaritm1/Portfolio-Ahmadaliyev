import React from 'react'
import BG from '../img/rasm.jpg'
import { Link } from 'react-router'
import Usetitle from '../Components/Usetitle'
const PNF = () => {
    Usetitle('PNF')
    return (
        <section className='flex flex-col items-center justify-between text-white'>
            <img className='fixed -z-50 h-screen w-full' src={BG} alt="Bacround Image" />
            <section className='text-center space-y-12 mt-[210px]'>
                <h1 className='text-5xl font-semibold'>
                    Sahifa topilmadi
                </h1>
                <div>
                    <Link to='/' className='text-xl border p-1 px-3 rounded-lg font-semibold hover:border-x-black hover:border-y-green-500 hover:transition-all hover:duration-200'>
                        <span>
                            Bosh sahifa
                        </span>
                    </Link>
                </div>
                <nav className="grid grid-cols-3 gap-5">
                    <div className="border-r border-b rounded-b-lg rounded-r-xl p-1 px-5 hover:text-green-500 hover:border-teal-700">
                        <Link>
                            Telegram
                        </Link>
                    </div>
                    <div className="border-r border-b rounded-b-lg rounded-r-xl p-1 px-5 hover:text-green-500 hover:border-teal-700">
                        <Link>
                            Instagram
                        </Link>
                    </div>
                    <div className="border-r border-b rounded-b-lg rounded-r-xl p-1 px-5 hover:text-green-500 hover:border-teal-700">
                        <Link>
                            You tube
                        </Link>
                    </div>
                </nav>
            </section>
        </section>
    )
}

export default PNF