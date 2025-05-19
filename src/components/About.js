import React from 'react';
import imagemMix from '../assets/imagemmix.png';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="pt-20 pb-20 px-10 md:px-20 bg-[#F2F2F2] flex flex-col md:flex-row items-center md:items-start">
      <div className="w-full md:w-1/2 md:pr-10" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#24284B] mb-6">Objetivo</h2>
        <div className="w-24 h-1 bg-[#7451A6] mb-8"></div> {/* Linha abaixo do título */}

        <p className="text-lg text-[#68B9AD] leading-relaxed mb-4">
          O <span className="font-semibold">The Heart Box</span> oferece aos ciclistas a possibilidade de transformar a sua bicicleta numa plataforma inteligente, proporcionando feedback em tempo útil sobre frequência cardíaca e condicionamento físico.
        </p>
        
        <p className="text-lg text-[#68B9AD] leading-relaxed mb-4">
          Com a combinação de sensores, câmera e integração com smartwatch, os dados recolhidos ajudam a ajustar a intensidade do treino, identificar melhorias e aumentar a segurança. Seja para ciclistas amadores ou atletas profissionais, o <span className="font-semibold">The Heart Box</span> é uma solução prática e acessível.
        </p>

        <p className="text-lg text-[#68B9AD] leading-relaxed">
          Unindo tecnologia e desporto, promove uma experiência de ciclismo mais saudável e eficiente, conectando o usuário com dados essenciais para uma prática mais segura e otimizada.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/implementacao">
            <button className="py-3 px-6 bg-[#68B9AD] text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:bg-[#7451A6] hover:scale-105">
              Implementação
            </button>
          </Link>

          <Link to="/tecnologias">
            <button className="py-3 px-6 bg-[#7451A6] text-white font-semibold rounded-full shadow-lg transition-transform duration-300 hover:bg-[#68B9AD] hover:scale-105">
              Tecnologias
            </button>
          </Link>
        </div>
      </div>


      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img 
          src={imagemMix} 
          alt="Ilustração do The Heart Box" 
          className="max-w-sm"
        />
      </div>

    </section>
  );
}

export default About;
