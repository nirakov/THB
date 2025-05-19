// src/pages/SaibaMais.js
import React from 'react';

function SaibaMais() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-[#24284B]">
      <h1 className="text-4xl font-bold mb-6">Sobre o Projeto</h1>

      <p className="text-lg mb-4">
        A busca por uma prática esportiva mais inteligente, personalizada e segura tem impulsionado o uso de sensores fisiológicos em ambientes de treino. No contexto das aulas de spinning indoor, é cada vez mais desejável fornecer aos praticantes e instrutores informações em tempo real sobre o esforço físico e a resposta fisiológica de cada aluno.
      </p>

      <p className="text-lg mb-4">
        Diante desse cenário, o projeto <strong>The Heart Box</strong> propõe um sistema integrado de monitoramento fisiológico que combina sensores de frequência cardíaca (PPG ou smartwatch), medição de temperatura facial com câmeras térmicas, e uma aplicação móvel conectada a um servidor de dados — tudo para transformar uma bicicleta comum em uma smart bike.
      </p>

      <p className="text-lg mb-4">
        O sistema foi idealizado para funcionar tanto no modo individual quanto em aulas coletivas. No modo individual, o utilizador conecta seus sensores diretamente ao aplicativo móvel via Bluetooth Low Energy (BLE), permitindo o acompanhamento em tempo real do desempenho fisiológico durante o treino, mesmo sem acesso à internet. Já no modo coletivo, os dados são enviados para um servidor central por meio do protocolo MQTT, permitindo a visualização simultânea por um instrutor ou grupo, promovendo comparação saudável e análise coletiva.
      </p>

      <p className="text-lg mb-4">
        A arquitetura do sistema integra uma variedade de tecnologias modernas: microcontroladores ESP32 para leitura de sensores, câmeras térmicas MLX90640 para captação de temperatura facial, um aplicativo Android desenvolvido em Kotlin com Jetpack Compose, e uma infraestrutura backend baseada em contêineres na nuvem da Azure. Os principais serviços do backend incluem o Mosquitto (broker MQTT), Node-RED (orquestração de dados), InfluxDB (armazenamento em série temporal) e Grafana (visualização em tempo real).
      </p>

      <p className="text-lg mb-4">
        Além de exibir dados ao vivo como frequência cardíaca, temperatura facial e zona de esforço atual, o sistema também registra o histórico das sessões para consulta posterior. As zonas de esforço são personalizadas com base nas informações do perfil do utilizador, e a pontuação por tempo na zona-alvo promove engajamento entre participantes em aulas de grupo.
      </p>

      <p className="text-lg">
        Com isso, o projeto <strong>The Heart Box</strong> se destaca como uma solução inovadora, prática e acessível que combina tecnologias móveis, sensoriamento fisiológico e Internet das Coisas (IoT), oferecendo uma nova forma de acompanhar, motivar e melhorar o desempenho esportivo em ambientes indoor.
      </p>
    </div>
  );
}

export default SaibaMais;
