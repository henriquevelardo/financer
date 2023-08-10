import React, { useState } from 'react';
import Nav from "../Nav";

export default function MenuHamburguer() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const ativaMenu = () => {
    setMenuAtivo(!menuAtivo)

  }
 
  return (
    <>
      <img
        src="../../assets/menu.svg"
        alt="símbolo menu hamburguer"
        onClick={ativaMenu}
      />
      <Nav menu={menuAtivo}/>
    </>
  );
}
