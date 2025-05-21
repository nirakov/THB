import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ecgIcon from '../assets/ecg.png';
import smartwatchIcon from '../assets/smartwatch.png';
import cameraIcon from '../assets/camera.png';
import bicycleIcon from '../assets/bicycle.svg';
import dashboardIcon from '../assets/dashboard.svg';
import heartRateIcon from '../assets/heartRate.svg';
import cellphoneIcon from '../assets/iphone.png'; // adicione esta linha

function Features() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const navigate = useNavigate();

  const features = [
    // Box explicativa da aplicação
    {
      id: 'app',
      icon: cellphoneIcon,
      label: 'Aplicação',
      description:
        'A aplicação integra sensores fisiológicos, smartwatches e câmaras térmicas para monitorar em tempo real a saúde e o desempenho físico.',
    },
    {
      id: 'sensor',
      icon: ecgIcon,
      label: 'Sensores Fisiológicos',
      description: 'Sensores PPG conectados ao ESP32, utilizados para medir batimentos cardíacos em tempo real via BLE.'
    },
    {
      id: 'smartwatch',
      icon: smartwatchIcon,
      label: 'Smartwatch',
      description: 'Alternativa de leitura da frequência cardíaca através de relógios inteligentes compatíveis.'
    },
    {
      id: 'camera',
      icon: cameraIcon,
      label: 'Câmera',
      description: 'Câmera térmica MLX90640 conectada via Wi-Fi que detecta a temperatura facial durante o treino.'
    },
    {
      id: 'users',
      icon: bicycleIcon,
      label: 'Profissionais e Amadores',
      description: 'Utilização em treinos domésticos ou aulas coletivas com múltiplos utilizadores conectados.'
    },
    {
      id: 'dashboard',
      icon: dashboardIcon,
      label: 'Dashboard',
      description: 'Painéis interativos em tempo real com dados de frequência cardíaca, zonas e temperatura.'
    },
    {
      id: 'bpm',
      icon: heartRateIcon,
      label: 'Batimentos Cardíacos',
      description: 'Cálculo e exibição contínua dos BPM com base nos sensores conectados.'
    }
  ];

  return (
    <section id="features" className="pt-5 px-4 text-center flex justify-center"
      style={{ background: 'linear-gradient(to bottom, #EAE4F2, #F2F2F2)' }}>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl relative">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="w-28 h-28 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-[#EAE4F2] cursor-pointer relative"
            onClick={() => !item.isAbout && navigate(`/feature/${item.id}`)}
            onMouseEnter={() => setHoveredFeature(idx)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            {hoveredFeature === idx && (
              <div className="absolute z-50 bottom-36 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg shadow-xl text-sm text-gray-700">
                <img src={item.icon} alt="" className="w-12 h-12 mx-auto mb-2" />
                <p className="font-bold text-[#24284B] mb-1">{item.label}</p>
                <p>{item.description}</p>
              </div>
            )}
            <img src={item.icon} alt={item.label} className="w-10 mb-1" />
            <p className="text-xs font-semibold text-[#24284B]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;