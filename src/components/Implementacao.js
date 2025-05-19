// src/components/Implementacao.js
import React from 'react';
import implementacaoImage from '../assets/implementacao.png'; // substitua pelo caminho correto da sua imagem

function Implementacao() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-[#24284B] mb-4">Implementação</h1>
      <img 
        src={implementacaoImage} 
        alt="Diagrama da implementação" 
        className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Implementacao;
