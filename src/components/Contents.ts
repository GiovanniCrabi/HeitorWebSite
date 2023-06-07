export const Links = [
  { name: 'HOME', src: '/' },
  { name: 'SOBRE', src: '/sobre' },
  { name: 'CONSULTORIA', src: '/consultoria' },
  { name: 'EVOLUÇÕES', src: '/evolucoes' },
  { name: 'CONTATO', src: '/contato' },
]


import * as Icons from 'phosphor-react';
import { IconProps } from 'phosphor-react';

interface Experience {
  date: string;
  position: string;
  whatWas: string;
  where: string;
  icon: React.ComponentType<IconProps>;
}

interface AboutHimProps {
  paragraph: string;
}


export const experienceData: Experience[] = [
  {
    date: '2010 - 2012',
    position: 'Estagiário de Educação Física',
    whatWas: 'Auxílio na organização de atividades esportivas', 
    where: 'Escola Municipal ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2013 - 2015',
    position: 'Professor de Educação Física',
    whatWas: 'Ministrar aulas teóricas e práticas', 
    where: 'Colégio XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2016 - 2018',
    position: 'Treinador de Equipe Esportiva',
    whatWas: 'Elaboração de estratégias de treinamento e coordenação de jogos', 
    where: 'Clube de Esportes ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2019 - 2020',
    position: 'Coordenador de Educação Física',
    whatWas: 'Supervisão das atividades físicas e esportivas da escola', 
    where: 'Escola Particular XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2021 - Presente',
    position: 'Personal Trainer',
    whatWas: 'Treinamento individualizado e orientação de exercícios', 
    where: 'Academia Fitness',
    icon: Icons.Armchair,
  },
  {
    date: '2014 - 2016',
    position: 'Instrutor de Natação',
    whatWas: 'Ensino de técnicas de natação para crianças e adultos', 
    where: 'Clube Aquático ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2017 - 2019',
    position: 'Professor de Dança',
    whatWas: 'Ministrar aulas de dança em grupo', 
    where: 'Estúdio de Dança XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2018 - 2020',
    position: 'Preparador Físico',
    whatWas: 'Planejamento e execução de treinamentos para atletas profissionais', 
    where: 'Equipe Esportiva ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2011 - 2013',
    position: 'Instrutor de Pilates',
    whatWas: 'Aulas de pilates em grupo e acompanhamento individualizado', 
    where: 'Estúdio de Pilates XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2015 - 2017',
    position: 'Orientador de Atividades Recreativas',
    whatWas: 'Organização e supervisão de atividades esportivas e jogos recreativos', 
    where: 'Centro Recreativo ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2012 - 2014',
    position: 'Palestrante em Congresso de Educação Física',
    whatWas: 'Apresentação de palestra sobre tendências e inovações na área', 
    where: 'Centro de Convenções XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2016 - 2018',
    position: 'Especialização em Fisiologia do Exercício',
    whatWas: 'Estudo avançado sobre os efeitos do exercício no corpo humano', 
    where: 'Universidade ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2019',
    position: 'Instrutor de Yoga',
    whatWas: 'Aulas de yoga para melhorar a flexibilidade e bem-estar', 
    where: 'Estúdio de Yoga XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2020 - Presente',
    position: 'Consultor de Saúde e Bem-Estar',
    whatWas: 'Orientação sobre exercícios físicos e hábitos saudáveis', 
    where: 'Clínica de Saúde ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2013 - 2015',
    position: 'Treinador de Equipe Esportiva Juvenil',
    whatWas: 'Desenvolvimento de habilidades e estratégias para jovens atletas', 
    where: 'Clube de Esportes XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2016',
    position: 'Curso de Primeiros Socorros',
    whatWas: 'Aquisição de conhecimentos em atendimento emergencial', 
    where: 'Centro de Treinamento de Emergências',
    icon: Icons.Armchair,
  },
  {
    date: '2018 - 2019',
    position: 'Treinador de Equipe Universitária',
    whatWas: 'Preparação física e técnica de atletas universitários', 
    where: 'Universidade XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2020 - Presente',
    position: 'Organizador de Eventos Esportivos',
    whatWas: 'Planejamento e execução de competições esportivas', 
    where: 'Associação Esportiva ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2012 - 2014',
    position: 'Monitor de Academia',
    whatWas: 'Acompanhamento e orientação dos frequentadores da academia', 
    where: 'Academia Fitness XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2015 - 2017',
    position: 'Coordenador de Recreação em Acampamento',
    whatWas: 'Planejamento e supervisão de atividades recreativas para crianças', 
    where: 'Acampamento Aventura ABC',
    icon: Icons.Armchair,
  },
  {
    date: '2018',
    position: 'Participante do Simpósio de Educação Física',
    whatWas: 'Presença e participação em painéis e debates sobre o tema', 
    where: 'Centro de Convenções XYZ',
    icon: Icons.Armchair,
  },
  {
    date: '2019 - Presente',
    position: 'Instrutor de CrossFit',
    whatWas: 'Treinamento de alta intensidade e condicionamento físico', 
    where: 'Box de CrossFit ABC',
    icon: Icons.Armchair,
  }
];
;




export const aboutHim: AboutHimProps[] = [
  {paragraph: 'Olá, eu sou o Heitor Camilo, um Personal Trainer dedicado e comprometido em ajudar meus clientes a alcançarem seus objetivos de condicionamento físico e bem-estar. Com uma vasta experiência no campo do treinamento físico, estou aqui para oferecer a você um serviço personalizado e eficiente.'},
  {paragraph: 'Minha trajetória profissional é marcada por conhecimentos sólidos e especializações em diversas áreas. Uma delas é o CrossFit, um programa de treinamento de alta intensidade que combina diferentes modalidades e exercícios funcionais. Com minha experiência em CrossFit, posso proporcionar a você treinos desafiadores e eficazes, que ajudarão a melhorar sua resistência, força e condicionamento físico geral.'},
  {paragraph: 'Além do CrossFit, possuo ampla experiência em treinamento de musculação. Com minha abordagem personalizada, poderei desenvolver um programa de treinamento específico para você, visando o desenvolvimento de massa muscular, definição corporal e aumento de força. Trabalharemos juntos para alcançar seus objetivos, garantindo que você alcance resultados visíveis e duradouros.'},
  {paragraph: 'Minha formação em Reabilitação também me permite oferecer suporte a pessoas que estão se recuperando de lesões ou passando por processos de reabilitação. Compreendo a importância de um treinamento adequado e seguro durante esses períodos, adaptando os exercícios de acordo com suas necessidades individuais. Meu objetivo é ajudá-lo a recuperar sua condição física e retornar às atividades diárias com confiança e bem-estar.'},
  {paragraph: 'Além das especializações mencionadas, possuo pós-graduação em Personal Trainer, o que me permite ter uma compreensão aprofundada dos princípios do treinamento físico, fisiologia do exercício e nutrição. Essa formação avançada me capacita a oferecer um suporte abrangente e orientações precisas para otimizar seus resultados, seja em termos de perda de peso, ganho de massa muscular ou melhoria da saúde em geral.' },
  {paragraph: 'Estou constantemente me atualizando e me especializando para oferecer o melhor serviço aos meus clientes. Participar de cursos, workshops e conferências faz parte da minha rotina para garantir que estou atualizado com as últimas tendências e práticas do mundo do treinamento físico. Com meu compromisso com a excelência e a melhoria contínua, posso ajudar você a atingir seus objetivos de forma segura, eficiente e motivadora.'},
  {paragraph: 'Se você está procurando um Personal Trainer comprometido, experiente e sempre em busca de resultados, estou aqui para ajudá-lo. Vamos trabalhar juntos para transformar seus objetivos em realidade e alcançar uma vida mais saudável e ativa.'}
]

import img1 from '../assets/evo-1.jpg';
import img2 from '../assets/evo-2.jpeg';
import img3 from '../assets/evo3.webp';
import img4 from '../assets/evo4.jpg';
import img5 from '../assets/evo-5.webp';
import img6 from '../assets/evo-6.jpg'
;
interface evolutionsDataProps {
  img: string,
  instagram: string,
  link: string,
}

export const EvolutionsData: evolutionsDataProps[] = [
  {
    img: img1,
    instagram: '@felipeneto',
    link: 'https://www.instagram.com/felipeneto/?hl=pt'
  },
  {
    img: img2,
    instagram: '@munhoz_frango',
    link: 'https://www.instagram.com/munhoz_frango/'
  },
  {
    img: img3,
    instagram: '@jaquekhury',
    link: 'https://www.instagram.com/jaquekhury/reels/'
  },
  {
    img: img4,
    instagram: '@thocostaoficial',
    link: 'https://www.instagram.com/thocostaoficial/'
  },
  {
    img: img5,
    instagram: '@melissamelmaia',
    link: 'https://www.instagram.com/melissamelmaia/'
  },
  {
    img: img6,
    instagram: '@lucasneto',
    link: 'https://www.instagram.com/heitorcamilo.personal/'
  },

]

