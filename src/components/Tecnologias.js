import React, { useState } from 'react';

// Importe os ícones das tecnologias (ajuste os caminhos conforme seu projeto)
import reactIcon from '../assets/react.png';
import nodeRedIcon from '../assets/node.png'; 
import esp32Icon from '../assets/esp32.png';
import influxdbIcon from '../assets/influxdb.png';
import grafanaIcon from '../assets/grafana.png';
import bleIcon from '../assets/bluetooth.png';
import kotlinIcon from '../assets/kotlin.png';
import mosquittoIcon from '../assets/mosquitto.png';
import dockerIcon from '../assets/docker.png';
import azureIcon from '../assets/azure.png';

function Technologies() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    {
      id: 'react',
      icon: reactIcon,
      label: 'React',
      description: 'Framework JavaScript para construção de interfaces de usuário dinâmicas e reativas.'
    },
    {
      id: 'node-red',
      icon: nodeRedIcon,
      label: 'Node-RED',
      description: 'Plataforma de desenvolvimento baseada em fluxo para integração de hardware, APIs e serviços online. No projeto, é usada para processar, transformar e encaminhar dados fisiológicos recebidos dos sensores para o banco de dados e dashboards.'
    },
    {
      id: 'esp32',
      icon: esp32Icon,
      label: 'ESP32',
      description: 'Microcontrolador utilizado para leitura dos sensores fisiológicos e comunicação BLE/Wi-Fi.'
    },
    {
      id: 'influxdb',
      icon: influxdbIcon,
      label: 'InfluxDB',
      description: 'Banco de dados de séries temporais para armazenamento eficiente dos dados fisiológicos.'
    },
    {
      id: 'grafana',
      icon: grafanaIcon,
      label: 'Grafana',
      description: 'Ferramenta de visualização de dados utilizada para dashboards em tempo real.'
    },
    {
      id: 'ble',
      icon: bleIcon,
      label: 'Bluetooth Low Energy',
      description: 'Tecnologia de comunicação sem fio de baixo consumo para transmissão dos dados dos sensores.'
    },
    {
      id: 'kotlin',
      icon: kotlinIcon,
      label: 'Kotlin',
      description: 'Linguagem utilizada no desenvolvimento do aplicativo Android, com Jetpack Compose para interfaces modernas e reativas.'
    },
    {
      id: 'mosquitto',
      icon: mosquittoIcon,
      label: 'Mosquitto (MQTT)',
      description: 'Broker MQTT utilizado para envio eficiente e em tempo real dos dados fisiológicos do app para o backend na nuvem.'
    },
    {
      id: 'docker',
      icon: dockerIcon,
      label: 'Docker',
      description: 'Plataforma de containers utilizada para facilitar o deploy, escalabilidade e gerenciamento dos serviços do backend.'
    },
    {
      id: 'azure',
      icon: azureIcon,
      label: 'Cloud Azure',
      description: 'Infraestrutura em nuvem utilizada para hospedar a solução, garantindo disponibilidade, segurança e escalabilidade.'
    }
  ];

  return (
    <section
      id="technologies"
      className="pt-32 pb-32 px-4 text-center flex flex-col items-center"
      style={{ background: 'linear-gradient(to bottom, #EAE4F2, #F2F2F2)' }}
    >
      <h2 className="text-4xl font-bold text-[#24284B] mb-12">Tecnologias</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl w-full">
        {technologies.slice(0, 5).map((item, idx) => (
          <div
            key={item.id}
            className="w-44 h-44 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-[#EAE4F2] cursor-pointer relative mx-auto"
            onMouseEnter={() => setHoveredTech(idx)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {hoveredTech === idx && (
              <div className="absolute z-50 bottom-44 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg shadow-xl text-sm text-gray-700">
                <img src={item.icon} alt="" className="w-12 h-12 mx-auto mb-2" />
                <p className="font-bold text-[#24284B] mb-1">{item.label}</p>
                <p>{item.description}</p>
              </div>
            )}
            <img src={item.icon} alt={item.label} className="w-16 mb-2" />
            <p className="text-base font-semibold text-[#24284B]">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl w-full mt-8">
        {technologies.slice(5, 10).map((item, idx) => (
          <div
            key={item.id}
            className="w-44 h-44 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-[#EAE4F2] cursor-pointer relative mx-auto"
            onMouseEnter={() => setHoveredTech(idx + 5)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {hoveredTech === idx + 5 && (
              <div className="absolute z-50 bottom-44 left-1/2 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg shadow-xl text-sm text-gray-700">
                <img src={item.icon} alt="" className="w-12 h-12 mx-auto mb-2" />
                <p className="font-bold text-[#24284B] mb-1">{item.label}</p>
                <p>{item.description}</p>
              </div>
            )}
            <img src={item.icon} alt={item.label} className="w-16 mb-2" />
            <p className="text-base font-semibold text-[#24284B]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;