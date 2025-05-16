import React from 'react';
import caroline from '../assets/caroline.png';
import joao from '../assets/joao.png';
import julia from '../assets/julia.png';
import mateus from '../assets/mateus.png';
import nicole from '../assets/nicole.png';
import theo from '../assets/theo.png';

function Team() {
  const teamMembers = [
    { name: 'Caroline Ribeiro', img: caroline },
    { name: 'João Rodrigues', img: joao },
    { name: 'Júlia Abrantes', img: julia },
    { name: 'Mateus da Fonte', img: mateus },
    { name: 'Nicole Rakov', img: nicole },
    { name: 'Theo Paschôa', img: theo }
  ];

  return (
    <section 
      id="team" 
      className="pt-20 pb-20 px-10 md:px-20" 
      style={{ background: 'linear-gradient(to bottom, #F2F2F2, #CBB9E5)' }}
    >
      <div className="text-left">
        <h2 className="text-4xl font-bold text-[#24284B] relative inline-block">
          Equipa
          {/* Linha animada */}
          <span className="block w-full h-1 bg-[#7451A6] mt-2 mx-auto transition-all duration-300 ease-in-out transform hover:w-3/4"></span>
        </h2>
      </div>
      
      <div className="flex flex-wrap gap-5 mt-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="w-40 md:w-48 text-center">
            <a 
              href={`mailto:${member.name.split(' ')[0].toLowerCase()}@ua.pt`} 
              className="group transition-transform transform hover:scale-110 hover:rotate-3 duration-300"
            >
              <img 
                src={member.img} 
                alt={`Fotografia de ${member.name}`} 
                className="w-32 h-32 rounded-full mx-auto shadow-md group-hover:shadow-lg group-hover:shadow-[#7451A6] transition-shadow duration-300" 
              />
            </a>
            <p className="mt-4 text-xl font-semibold text-[#24284B]">{member.name}</p>
          </div>
        ))}
      </div>
      
      {/* Orientador */}
      <p className="mt-12 text-lg text-[#7451A6] text-left">
        Orientador: <a href="https://www.ua.pt/pt/p/10319434" target="_blank" rel="noopener noreferrer" className="text-[#68B9AD] underline hover:text-[#24284B]">José Maria Amaral Fernandes</a>
      </p>
    </section>
  );
}

export default Team;
