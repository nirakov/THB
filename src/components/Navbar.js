import React from 'react';
import logo from '../assets/heatbox.png';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center items-center py-4 px-6 bg-transparent z-10">
      {/* Logotipo centralizado com animação ao passar o mouse */}
      <img 
        src={logo} 
        alt="Logo The Heart Box" 
        className="h-12 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
      />
    </nav>
  );
}

export default Navbar;
