import React from 'react';
import { useParams } from 'react-router-dom';

const featureDetails = {
  sensor: {
    title: 'Sensores Fisiológicos',
    text: 'Utilizamos sensores de fotopletismografia (PPG) conectados ao ESP32, responsáveis por medir a frequência cardíaca em tempo real e transmitir via BLE.'
  },
  smartwatch: {
    title: 'Smartwatch',
    text: 'O sistema suporta smartwatches compatíveis como alternativa de leitura dos BPM, com integração futura prevista.'
  },
  camera: {
    title: 'Câmara Térmica',
    text: 'A câmera térmica MLX90640 detecta variações de temperatura facial e permite inferir esforço ou respiração.'
  },
  users: {
    title: 'Usuários',
    text: 'O sistema foi desenhado para atender tanto atletas profissionais quanto iniciantes, com adaptação automática do perfil e zonas.'
  },
  dashboard: {
    title: 'Dashboard',
    text: 'Visualize os dados em tempo real em dashboards dinâmicos no Grafana, conectados ao InfluxDB.'
  },
  bpm: {
    title: 'Batimentos Cardíacos',
    text: 'A FC é exibida no app Android, associada a zonas de esforço com base em idade e perfil do utilizador.'
  }
};

function FeatureDetail() {
  const { id } = useParams();
  const content = featureDetails[id];

  if (!content) return <p>Recurso não encontrado.</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-[#24284B] mb-4">{content.title}</h1>
      <p className="text-lg text-gray-700">{content.text}</p>
    </div>
  );
}

export default FeatureDetail;
