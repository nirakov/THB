import React from 'react';
import uaLogo from '../assets/deti_vertical_branco.png'; // Caminho da nova logo

function Footer() {
  return (
    <footer 
      className="bg-[#CBB9E5] text-[#24284B] py-12 px-6 md:px-20"
      style={{
        background: 'linear-gradient(to bottom, #CBB9E5, #7451A6)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Logo da Universidade de Aveiro centralizada */}
        <div className="flex flex-col items-center space-y-4">
          <img src={uaLogo} alt="Logo DETI Universidade de Aveiro" className="h-16 md:h-20" />
        </div>

        {/* Descrição curta */}
        <div className="text-xs text-center">
          O <span className="font-semibold">The Heart Box</span> é um projeto desenvolvido pelo Grupo 13 para o Projeto em Engenharia de Computadores e Informática (Licenciatura em Engenharia de Computadores e Informática), Universidade de Aveiro.
        </div>
        
      </div>

      {/* Linha de separação */}
      <div className="border-t border-[#EAE4F2] mt-6"></div>

      {/* Créditos de ícones */}
      <div className="mt-6 text-xs text-center">
        Ícones por <a href="https://www.flaticon.com/free-icons/" className="underline text-[#68B9AD] hover:text-[#24284B]" target="_blank" rel="noopener noreferrer">Freepik - Flaticon</a>
      </div>
    </footer>
  );
}

export default Footer;
