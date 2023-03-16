import { Header } from "../components/Header";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import gym from '../assets/gym.webp';
import { Flag, MusicNote } from "phosphor-react";
import { useEffect, useState } from "react";
import { experienceData } from "../components/Contents";

export const About = () => {
  const [lineColor, setLineColor] = useState<string>("white");

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.querySelector(".vertical-timeline");
      const timelineTop = timeline?.getBoundingClientRect()?.top;
      const windowHeight = window.innerHeight;

      if (timelineTop != null && timelineTop < windowHeight * 0.1) {
        setLineColor("yellow");
      } else {
        setLineColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex-col">
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

      <div className='flex justify-center items-center'>
        <div className="bg-black.5 rounded-md px-48 py-8 mt-8 w-3/4 h-full">
          <h1 className="font-bold text-5xl grid place-items-center py-4 text-yellow.5"> Sobre </h1>

          <div className="space-y-4">
            <p className="text-white font-bold text-center">
              Olá, eu sou o Heitor e me formei em 2014. Desde então, tenho me dedicado a aprimorar minhas habilidades e conhecimentos através de especializações em áreas diversas.
            </p>

            <p className="text-white font-bold text-center">
              Uma das minhas especializações é em Gestão de Projetos, na qual pude aprender sobre técnicas e metodologias para gerenciar projetos de forma eficiente, garantindo o cumprimento dos prazos e objetivos.
            </p>

            <p className="text-white font-bold text-center">
              Outra área em que me especializei é em Marketing Digital, na qual pude aprofundar meus conhecimentos em estratégias de marketing voltadas para o ambiente digital. Com isso, pude ajudar empresas a alcançar um maior público e aumentar sua presença online.
            </p>

            <p className="text-white font-bold text-center">
              Além disso, também me especializei em Desenvolvimento Web, aprendendo técnicas e tecnologias para criar websites e aplicações web de alta qualidade e desempenho.
            </p>

            <p className="text-white font-bold text-center">
              Todas essas especializações me permitem ter uma visão ampla e estratégica sobre as necessidades de uma empresa, além de me capacitar para atuar em áreas diversas, contribuindo para o sucesso de projetos e iniciativas.
            </p>
          </div>
        </div>
      </div>



      <div className=" w-full h-full">
        <VerticalTimeline lineColor={lineColor} className='transition-all duration-1000' >
          {experienceData.map ((experience) => {
            return (
              <VerticalTimelineElement
              className="vertical-timeline-element--work transition-all duration-500"
              contentStyle={{ background: '#eab308', color: '#050101' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(243, 243, 33)' }}
              date={experience.date}
              dateClassName="text-yellow-300"
              iconClassName='bg-yellow-500 w-2 h-2 rounded-full'
              
            >
              <h3 className="vertical-timeline-element-title">{experience.whatWas}</h3>
              <h4 className="vertical-timeline-element-subtitle">{experience.where}</h4>
              <p>{experience.position}</p>
            </VerticalTimelineElement>
            )
          })}
        
        </VerticalTimeline>
      </div>
    </div>
  )
}