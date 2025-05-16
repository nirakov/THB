import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [text, setText] = useState('');
  const subtitle = "Transforme a sua bicicleta numa smart bike.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < subtitle.length) {
        setText(subtitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80); // velocidade mais rápida para o efeito de digitação

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-b from-[#7451A6] to-[#EAE4F2] pt-10 px-6 md:px-20 flex items-center min-h-[60vh] transition-transform duration-300 ease-in-out">
      <div className="max-w-2xl text-left">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          The Heart Box
        </h1>
        <h2 className="text-2xl md:text-4xl text-[#E8E0F0] mt-4 shadow-none transition-opacity duration-500 ease-in-out">
          {text}
        </h2>
        <p className="text-lg md:text-xl text-[#F2F2F2] mt-4 max-w-lg">
          O The Heart Box é um sistema modular que monitora a saúde e o desempenho dos ciclistas em tempo real, oferecendo dados essenciais para um treino seguro e eficiente.
        </p>
        <Link 
          to="/saiba-mais"
          className="inline-block mt-6 py-3 px-6 bg-[#68B9AD] text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:bg-[#7451A6] hover:scale-105"
        >
          Saiba Mais
        </Link>
      </div>
    </header>
  );
}

export default Header;
