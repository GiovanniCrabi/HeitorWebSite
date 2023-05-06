import { ArrowRight } from "phosphor-react";
import { ReactNode } from "react";

interface ButtonConsultancy {
  title: string;
  icon?: ReactNode;
  content?: string;
  link: string;
}

export const ButtonStyles = ({
  title,
  icon,
  content,
  link,
}: ButtonConsultancy) => {
  return (
    <div className="bg-black.5 flex px-8 py-8 justify-center items-center max-w-[85%] w-full h-full md:w-[32rem] md:h-[32rem] rounded-full transition-all duration-300 ease-in-out hover:rounded-lg transform hover:scale-110 border-black hover:border-4 hover:border-yellow-400">
      <div className="column text-center space-y-8">
        <div className="flex items-center justify-center text-yellow.5 text-6xl">{ icon }</div>
        <h1 className="text-yellow.5  font-extrabold text-lg md:text-2xl">
          {title}
        </h1>
        {content ? (
          <div
            className="text-white space-y-4 text-base md:text-lg mt-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : null}

        <a href={link} target="_blank">
          <button className="w-40  md:w-52 h-12 rounded-lg bg-yellow.5 mt-8 hover:bg-yellow.4 hover:border-yellow.4 transition-colors duration-300  ">
            <h1 className="text-white font-extrabold grid place-items-center"> <ArrowRight className="text-2xl font-black" /> </h1>
          </button>
        </a>
      </div>
    </div>
  );
};
