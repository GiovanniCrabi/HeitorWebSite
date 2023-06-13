import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  PhoneOutgoing,
  WhatsappLogo,
} from "phosphor-react";
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

      <div className="space-x-0 md:space-x-20 space-y-8 md:space-y-0 py-8 md:py-72 flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-black.5 to-black  ">
        <ButtonStyles
          icon={<WhatsappLogo />}
          title="Whatsapp"
          link="https://wa.me/5535998322606?text=Ol%C3%A1+Heitor%2C+poderia+me+ajudar%3F+ "
        />
        <ButtonStyles
          icon={<PhoneOutgoing />}
          title="Telefone"
          link="tel:+5535998322606"
        />
        <ButtonStyles
          icon={<EnvelopeSimple />}
          title="E-mail"
          link="mailto:heitordasilvacamilo@hotmail.com"
        />
      </div>

      <div className="w-full flex items-center justify-center space-x-8 h-16 bg-gradient-to-r from-yellow.4 via-yellow.5 to-black animate-pulse">
        <a href="https://www.facebook.com/heitor.camilo.92" target="_blank">
          <FacebookLogo className="font-black text-5xl hover:text-6xl transition-all duration-300" />
        </a>

        <a href="https://www.instagram.com/heitorcamilo.personal/" target="_blank">
          <InstagramLogo className="font-black text-5xl hover:text-6xl transition-all duration-300" />
        </a>
      </div>
    </>
  );
};
