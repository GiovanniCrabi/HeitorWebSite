import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { ButtonStyles } from "../components/ButtonStyles";
import { SubHeader } from "../components/SubHeader";

const contacts = [
  {
    socialMedia: "Instagram",
    link: "https://www.instagram.com/heitorcamilo.personal/",
    icone: "Icone",
  },
];

export const Contact = () => {
  return (
    <>
      <SubHeader title="Contatos" />
      <div className="bg-black h-24 md:h-72 flex justify-center items-center">
        <h1 className="font-extrabold uppercase text-2xl md:text-4xl text-center py-8 px-8">
          Escolha a melhor opção de contato para você!
        </h1>
      </div>
      <div className="space-x-0 md:space-x-20 space-y-8 md:space-y-0 py-8 md:py-72 flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-black.5 to-black ">
        <ButtonStyles
          icon={<InstagramLogo />}
          title="Instagram"
          link="https://www.instagram.com/heitorcamilo.personal/"
        />
        <ButtonStyles
          icon={<FacebookLogo />}
          title="Facebook"
          link="https://www.facebook.com/heitor.camilo.92"
        />
        <ButtonStyles
          icon={<WhatsappLogo />}
          title="Whatswapp"
          link="https://www.instagram.com/heitorcamilo.personal/"
        />
      </div>
    </>
  );
};
