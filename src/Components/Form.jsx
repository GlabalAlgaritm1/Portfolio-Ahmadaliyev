import React, { useState } from 'react'
import { Link } from 'react-router'

const Form = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Bu yerda ma'lumotlarni serverga yuborish mumkin
    console.log('Ism:', name)
    console.log('Telefon:', phone)
    // Formani tozalash
    setName('')
    setPhone('')
    // Drawer yopiladi
    setIsOpen(false)
  }

  return (
    <section>
      {/* Trigger Button */}
      <div className="fixed bottom-9 right-9 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white focus:outline-none"
        >
          {/* Pulse layers */}
          <span className="absolute w-12 h-12 rounded-full bg-white opacity-40 animate-ping"></span>
          <span className="absolute w-16 h-16 rounded-full bg-black opacity-20 animate-ping delay-200"></span>
          <span className="absolute w-[70px] h-[70px] rounded-full bg-white opacity-20 animate-pulse delay-200"></span>
          {/* Icon */}
          <svg
            className="relative w-6 h-6"
            viewBox="0 0 28 29"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.99 7.744a2 2 0 012 2v11.49a2 2 0 01-2 2h-1.044v5.162l-4.752-5.163h-7.503a2 2 0 01-2-2v-1.872h10.073a3 3 0 003-3V7.744zM19.381 0a2 2 0 012 2v12.78a2 2 0 01-2 2h-8.69l-5.94 6.453V16.78H2a2 2 0 01-2-2V2a2 2 0 012-2h17.382z"
              fill="#00AEEF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 rounded-l-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">Kursga yozilish</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Ism</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ismingiz"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Telefon</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="+998..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#00AEEF] text-white rounded hover:bg-blue-600"
            >
              Yuborish
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            >
              Yopish
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Form
