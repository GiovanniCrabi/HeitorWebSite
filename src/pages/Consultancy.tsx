import { ButtonStyles } from "../components/ButtonStyles";
import { SubHeader } from "../components/SubHeader";

export const Consultancy = () => {
  return (
    <div className="">
      <SubHeader title="Consultoria" />

      <div className="space-x-0 md:space-x-20 space-y-8 md:space-y-0 py-8 md:py-72 flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-black.5 to-black">
        <ButtonStyles
          title="Consultoria Online"
          content="<h1>Avaliação por Formulário</h1><h1>Coleta de Fotos</h1><h1>Planejamento de Dieta(Nutricionista)</h1><h1>Planejamento de Treino</h1>"
          link="https://api.whatsapp.com/send?phone=5535998322606&text=Ol%C3%A1%20Heitor,%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20online."
        />

        <ButtonStyles
          title="Consultoria Online"
          content="<h1>Horário agendado</h1><h1>Avaliação Física</h1><h1>Planejamento de Dieta(Nutricionista)</h1><h1>Planejamento de Treino</h1>"
          link="https://api.whatsapp.com/send?phone=5535998322606&text=Ol%C3%A1%20Heitor,%20gostaria%20de%20saber%20mais%20sobre%20consultoria%20presencial"
        />
      </div>
    </div>
  );
};
