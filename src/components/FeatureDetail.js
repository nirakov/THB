import React from 'react';
import { useParams } from 'react-router-dom';

import illustrationSensor from '../assets/illustration-sensor.png';
import illustrationSmartwatch from '../assets/illustration-watch.png';
import illustrationCamera from '../assets/illustration-camera.png';
import illustrationUsers from '../assets/illustration-bike.png';
import illustrationDashboard from '../assets/illustration-dashboard.png';
import illustrationBpm from '../assets/illustration-bpm.png';

const featureDetails = {
  sensor: {
    title: 'Sensores Fisiológicos',
    text: `Utilizamos sensores de fotopletismografia (PPG) conectados ao ESP32, responsáveis por medir a frequência cardíaca em tempo real e transmitir via BLE.
Esses sensores oferecem alta precisão e permitem o acompanhamento contínuo do desempenho durante o treino. Os dados coletados podem ser integrados a plataformas de saúde, possibilitando análises históricas e personalizadas para cada usuário.`,
    image: illustrationSensor
  },
  smartwatch: {
    title: 'Smartwatch',
    text: `O sistema suporta smartwatches compatíveis como alternativa de leitura dos BPM, com integração futura prevista.
Além da praticidade, os smartwatches permitem o monitoramento remoto, sincronização automática dos dados e integração com outros aplicativos de saúde, tornando o acompanhamento ainda mais completo.`,
    image: illustrationSmartwatch
  },
  camera: {
    title: 'Câmara Térmica',
    text: `A câmera térmica MLX90640 detecta variações de temperatura facial e permite inferir esforço ou respiração.
Essa tecnologia auxilia na prevenção de exaustão térmica, fornecendo alertas em tempo real e relatórios detalhados sobre a resposta térmica do corpo durante o exercício.`,
    image: illustrationCamera
  },
  users: {
    title: 'Utilizadores',
    text: `O sistema foi desenhado para atender tanto atletas profissionais quanto iniciantes, com adaptação automática do perfil e zonas.
É possível utilizar em treinos individuais, aulas coletivas ou ambientes domésticos, com acompanhamento personalizado e feedback em tempo real para cada usuário.`,
    image: illustrationUsers
  },
  dashboard: {
    title: 'Dashboard',
    text: `Visualize os dados em tempo real em dashboards dinâmicos no Grafana, conectados ao InfluxDB.
Os painéis são interativos e personalizáveis, permitindo a visualização de métricas como frequência cardíaca, zonas de esforço, temperatura e desempenho ao longo do tempo.`,
    image: illustrationDashboard
  },
  bpm: {
    title: 'Batimentos Cardíacos',
    text: `A FC (frequência cardíaca) é exibida no app Android, associada a zonas de esforço com base em idade e perfil do utilizador.
O cálculo dos batimentos por minuto é feito de forma contínua, incluindo análise de variabilidade, detecção de anomalias e recomendações automáticas para otimizar o desempenho.`,
    image: illustrationBpm
  }
};

function FeatureDetail() {
  const { id } = useParams();
  const content = featureDetails[id];

  if (!content) return <p className="text-center mt-20 text-xl">Recurso não encontrado.</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-[#24284B] mb-4">{content.title}</h1>
        <p className="text-lg text-gray-700 whitespace-pre-line">{content.text}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={content.image}
          alt={`Ilustração de ${content.title}`}
          className="max-w-xs w-full rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
}

export default FeatureDetail;