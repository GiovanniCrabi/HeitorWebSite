import { Header } from "../components/Header";

import gym from '../assets/gym.webp';


export const Consultancy = () => {
  return (
    <>
      <div className="md:hidden bg-black z-10">
        <Header />
      </div>

      <div
          className=" h-full w-full overflow-hidden"
          style={{
            backgroundColor: 'black'
          }}
        >
          <img src={gym} className='w-full h-60 absolute opacity-50' />

          <div className="sm:hidden md:flex" >
            <Header />
          </div>
        </div>

        <h1 className="grid place-items-center"> Consultoria </h1>
    </>
  )
}