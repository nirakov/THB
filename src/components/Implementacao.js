import React, { useState } from 'react';
import implementacaoImage from '../assets/implementacao.png'; // substitua pelo caminho correto da sua imagem

const faq = [
  {
    question: "Como os dados dos sensores chegam ao dashboard?",
    answer: "Os sensores enviam dados via BLE para o ESP32, que transmite para o backend usando Wi-Fi/MQTT. O backend processa e armazena os dados no InfluxDB, que são visualizados em tempo real no Grafana."
  },
  {
    question: "Preciso de internet para visualizar os dados?",
    answer: "Sim, a visualização em dashboards na nuvem requer conexão com a internet para acessar o backend e o banco de dados."
  },
  {
    question: "É possível integrar outros sensores?",
    answer: "Sim, o sistema é modular e permite a integração de novos sensores via Node-RED e ajustes no backend."
  }
];

function Implementacao() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-8 flex flex-col md:flex-row gap-10 items-start">
      {/* Texto do fluxo de dados */}
      <div className="md:w-1/2 w-full text-left flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-[#24284B] mb-4">Implementação</h1>
        <h2 className="text-xl font-semibold text-[#7451A6] mb-2">Fluxo de Dados</h2>
        <p className="text-gray-700 mb-6">
          O fluxo de dados do sistema começa nos sensores fisiológicos, que coletam informações do usuário durante o exercício. Esses dados são enviados via Bluetooth Low Energy (BLE) para o microcontrolador ESP32. O ESP32 processa e transmite os dados para o backend utilizando Wi-Fi ou MQTT. No backend, o Node-RED realiza o roteamento e transformação dos dados, que são armazenados no InfluxDB. Por fim, o Grafana acessa o banco de dados para exibir dashboards em tempo real, permitindo o acompanhamento detalhado e histórico das métricas fisiológicas.
        </p>
        {/* FAQ */}
        <h2 className="text-xl font-semibold text-[#7451A6] mb-2 mt-8">FAQ de Implementação</h2>
        <div className="space-y-3">
          {faq.map((item, idx) => (
            <div key={idx} className="border rounded-lg p-3 bg-white shadow">
              <button
                className="w-full text-left font-semibold text-[#24284B] focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.question}
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-700">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Imagem */}
      <div className="md:w-1/2 w-full flex justify-center mt-12 md:mt-24">
        <img
          src={implementacaoImage}
          alt="Diagrama da implementação"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default Implementacao;