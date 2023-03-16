export const Links = [
  { name: 'HOME', src: '/' },
  { name: 'SOBRE', src: '/sobre' },
  { name: 'CONSULTORIA', src: '/consultancy' },
  { name: 'CONTATO', src: '/contact' },
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


export const experienceData: Experience[] = [
  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },
  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },

  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },

  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },

  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },

  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },

  {
    date: '2013 - 2014',
    position: 'Reabilitaçao e recreaçao',
    whatWas: 'Personal trainer', 
    where: 'Pontec',
    icon: Icons.Armchair,
  },



];