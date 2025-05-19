import React from 'react';
import { useParams } from 'react-router-dom';

const featureDetails = {
  sensor: {
    title: 'Sensores Fisiológicos',
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
  }
};

function FeatureDetail() {
  const { id } = useParams();
  const content = featureDetails[id];

  if (!content) return <p className="text-center mt-20 text-xl">Recurso não encontrado.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-10">
      <h1 className="text-4xl font-bold text-[#24284B] mb-6 text-center">{content.title}</h1>
      <p className="text-lg text-gray-700 max-w-3xl text-center">{content.text}</p>
    </div>
  );
}

export default FeatureDetail;
