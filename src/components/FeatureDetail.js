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
<<<<<<< HEAD
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
    title: 'Usuários',
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
=======
    text: `Os sensores de fotopletismografia (PPG) integrados ao ESP32 realizam o monitoramento contínuo da frequência cardíaca do usuário, capturando dados em tempo real com alta precisão. Esses sensores são essenciais para o acompanhamento fisiológico durante atividades físicas, permitindo detectar variações instantâneas nos batimentos cardíacos. A transmissão dos dados ocorre via Bluetooth Low Energy (BLE), garantindo baixo consumo de energia e comunicação eficiente com o aplicativo. O sistema foi projetado para oferecer confiabilidade e robustez, mesmo em ambientes de uso intenso, tornando-se uma solução ideal para atletas e entusiastas do esporte que buscam um monitoramento detalhado de sua saúde cardiovascular.`
  },
  smartwatch: {
    title: 'Smartwatch',
    text: `A integração com smartwatches compatíveis expande as possibilidades de monitoramento, permitindo a leitura dos batimentos cardíacos (BPM) diretamente do pulso do usuário. Essa funcionalidade, prevista para futuras atualizações, proporcionará maior flexibilidade e comodidade, já que o usuário poderá escolher entre diferentes dispositivos para acompanhar seus dados fisiológicos. Além disso, a integração com smartwatches abre caminho para o registro de outras métricas, como passos, calorias gastas e qualidade do sono, tornando o sistema ainda mais completo e adaptável às necessidades individuais.`
  },
  camera: {
    title: 'Câmara Térmica',
    text: `A câmara térmica MLX90640 é utilizada para detectar variações de temperatura na região facial do usuário, permitindo a análise de padrões de esforço físico e respiração. Essa tecnologia inovadora possibilita identificar sinais de fadiga, estresse térmico e alterações no padrão respiratório, complementando o monitoramento realizado pelos sensores tradicionais. Os dados térmicos são processados em tempo real e integrados ao sistema, oferecendo uma visão abrangente do estado fisiológico do usuário durante treinos ou competições.`
  },
  users: {
    title: 'Usuários',
    text: `O sistema foi desenvolvido para atender a um público diversificado, desde atletas profissionais até iniciantes. Por meio de algoritmos inteligentes, o perfil do usuário é ajustado automaticamente, adaptando zonas de esforço, metas e recomendações de acordo com o nível de experiência e condicionamento físico. Essa personalização garante que cada usuário receba orientações adequadas ao seu contexto, promovendo segurança, evolução contínua e maior engajamento com a plataforma.`
  },
  dashboard: {
    title: 'Dashboard',
    text: `Os dados coletados pelos sensores e dispositivos são apresentados em dashboards dinâmicos e interativos, desenvolvidos no Grafana e integrados ao banco de dados InfluxDB. As visualizações são intuitivas e personalizáveis, permitindo ao usuário acompanhar seu desempenho em tempo real, analisar tendências históricas e identificar pontos de melhoria. O dashboard facilita a tomada de decisões e o acompanhamento do progresso, tornando a experiência de monitoramento mais completa e eficiente.`
  },
  bpm: {
     title: 'Batimentos Cardíacos',
    text: `A frequência cardíaca (FC) é exibida de forma clara e detalhada no aplicativo Android, sendo associada a zonas de esforço calculadas com base na idade, perfil e objetivos do usuário. Essa abordagem permite um acompanhamento preciso da intensidade do treino, ajudando a evitar excessos e a otimizar os resultados. O histórico de batimentos cardíacos pode ser consultado a qualquer momento, possibilitando a análise da evolução ao longo do tempo e a identificação de padrões relevantes para a saúde e o desempenho físico.`
>>>>>>> db835c408c136b5aff0bdc5d0938883647a2b4a7
  }
};

function FeatureDetail() {
  const { id } = useParams();
  const content = featureDetails[id];

  if (!content) return <p className="text-center mt-20 text-xl">Recurso não encontrado.</p>;

  return (
<<<<<<< HEAD
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
=======
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10">
      <h1 className="text-4xl font-bold text-[#24284B] mb-6 text-center">{content.title}</h1>
      <p className="text-lg text-gray-700 max-w-3xl text-center">{content.text}</p>
>>>>>>> db835c408c136b5aff0bdc5d0938883647a2b4a7
    </div>
  );
}

export default FeatureDetail;