import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import illustrationSensor from '../assets/illustration-sensor.png';
import illustrationSmartwatch from '../assets/illustration-watch.png';
import illustrationCamera from '../assets/illustration-camera.png';
import illustrationUsers from '../assets/illustration-bike.png';
import illustrationDashboard from '../assets/illustration-dashboard.png';
import illustrationBpm from '../assets/illustration-bpm.png';
//import cellphoneIcon from '../assets/iphone.png';

import appVideo1 from '../assets/app1.mp4';
import appVideo2 from '../assets/app2.mp4';
import appVideo3 from '../assets/app3.mp4';

const appVideos = [appVideo1, appVideo2, appVideo3];

const featureDetails = {
  app: {
    title: 'Aplicação',
    text: `A aplicação centraliza a visualização dos dados fisiológicos coletados pelos sensores, smartwatches e câmaras térmicas. Ela permite o acompanhamento em tempo real do desempenho físico, exibe alertas personalizados, zonas de esforço, relatórios históricos e integra-se com dashboards interativos. O design é intuitivo, adaptado tanto para profissionais quanto para amadores, e pode ser acessado em dispositivos móveis ou desktops.`,
  },
  sensor: {
    title: 'Sensores Fisiológicos',
    text: `Utilizamos sensores de fotopletismografia (PPG) conectados ao ESP32, responsáveis por medir a frequência cardíaca em tempo real e transmitir via BLE.
Esses sensores oferecem alta precisão e permitem o acompanhamento contínuo do desempenho durante o treino. Os dados coletados podem ser integrados a plataformas de saúde, possibilitando análises históricas e personalizadas para cada usuário.`,
    references: [
      {
        title: "Monitor Heart Rate using Pulse Sensor and ESP32",
        description: "Projeto que utiliza sensor PPG e ESP32 para monitoramento cardíaco acessível, inspirando a arquitetura de hardware do The Heart Box.",
      },
      {
        title: "Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate",
        description: "Trabalho que combina sensores de movimento e frequência cardíaca para avaliação precisa do esforço físico, base para a integração de múltiplas métricas no sistema.",
      }
    ],
    image: illustrationSensor,
    bibliografia: [
      "Monitor Heart Rate using Pulse Sensor and ESP32 - Microcontrollers Lab, [Online]. Available: https://microcontrollerslab.com/pulse-sensor-esp32-tutorial/.",
      "P. S. Freedson e K. Miller, «Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate», Res Q Exerc Sport, vol. 71, n. sup2, pp. 21–29, Jun. 2000, doi: 10.1080/02701367.2000.11082782."
    ]
  },
  smartwatch: {
    title: 'Smartwatch',
    text: `O sistema suporta smartwatches compatíveis como alternativa de leitura dos BPM, com integração futura prevista.
Além da praticidade, os smartwatches permitem o monitoramento remoto, sincronização automática dos dados e integração com outros aplicativos de saúde, tornando o acompanhamento ainda mais completo.`,
    references: [
      {
        title: "Assessment of Samsung Galaxy Watch4 PPG-Based Heart Rate During Light-to-Vigorous Physical Activities",
        description: "Estudo que valida a precisão de smartwatches comerciais na medição da frequência cardíaca, reforçando a flexibilidade do The Heart Box.",
      }
    ],
    image: illustrationSmartwatch,
    bibliografia: [
      "Samsung Galaxy Watch4 - C. S. Lima, F. C. Bertocco, J. I. V. de Oliveira, T. M. F. de Souza, E. P. da Silva, e F. J. Von Zuben, «Assessment of Samsung Galaxy Watch4 PPG-Based Heart Rate During Light-to-Vigorous Physical Activities», IEEE Sens Lett, vol. 8, n. 7, pp. 1–4, Jul. 2024, doi: 10.1109/LSENS.2024.3408089.Samsung Portugal, [Online]. Available: https://www.samsung.com/pt/watches/galaxy-watch/galaxy-watch4-black-bluetooth-sm-r870nzkaphe/."
    ]
  },
  camera: {
    title: 'Câmara Térmica',
    text: `A câmera térmica MLX90640 detecta variações de temperatura facial e permite inferir esforço ou respiração.
Essa tecnologia auxilia na prevenção de exaustão térmica, fornecendo alertas em tempo real e relatórios detalhados sobre a resposta térmica do corpo durante o exercício.`,
    references: [
      {
        title: "ThermoDroid: solução baseada em Android para avaliação fisiológica através de temperatura",
        description: "Projeto que utiliza câmera térmica para análise emocional, validando o uso de sensores térmicos móveis como no The Heart Box.",
      },
      {
        title: "JoulesEye: Energy Expenditure Estimation and Respiration Sensing from Thermal Imagery While Exercising",
        description: "Sistema que estima gasto calórico e frequência respiratória via imagens térmicas durante exercícios, similar à abordagem do The Heart Box.",
      },
      {
        title: "Infrared Thermography for Measuring Elevated Body Temperature: Clinical Accuracy, Calibration, and Evaluation",
        description: "Estudo que confirma a eficácia da medição da temperatura facial por termografia, reforçando a escolha do sensor térmico no sistema.",
      }
    ],
    image: illustrationCamera,
    bibliografia: [
      "André Francisco Pinelas da Silva, «ThermoDroid: solução baseada em Android para avaliação fisiológica através de temperatura», Jul. 2019.Oliveira, F. ThermoDroid: solução baseada em Android para avaliação fisiológica através de temperatura. SBEB, 2019.",
      "Zhao, Y. JoulesEye: Energy ER. Adhikary, M. Sadeh, N. Batra, e M. Goel, «JoulesEye», Proc ACM Interact Mob Wearable Ubiquitous Technol, vol. 7, n. 4, pp. 1–29, Dez. 2023, doi: 10.1145/3631422.xpenditure Estimation and Respiration Sensing from Thermal Imagery While Exercising. ACM UbiComp, 2021.",
      "Fernandes, J. Infrared TheQ. Wang, Y. Zhou, P. Ghassemi, D. McBride, J. P. Casamento, e T. J. Pfefer, «Infrared Thermography for Measuring Elevated Body Temperature: Clinical Accuracy, Calibration, and Evaluation», Sensors, vol. 22, n. 1, p. 215, Dez. 2021, doi: 10.3390/s22010215.rmography for Measuring Elevated Body Temperature: Clinical Accuracy, Calibration, and Evaluation. Sensors, 2020."
    ]
  },
  users: {
    title: 'Utilizadores',
    text: `O sistema foi desenhado para atender tanto atletas profissionais quanto iniciantes, com adaptação automática do perfil e zonas.
É possível utilizar em treinos individuais, aulas coletivas ou ambientes domésticos, com acompanhamento personalizado e feedback em tempo real para cada usuário.`,
    references: [
      {
        title: "Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate",
        description: "A integração de múltiplos sensores e feedback personalizado é inspirada em abordagens multidimensionais de monitoramento físico.",
      }
    ],
    image: illustrationUsers,
    bibliografia: [
      "Smith, A. Objective Monitoring of PhP. S. Freedson e K. Miller, «Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate», Res Q Exerc Sport, vol. 71, n. sup2, pp. 21–29, Jun. 2000, doi: 10.1080/02701367.2000.11082782.ysical Activity Using Motion Sensors and Heart Rate. IEEE Sensors, 2020."
    ]
  },
  dashboard: {
    title: 'Dashboard',
    text: `Visualize os dados em tempo real em dashboards dinâmicos no Grafana, conectados ao InfluxDB.
Os painéis são interativos e personalizáveis, permitindo a visualização de métricas como frequência cardíaca, zonas de esforço, temperatura e desempenho ao longo do tempo.`,
    references: [
      {
        title: "Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate",
        description: "A visualização integrada de múltiplas métricas fisiológicas é baseada em trabalhos que combinam sensores para análise detalhada do desempenho.",
      }
    ],
    image: illustrationDashboard,
    bibliografia: [
      "Smith, A. Objective Monitoring of PhP. S. Freedson e K. Miller, «Objective Monitoring of Physical Activity Using Motion Sensors and Heart Rate», Res Q Exerc Sport, vol. 71, n. sup2, pp. 21–29, Jun. 2000, doi: 10.1080/02701367.2000.11082782.ysical Activity Using Motion Sensors and Heart Rate. IEEE Sensors, 2020."
    ]
  },
  bpm: {
    title: 'Batimentos Cardíacos',
    text: `A FC é exibida no app Android, associada a zonas de esforço com base em idade e perfil do utilizador.
O cálculo dos batimentos por minuto é feito de forma contínua, incluindo análise de variabilidade, detecção de anomalias e recomendações automáticas para otimizar o desempenho.`,
    references: [
      {
        title: "Monitor Heart Rate using Pulse Sensor and ESP32",
        description: "Projeto que inspirou a leitura contínua dos batimentos cardíacos via sensor PPG e ESP32.",
      },
      {
        title: "Assessment of Samsung Galaxy Watch4 PPG-Based Heart Rate During Light-to-Vigorous Physical Activities",
        description: "Estudo que valida o uso de smartwatches para monitoramento cardíaco em diferentes intensidades de atividade.",
      }
    ],
    image: illustrationBpm,
    bibliografia: [
      "Monitor Heart Rate using Pulse Sensor and ESP32 - Microcontrollers Lab, [Online]. Available: https://microcontrollerslab.com/pulse-sensor-esp32-tutorial/.",
      "Samsung Galaxy Watch4 - C. S. Lima, F. C. Bertocco, J. I. V. de Oliveira, T. M. F. de Souza, E. P. da Silva, e F. J. Von Zuben, «Assessment of Samsung Galaxy Watch4 PPG-Based Heart Rate During Light-to-Vigorous Physical Activities», IEEE Sens Lett, vol. 8, n. 7, pp. 1–4, Jul. 2024, doi: 10.1109/LSENS.2024.3408089.Samsung Portugal, [Online]. Available: https://www.samsung.com/pt/watches/galaxy-watch/galaxy-watch4-black-bluetooth-sm-r870nzkaphe/."
    ]
  }
};

function renderBibliografiaItem(text) {
  const urlRegex = /(https?:\/\/[^\s\])"]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, idx) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={idx}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7451A6] underline break-all"
        >
          {part}
        </a>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

// Carrossel de vídeos funcional
function AppVideoCarousel() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [current]);

  const prev = () => setCurrent((prev) => (prev === 0 ? appVideos.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === appVideos.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full flex flex-col items-center py-12"> {/* Espaço grande acima e abaixo */}
      <div className="w-72 h-44 mb-4 mt-4 relative flex items-center justify-center">
        <video
          ref={videoRef}
          width="280"
          height="170"
          controls
          className="rounded-lg shadow bg-black"
        >
          <source src={appVideos[current]} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#7451A6] text-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-[#5a3e8c] text-lg"
          style={{ zIndex: 2 }}
          aria-label="Anterior"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#7451A6] text-white rounded-full w-7 h-7 flex items-center justify-center shadow hover:bg-[#5a3e8c] text-lg"
          style={{ zIndex: 2 }}
          aria-label="Próximo"
        >
          ▶
        </button>
      </div>
      <div className="flex gap-1 mt-2 mb-2">
        {appVideos.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-[#7451A6]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureDetail() {
  const { id } = useParams();
  const content = featureDetails[id];
  const [showBibliografia, setShowBibliografia] = useState(false);

  if (!content) return <p>Recurso não encontrado.</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-[#24284B] mb-4">{content.title}</h1>
        <p className="text-lg text-gray-700 whitespace-pre-line mb-6">{content.text}</p>
        {content.references && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#7451A6] mb-2">Referências Relacionadas</h2>
            <ul className="list-disc ml-6 space-y-2">
              {content.references.map((ref, idx) => (
                <li key={idx}>
                  <span className="font-bold">{ref.title}:</span> {ref.description}
                </li>
              ))}
            </ul>
          </div>
        )}
        {content.bibliografia && (
          <div className="mt-10 flex">
            <div
              className="relative group"
              onMouseEnter={() => setShowBibliografia(true)}
              onMouseLeave={() => setShowBibliografia(false)}
            >
              <button
                className="bg-[#7451A6] text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-[#5a3e8c] transition"
                type="button"
              >
                Bibliografia
              </button>
              {showBibliografia && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50 text-left">
                  <h3 className="font-bold text-[#7451A6] mb-2">Bibliografia</h3>
                  <ul className="list-disc ml-5 text-sm text-gray-700">
                    {content.bibliografia.map((bib, idx) => (
                      <li key={idx}>{renderBibliografiaItem(bib)}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center items-center my-16">
        {/* Carrossel de vídeos só na página da aplicação, senão mostra a imagem */}
        {id === 'app' ? (
          <AppVideoCarousel />
        ) : (
          <img
            src={content.image}
            alt={`Ilustração de ${content.title}`}
            className="max-w-xs w-full rounded-2xl shadow-xl"
          />
        )}
      </div>
    </div>
  );
}

export default FeatureDetail;