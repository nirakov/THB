import React, { useState } from 'react';
import caroline from '../assets/caroline.png';
import joao from '../assets/joao.png';
import julia from '../assets/julia.png';
import mateus from '../assets/mateus.png';
import nicole from '../assets/nicole.png';
import theo from '../assets/theo.png';

const teamMembers = [
  {
    name: 'Caroline Ribeiro',
    img: caroline,
    email: 'caroline.ribeiro@ua.pt',
    linkedin: 'https://www.linkedin.com/in/caroline-ribeiro10'
  },
  {
    name: 'João Rodrigues',
    img: joao,
    email: 'joaomrodrigues@ua.pt',
    linkedin: 'https://www.linkedin.com'
  },
  {
    name: 'Júlia Abrantes',
    img: julia,
    email: 'julia.abrantes@ua.pt',
    linkedin: 'https://www.linkedin.com/in/juliaabrantes'
  },
  {
    name: 'Mateus da Fonte',
    img: mateus,
    email: 'mateus.fonte@ua.pt',
    linkedin: 'https://www.linkedin.com/in/mateus-da-fonte'
  },
  {
    name: 'Nicole Rakov',
    img: nicole,
    email: 'nicolemrakov@ua.pt',
    linkedin: 'https://www.linkedin.com'
  },
  {
    name: 'Theo Paschôa',
    img: theo,
    email: 'theo.paschoa@ua.pt',
    linkedin: 'https://www.linkedin.com'
  }
];

function Team() {
  const [modalMember, setModalMember] = useState(null);

  return (
    <section 
      id="team" 
      className="pt-20 pb-20 px-10 md:px-20" 
      style={{ background: 'linear-gradient(to bottom, #F2F2F2, #CBB9E5)' }}
    >
      <div className="text-left">
        <h2 className="text-4xl font-bold text-[#24284B] relative inline-block">
          Equipa
          <span className="block w-full h-1 bg-[#7451A6] mt-2 mx-auto transition-all duration-300 ease-in-out transform hover:w-3/4"></span>
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-5 mt-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="w-40 md:w-48 text-center">
            <div className="group relative block transition-transform transform hover:scale-110 hover:rotate-3 duration-300 cursor-pointer">
              <img 
                src={member.img} 
                alt={`Fotografia de ${member.name}`} 
                className="w-32 h-32 rounded-full mx-auto shadow-md group-hover:shadow-lg group-hover:shadow-[#7451A6] transition-shadow duration-300" 
              />
              <span
                className="absolute inset-0 flex items-center justify-center bg-[#7451A6]/80 text-white text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer"
                onClick={() => setModalMember(member)}
              >
                Entrar em contacto
              </span>
            </div>
            <p className="mt-4 text-xl font-semibold text-[#24284B]">{member.name}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-[#7451A6] text-2xl"
              onClick={() => setModalMember(null)}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img
              src={modalMember.img}
              alt={`Fotografia de ${modalMember.name}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-[#24284B]">{modalMember.name}</h3>
            <div className="mb-2">
              <a
                href={`mailto:${modalMember.email}`}
                className="block text-[#7451A6] underline hover:text-[#24284B] mb-2"
              >
                {modalMember.email}
              </a>
              <a
                href={modalMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#68B9AD] underline hover:text-[#24284B]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
      
      {/* Orientador */}
      <p className="mt-12 text-lg text-[#7451A6] text-left">
        Orientador: <a href="https://www.ua.pt/pt/p/10319434" target="_blank" rel="noopener noreferrer" className="text-[#68B9AD] underline hover:text-[#24284B]">José Maria Amaral Fernandes</a>
      </p>
    </section>
  );
}

export default Team;