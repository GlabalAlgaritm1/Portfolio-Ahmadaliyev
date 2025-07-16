import React, { useState } from 'react'
import { Element } from '../Elements'
import Myteam from '../img/Myteam.png'
import View from '../img/View.png'
import github from '../img/github.png' // Fayl nomi: githubW.png bo‘lishi kerak!
import Linki from '../img/Link.png'
import Twitter from '../img/Twitter2.png'
import usetitle from '../Components/Usetitle'

const projectsData = [
  {
    id: 1,
    title: 'My Team',
    img: Myteam,
    link: 'https://my-team-dev.vercel.app',
    github: 'https://github.com/GlabalAlgaritm1',
    difficulty: 'Hard',
    description: 'Bu loyiha jamoaviy ishlarni boshqarish, vazifalarni taqsimlash va jamoa a’zolari bilan oson aloqa qilish uchun ishlab chiqilgan.'
  },
  // Boshqa projectlar shu tarzda davom etadi...
]

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Hard':
      return 'bg-red-600 text-red-600'
    case 'Medium':
      return 'bg-yellow-500 text-yellow-500'
    case 'Easy':
      return 'bg-green-600 text-green-600'
    default:
      return 'bg-gray-400 text-gray-400'
  }
}

const Projects = () => {
  usetitle('Projects')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)

  const openModal = (project) => {
    setActiveProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveProject(null)
  }

  return (
    <section className={`${Element.Container} py-3`}>
      <h2 className='text-2xl font-semibold border-b rounded-b-lg pb-2 mb-4 w-full max-w-[120px] mx-auto text-center hover:cursor-default hover:text-green-500 transition-all duration-150'>
        Loyihalar
      </h2>

      <section className='grid grid-cols-4 gap-5 max-sm:grid-cols-1 max-sm:gap-y-4'>
        {projectsData.map((project) => (
          <div key={project.id} className='flex flex-col items-center space-y-2'>
            <div className="bg-black/25 px-1 py-2 rounded-lg w-full flex items-center justify-between">
              <button
                onClick={() => openModal(project)}
                className='border rounded-lg px-[6px] py-[6px] ml-2 hover:bg-black/25 hover:border-green-500 transition-all duration-200'
              >
                <img className='w-6 h-6' src={View} alt="View" />
              </button>

              <div className='flex items-center gap-2'>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='border rounded-lg px-[6px] py-[6px] ml-2 hover:bg-black/25 hover:border-green-500 transition-all duration-200'>
                  <img className='w-6 h-6' src={Linki} alt="Link" />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='border rounded-lg px-[6px] py-[6px] ml-2 border-blue-600 hover:bg-black/25 hover:border-green-500 transition-all duration-200'>
                  <img className='w-6 h-6' src={github} alt="GitHub" />
                </a>
              </div>
            </div>

            <div className="bg-black/25 px-2 py-4 rounded-lg">
              <img src={project.img} alt={project.title} />
            </div>

            <div className="bg-black/25 px-1 py-2 rounded-lg w-full flex items-center justify-between">
              <h2 className='ml-2'>{project.title}</h2>
              <div className='flex items-center gap-2 mr-2'>
                <span className={`${getDifficultyColor(project.difficulty).split(' ')[0]} w-1 p-1 rounded-lg`}></span>
                <p className={`font-semibold text-sm ${getDifficultyColor(project.difficulty).split(' ')[1]}`}>
                  {project.difficulty}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {isModalOpen && activeProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-[600px] max-h-[80%] overflow-y-auto rounded-lg shadow-lg p-6 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-1 right-4 text-black bg-gray-200 hover:bg-red-500 hover:text-white transition px-2 py-1 rounded"
            >
              <img className='w-7' src={Twitter} alt="ortga" />
            </button>

            <img src={activeProject.img} alt={activeProject.title} className="w-full rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">{activeProject.title}</h2>
            <p className="text-gray-700 mb-4">{activeProject.description}</p>
            <p className="text-gray-700 mb-2">Texnologiyalar: React, Tailwind CSS, Vite, Vercel va boshqalar.</p>
            <p className="text-gray-700 mb-2">Funksiyalar: Live preview, GitHub repo, responsive dizayn.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
