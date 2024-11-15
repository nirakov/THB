import React from 'react';
import teamMemberImage from '../assets/team-member.png';

function Team() {
  const teamMembers = [
    'Caroline Ribeiro', 
    'João Rodrigues', 
    'Júlia Abrantes', 
    'Mateus da Fonte', 
    'Nicole Rakov', 
    'Theo Paschôa'
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
        {teamMembers.map((name, idx) => (
          <div key={idx} className="w-40 md:w-48 text-center">
            <a 
              href={`mailto:${name.split(' ')[0].toLowerCase()}@ua.pt`} 
              className="group transition-transform transform hover:scale-110 hover:rotate-3 duration-300"
            >
              <img 
                src={teamMemberImage} 
                alt={`Fotografia de ${name}`} 
                className="w-32 h-32 rounded-full mx-auto shadow-md group-hover:shadow-lg group-hover:shadow-[#7451A6] transition-shadow duration-300" 
              />
            </a>
            <p className="mt-4 text-xl font-semibold text-[#24284B]">{name}</p>
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
