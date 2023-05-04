import { Header } from "./Header";

interface SubHeaderProps {
  title:string;
}

export const SubHeader = ({ title }: SubHeaderProps) => {
  return (
    <>
      <div className="md:hidden bg-black z-10">
        <Header />
        <h1 className="text-white uppercase text-4xl flex justify-center">
          {title}
        </h1>
      </div>

      <div
        className=" h-full w-full py-8 overflow-hidden bg-black md:bg-[url('assets/banner2.jpg')] bg-cover bg-no-repeat bg-left-top"
      >

        <div className="sm:hidden md:flex">
          <Header />
        </div>
        <h1 className="text-yellow.4 font-extrabold hidden uppercase text-4xl md:flex justify-center">
          {title}
        </h1>
      </div>
    </>
  );
};
