import request, { gql } from "graphql-request";
import { Barbell } from "phosphor-react";
import { useEffect, useState } from "react";
import { SubHeader } from "../components/SubHeader";

interface EvolutionProps {
  sectionsEvolution: EvolutionPerson[];
}

interface EvolutionPerson {
  id: string;
  imageEvolution: {
    url: string;
  };
  instagramLink: string;
  instagramName: string;
}

export const Evolutions = () => {
  const [sectionsEvolution, setSectionsEvolution] = useState<EvolutionPerson[]>([]);

  useEffect(() => {
    const fetchEvolution = async () => {
      const query = gql`
        query MyQuery {
          evolution(where: {slug: "evolution"}) {
            sectionsEvolution {
              ... on EvolutionPerson {
                id
                imageEvolution {
                  url
                }
                instagramLink
                instagramName
              }
            }
          }
        }
      `;

      try {
        const { evolution: { sectionsEvolution } } = await request<{ evolution: { sectionsEvolution: EvolutionPerson[] } }>(
          import.meta.env.VITE_HYGRAPH_URL,
          query
        );

        setSectionsEvolution(sectionsEvolution);
      } catch (error) {
        console.error('Error fetching introduction:', error);
      }
    };

    fetchEvolution();
  }, []);

  console.log(sectionsEvolution)

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
        {sectionsEvolution.map(evolution => {
          return (
            <a key={evolution.id} href={evolution.instagramLink} target="_blank" className="h-80 w-80 relative  duration-300 hover:rounded-lg transform hover:scale-110 border-black hover:border-4 hover:border-yellow-400">
              <div
                className="hover:opacity-20 transition ease-in-out delay-150 w-full h-full bg-auto bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${evolution.imageEvolution.url})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="w-full h-full text-white flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  {evolution.instagramName}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
