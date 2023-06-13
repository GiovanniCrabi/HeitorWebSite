import { Barbell } from "phosphor-react";
import { SubHeader } from "../components/SubHeader";

import evo1 from "../assets/evo-1.jpg";
import evo2 from "../assets/evo-2.jpeg";
import { EvolutionsData } from "../components/Contents";

export const Evolutions = () => {
  return (
    <>
      <SubHeader title="Evoluções" />

      <div className="bg-black  w-full h-40 flex items-center justify-center">
        <div className=" h-full grid place-items-center">
          <h1 className="text-white font-black text-2xl md:text-4xl text-center ">
            Evoluções e Clientes Satisfeitos
          </h1>

          <Barbell className="text-4xl md:text-7xl text-yellow.4" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center py-6 px-6 md:px-20">
        {EvolutionsData.map((evolution, i) => {
          return (
            <a key={i} href={evolution.link} target="_blank" className="h-80 w-80 relative  duration-300 hover:rounded-lg transform hover:scale-110 border-black hover:border-4 hover:border-yellow-400">
              <div
                className="hover:opacity-20 transition ease-in-out delay-150 w-full h-full bg-auto bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${evolution.img})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="w-full h-full text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  {evolution.instagram}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
