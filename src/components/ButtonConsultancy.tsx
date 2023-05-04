import { ArrowArcRight } from "phosphor-react";

interface ButtonConsultancy {
  title: string;
  content: string;
  link: string;
}

export const ButtonConsultancy = ({ title, content, link }: ButtonConsultancy) => {
  return (
    <div className="bg-black.5 flex justify-center items-center  w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-none md:rounded-full transition-all duration-300 ease-in-out hover:rounded-lg transform hover:scale-110 border-black hover:border-4 hover:border-yellow-400">
      <div className="column text-center px-8">
        <h1 className="text-yellow.5  font-extrabold text-lg md:text-2xl">{title}</h1>
        <div
          className="text-white space-y-4 text-base md:text-lg mt-8"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <a href={link} target="_blank">
          <button className="w-40  md:w-52 h-12 rounded-lg bg-yellow.5 mt-8 hover:bg-yellow.4 hover:border-yellow.4 transition-colors duration-300  ">
            <h1 className="text-white font-extrabold"> Quero começar! </h1>
          </button>
        </a>
      </div>
    </div>
  );
};
