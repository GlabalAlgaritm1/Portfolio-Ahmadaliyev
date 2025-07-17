import React, { useState } from 'react'
import { Element } from '../Elements'
import rasm1 from '../img/download.svg'
import rasm2 from '../img/rasm1.svg'
import rasm3 from '../img/rasm2.svg'
import rasm4 from '../img/rasm3.svg'
import rasm5 from '../img/rasm4.svg'
import rasm6 from '../img/rasm5.svg'

import SEO from '../img/SEO.png'
import dizayn from '../img/bir.png'
import sifatli from '../img/zor.png'
import tezkor from '../img/fast.png'
import { Link } from 'react-router'
import telegram from '../img/telegram.png'
import Instagram from '../img/instagram.png'
import YouTube from '../img/youtube.png'
import TwitterX from '../img/Twitter.png'
import useTitle from '../Components/Usetitle'
const Boglanish = () => {
  useTitle("Boglanish")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const BOT_TOKEN = '7933237192:AAE9a0fJTlv1LraxYKBsVrPTzbXL_LssQio'
    const CHAT_ID = '7764198922' 

    const text = `🟢 Yangi So‘rov\n👤 Ism: ${name}\n📧 Email: ${email}\n💬 Xabar: ${message}`

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`

    try {
      await fetch(url)
      alert('Xabar yuborildi!')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      alert('Xatolik yuz berdi!')
      console.error(error)
    }
  }

  return (
    <section className={`${Element.Container} py-3 mb-20`}>
      <div className="flex flex-col items-center gap-8">

        {/* 1 */}
        <div className="flex items-center gap-[250px] justify-between max-sm:flex max-sm:flex-col gap-y-8">
          <div>
            <h2 className='font-semibold p-2 text-3xl text-center border-b border-r w-full max-w-[250px] rounded-r-xl hover:text-green-500 cursor-default transition-all duration-200'>
              So‘rov Yuborish
            </h2>
            <div className='flex items-center justify-between'>
              <div className="flex flex-col items-center gap-4 mt-4">
                <div className='flex flex-col md:flex-row items-center gap-4 w-full max-w-[600px]'>
                  <div className='flex-1 w-full'>
                    <label className='block mb-1'>Ism</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='w-full text-green-500 px-4 py-2 rounded-lg bg-black/20 border border-blue-500 outline-none'
                      type="text"
                      placeholder='Ismingizni kiriting'
                      required
                    />
                  </div>
                  <div className='flex-1 w-full'>
                    <label className='block mb-1'>Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full text-green-500 px-4 py-2 rounded-lg bg-black/20 border border-blue-500 outline-none'
                      type="email"
                      placeholder='Emailingizni kiriting'
                      required
                    />
                  </div>
                </div>
                <div className='w-full max-w-[600px]'>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className='w-full text-green-500 px-4 py-4 rounded-lg bg-black/20 border border-blue-500 outline-none resize-none'
                    rows="6"
                    placeholder='Xabaringizni yozing...'
                    required
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className='bg-black/35 w-full max-w-[600px] py-3 rounded-lg hover:bg-sky-800 hover:transition-all hover:duration-200 text-xl font-semibold'
                >
                  Yuborish
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className='font-semibold mb-4 p-2 text-3xl text-center border-b border-r w-full max-w-[250px] rounded-r-xl hover:text-green-500 cursor-default transition-all duration-200 max-sm:text-2xl'>
              Bog'lanish
            </h2>
            <div className='grid grid-cols-2 gap-5'>

              <Link to='https://t.me/GeniusZF' target='_blank' className='flex items-center gap-2 border px-2 py-1 rounded-lg'>
                <img className='w-10 h-10' src={telegram} alt="" />
                <p className='text-xl font-semibold max-sm:text-sm' >
                  Telegram
                </p>
              </Link>
              <Link to='https://t.me/GeniusZF' target='_blank' className='flex items-center gap-2 border px-2 py-1 rounded-lg'>
                <img className='w-10 h-10' src={Instagram} alt="" />
                <p className='text-xl font-semibold max-sm:text-sm' >
                  Instagram
                </p>
              </Link>
              <Link to='https://t.me/GeniusZF' target='_blank' className='flex items-center gap-2 border px-2 py-1 rounded-lg'>
                <img className='w-10 h-10' src={YouTube} alt="" />
                <p className='text-xl font-semibold max-sm:text-sm' >
                  You tube
                </p>
              </Link>
              <Link to='https://t.me/GeniusZF' target='_blank' className='flex items-center gap-2 border px-2 py-1 rounded-lg'>
                <img className='w-10 h-10' src={TwitterX} alt="" />
                <p className='text-xl font-semibold max-sm:text-sm' >
                  Twitter
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h2 className='font-semibold my-8 p-2 text-3xl text-center border-b border-l w-full max-w-[250px] rounded-l-xl hover:text-green-500 cursor-default transition-all duration-200 max-sm:text-2xl'>
            Texnalogiyalar
          </h2>
          <div className="grid grid-cols-4 gap-x-3 gap-y-4 max-sm:grid-cols-2">
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm1} alt="html" />
            </div>
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm2} alt="html" />
            </div>
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm3} alt="html" />
            </div>
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm4} alt="html" />
            </div>
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm5} alt="html" />
            </div>
            <div className='bg-black/35 px-10 py-7 rounded-xl'>
              <img className='w-16 h-16 mx-auto object-cover' src={rasm6} alt="html" />
            </div>
          </div>
          <h2 className='font-semibold my-7 p-2 text-3xl text-center border-b border-l w-full max-w-[400px] rounded-l-xl hover:text-green-500 cursor-default transition-all duration-200 max-sm:text-2xl'>
            Men nimalar qila olaman
          </h2>
          <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
            <div className='flex items-center gap-3 bg-black/25 px-6 py-6 rounded-lg'>
              <img className='bg-black/30 px-3 py-3 rounded-lg w-16' src={SEO} alt="" />
              <div>
                <span className='font-semibold text-lg'>SEO optimizatsiya</span>
                <p className='text-white/85 w-full max-w-[300px] '>
                  Saytni qidiruv tizimlarida yuqori o'rinlarga ko'tarish
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-black/25 px-6 py-6 rounded-lg'>
              <img className='bg-black/30 px-3 py-3 rounded-md w-16' src={dizayn} alt="" />
              <div>
                <span className='font-semibold text-lg'>Kuchli dizayn</span>
                <p className='text-white/85 '>
                  Dizayn jarayonida nafislik va detallarga katta e’tibor qaratish
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-black/25 px-6 py-6 rounded-lg'>
              <img className='bg-black/30 px-3 py-3 rounded-md w-16' src={sifatli} alt="" />
              <div>
                <span className='font-semibold text-lg'>Sifatli ishlab chiqish</span>
                <p className='text-white/85 '>
                  Saytlarni yuqori sifatli va zamonaviy standartlarga mos ishlab chiqish
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-black/25 px-6 py-6 rounded-lg'>
              <img className='bg-black/30 px-3 py-3 rounded-md w-16' src={tezkor} alt="" />
              <div>
                <span className='font-semibold text-lg'>Tezkor ish jarayoni</span>
                <p className='text-white/85 '>
                  Belgilangan vaqt ichida samarali va tezkor sayt yaratish
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Boglanish
