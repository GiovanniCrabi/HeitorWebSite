
import bg from '../assets/bgLanding2.png';

import { Barbell } from "phosphor-react";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'
import { Header } from '../components/Header';


export const LandingPage = () => {
  return (
    <>
      <div className="md:hidden bg-black z-10">
        <Header />
      </div>

      <div className={`w-screen h-screen relative`}>
        <div
          className="absolute h-full w-full overflow-hidden"
          style={{
            backgroundColor: 'black'
          }}
        >
          <img src={bg} className='w-full h-full absolute opacity-50' />

          <div className="sm:hidden md:flex" >
            <Header />
          </div>


          <div
            className='flex flex-col text-center items-center w-full h-full space-y-8'

          >
            <motion.h1
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 2 }}

              className='flex text-2xl md:text-6xl items-center text-white text-bold z-10 uppercase tracking-widest mt-44 md:mt-12'>Heitor T<Barbell size={24} className='text-yellow-300' />e<Barbell size={24} className='text-yellow-300' />a<Barbell size={24} className='text-yellow-300' />m
            </motion.h1>

            <p className='text-sm md:text-3xl text-white text-bold z-10 sm:px-10 md:px-52 uppercase'>
              <Typewriter
                words={['Conquiste seus objetivos em 2023!', 'Entre para o time', 'Treinos personalizados']}
                cursor
                cursorStyle='_'
                loop={5}
                typeSpeed={200}
              />
            </p>
            <motion.button
              className="grid place-items-center bg-yellow-300 h-10 w-40 md:h-12 md:w-48 text-white rounded-full z-10 opacity-80 md:mt-20"
              initial={{ y: 500 }}
              animate={{ y: 0 }}
              exit={{ y: -500 }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 2 }}
            >
              <span className="flex items-center text-base md:text-lg uppercase ">
                Contacte-nos
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </>

  )
}