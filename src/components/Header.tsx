import { useState } from "react"

import { List, X } from 'phosphor-react';
import { Links } from "./Contents";

import logo from '../assets/logoH.png';

import { NavLink } from 'react-router-dom'


export function Header() {
  const [open, setOpen] = useState(false);

  let activeStyle = {
    color: "rgb(253 224 71)",
  };

  return (
    <div className={`w-screen md:flex-row flex-col flex md:justify-between justify-start py-12 md:px-32 px-8 `}>
      <div className="flex justify-between">
        <a href="/" className=" z-10">
          <img src={logo} className="text-white md:h-36 h-20 flex self-center" />
        </a>

        <button className="md:hidden flex self-center z-10">
          {!open &&
            <List
              className="text-3xl text-white"
              onClick={() => setOpen(!open)}
            />}

          {open &&
            <X
              className="text-3xl text-white"
              onClick={() => setOpen(!open)}
            />}
        </button>
      </div>


      <ul className={`md:space-x-8 space-x-0 mt-6 md:mt-0 space-y-2 md:space-y-0 flex md:self-center self-start md:flex md:flex-row flex-col z-10 ${!open ? 'hidden' : 'flex'} `}>
        {Links.map((items) => {
          return (
            <li key={items.name} className="text-white text-lg font-bold">
              <NavLink  
                to={items.src}  
                className="hover:text-yellow-300 duration-300"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
              > 
                {items.name} 
              </NavLink>
            </li>
          )
        })}
      </ul>

    </div>
  )
}