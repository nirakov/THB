import React from 'react';
import logo from '../assets/heatbox.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center py-4 px-6 bg-transparent z-10">
      {/* Logotipo centralizado com animação ao passar o mouse */}
      <Link to="/" className="inline-block">
        <img
          src={logo}
          alt="Voltar para a página inicial"
          className="h-10 w-auto cursor-pointer"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
