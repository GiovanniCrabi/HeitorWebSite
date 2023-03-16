import { Header } from "../components/Header";

import gym from '../assets/gym.webp';
import { WhatsappLogo } from "phosphor-react";


export const Contact = () => {
  return (
    <>
      <div className=" bg-black.5 w-full h-screen overflow-hidden flex-col">
        <Header />

        <div className="flex flex-col justify-center items-center h-2/4 md:h-3/4 px-8 md:px-0 ">
          <h1 className="font-bold text-yellow.4 text-sm md:text-2xl uppercase">Ainda Em Dúvida?</h1>
          <h1 className="font-bold text-white text-2xl md:text-7xl uppercase">Entre em contato</h1>
        </div>
      </div>

      <button
      className="fixed right-0 bottom-0"
    >
      <WhatsappLogo className="w-12 h-12 m-4 bg-green-500 text-white rounded-full shadow-lg hover:w-16 hover:h-16 transition-all"/>
    </button>

        <h1 className="grid place-items-center h-screen"> Contatos </h1>
    </>
  )
}