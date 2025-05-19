import React from 'react';

function Tecnologias() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-left">
      <h1 className="text-4xl font-bold text-[#24284B] mb-6">Tecnologias Utilizadas</h1>

      <div className="space-y-4 text-lg text-gray-800">
        <p><strong>BLE (Bluetooth Low Energy):</strong> Usado para comunicação direta e de baixa energia entre o sensor PPG (ESP32) e o aplicativo Android.</p>
        <p><strong>Wi-Fi:</strong> Utilizado pelo ESP32-CAM com câmera térmica para enviar imagens via WebSocket para o aplicativo móvel.</p>
        <p><strong>Kotlin + Jetpack Compose:</strong> Linguagem e framework utilizados no desenvolvimento do aplicativo Android, com foco em interfaces reativas e modernas.</p>
        <p><strong>MQTT (Mosquitto):</strong> Protocolo leve para envio de dados fisiológicos em tempo real do app para o backend na nuvem.</p>
        <p><strong>Node-RED:</strong> Ferramenta de lógica visual usada para processar, validar e encaminhar os dados recebidos via MQTT.</p>
        <p><strong>InfluxDB:</strong> Banco de dados de séries temporais, ideal para armazenar medições fisiológicas contínuas (como BPM e temperatura).</p>
        <p><strong>Grafana:</strong> Ferramenta usada para visualizar os dados em tempo real e gerar dashboards automáticos para cada utilizador ou grupo.</p>
        <p><strong>Azure (VM na Cloud):</strong> A infraestrutura backend (MQTT, Node-RED, InfluxDB, Grafana) foi hospedada na nuvem usando uma máquina virtual Linux na plataforma Microsoft Azure.</p>
      </div>
    </div>
  );
}

export default Tecnologias;
