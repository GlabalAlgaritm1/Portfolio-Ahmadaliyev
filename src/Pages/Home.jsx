import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Element } from '../Elements'
import rasm2 from '../img/rasm2.png'
import useTitle from '../Components/Usetitle'

const Home = () => {
  useTitle('Asosiy')

  useEffect(() => {
    AOS.init({
      duration: 800, // animatsiya davomiyligi (ms)
      once: true,    // faqat bir marta animatsiya bo‘lsin
    })
  }, [])

  return (

    <section className={`${Element.Container} flex items-center justify-between py-2 mb-20 max-sm:flex max-sm:items-center max-sm:flex-col`}>
      {/* 1 */}
      <section
        className='font-semibold flex flex-col items-center space-y-2 my-20 w-full max-w-[700px] max-sm:my-5'
        data-aos="fade-right"
      >
        <h2 className='text-3xl max-sm:text-xl'>
          <span className='ml-2'>Assalomu Aleykum men</span> <br />{' '}
          <span className='text-green-500'>Zafarbek Ahmadaliyev</span>man
        </h2>
        <h3 className='text-2xl pb-7 max-sm:text-xl ml-7'>
          Men <span className='text-green-500'>Frontend</span> va{' '}
          <span className='text-green-500'>Backend</span> dasturchiman
        </h3>
        <div>
          <p className='text-xl border-r border-b border-red-700 p-2 rounded-r-3xl '>
            Men frontend va backend dasturchiman — bugungi raqamli dunyoning
            ajralmas qismi bo‘lishni yaxshi ko‘raman. Foydalanuvchi ko‘radigan
            qismni — dizayn, tugmalar, animatsiyalarni yaratish menga zavq
            bag‘ishlaydi. Shu bilan birga, server, ma’lumotlar bazasi va ichki
            tizimlar bilan ishlashni ham yaxshi bilaman. Loyihalarimda tashqi va
            ichki qismlar mukammal ishlashi muhim. Har doim yangilikni
            o‘rganishga intilaman, muammolarni ijodiy hal qilaman va natijaga
            yetishishni maqsad qilaman. Dasturlash nafaqat kasbim, balki
            qiziqishim hamdir.
          </p>
        </div>
      </section>
      {/* 2 */}
      <section data-aos="fade-left">
        <div
          className="w-96 h-96 bg-blue-500 max-sm:z-50 max-sm:w-[300px] max-sm:h-[290px]"
          style={{
            zIndex:'-50',
            clipPath:
              'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        >
          <img
            className='w-full p-2 ml-2 object-cover'
            src={rasm2}
            alt="Odam"
          />
        </div>
      </section>
    </section>
  )
}

export default Home
