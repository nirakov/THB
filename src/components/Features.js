import React from 'react';
import ecgIcon from '../assets/ecg.png';
import smartwatchIcon from '../assets/smartwatch.png';
import cameraIcon from '../assets/camera.png';
import bicycleIcon from '../assets/bicycle.svg';
import dashboardIcon from '../assets/dashboard.svg';
import heartRateIcon from '../assets/heartRate.svg';

function Features() {
  const features = [
    { icon: ecgIcon, label: "Sensores Fisiológicos" },
    { icon: smartwatchIcon, label: "Smartwatch" },
    { icon: cameraIcon, label: "Câmara" },
    { icon: bicycleIcon, label: "Profissionais e Amadores" },
    { icon: dashboardIcon, label: "Dashboard" },
    { icon: heartRateIcon, label: "Batimentos Cardíacos" }
  ];

  return (
    <section 
      id="features" 
      className="pt-5 px-4 text-center flex justify-center"
      style={{
        background: 'linear-gradient(to bottom, #EAE4F2, #F2F2F2)' // Fundo com gradiente de lilás para cinza claro
      }}
    >
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {features.map((item, idx) => (
          <div 
            key={idx} 
            className="w-28 h-28 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-[#EAE4F2]"
          >
            <img src={item.icon} alt={item.label} className="w-10 mb-1" />
            <p className="text-xs font-semibold text-[#24284B]">{item.label}</p> {/* Texto em branco para contraste */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
