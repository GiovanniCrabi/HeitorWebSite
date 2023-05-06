import { Barbell } from "phosphor-react";
import { SubHeader } from "../components/SubHeader";

export const Evolutions = () => {
  return (
    <>
      <SubHeader title="Evoluções" />

      <div className="bg-black  w-full h-40 flex items-center justify-center">
        <div className=" h-full grid place-items-center">
          <h1 className="font-black text-2xl md:text-5xl text-center ">
            Evoluções e Clientes Satisfeitos
          </h1>

          <Barbell className="text-4xl md:text-7xl text-yellow.4" />
        </div>

      </div>
    </>
  );
};
