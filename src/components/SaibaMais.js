import React from 'react';

function SaibaMais() {
  return (
    <div className="p-8 max-w-6xl mx-auto text-[#24284B]">
      <h1 className="text-4xl font-bold mb-6 text-left">Sobre o Projeto</h1>

      {/* Layout de duas colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Texto inicial no lado esquerdo */}
        <section>
          <p className="text-lg mb-4">
            A busca por uma prática esportiva mais inteligente, personalizada e segura tem impulsionado o uso de sensores fisiológicos em ambientes de treino. No contexto das aulas de spinning indoor, é cada vez mais desejável fornecer aos praticantes e instrutores informações em tempo real sobre o esforço físico e a resposta fisiológica de cada aluno.
          </p>
          <p className="text-lg mb-4">
            Diante desse cenário, o projeto <strong>The Heart Box</strong> propõe um sistema integrado de monitoramento fisiológico que combina sensores de frequência cardíaca (PPG ou smartwatch), medição de temperatura facial com câmeras térmicas, e uma aplicação móvel conectada a um servidor de dados — tudo para transformar uma bicicleta comum em uma smart bike.
          </p>
        </section>

        {/* Tópicos no lado direito */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-[#7451A6]">Modo de Operação</h2>
          <div className="space-y-4">
            <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Modo Individual</h3>
              <p className="text-gray-700">
                O utilizador conecta seus sensores diretamente ao aplicativo móvel via Bluetooth Low Energy (BLE), permitindo o acompanhamento em tempo real do desempenho fisiológico durante o treino, mesmo sem acesso à internet.
              </p>
            </div>
            <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Modo Coletivo</h3>
              <p className="text-gray-700">
                Os dados são enviados para um servidor central por meio do protocolo MQTT, permitindo a visualização simultânea por um instrutor ou grupo, promovendo comparação saudável e análise coletiva.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Arquitetura do Sistema */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#7451A6]">Arquitetura do Sistema</h2>
        <p className="text-lg mb-4">
          A arquitetura do sistema integra uma variedade de tecnologias modernas: microcontroladores ESP32 para leitura de sensores, câmeras térmicas MLX90640 para captação de temperatura facial, um aplicativo Android desenvolvido em Kotlin com Jetpack Compose, e uma infraestrutura backend baseada em contêineres na nuvem da Azure.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Mosquitto (broker MQTT)</li>
          <li>Node-RED (orquestração de dados)</li>
          <li>InfluxDB (armazenamento em série temporal)</li>
          <li>Grafana (visualização em tempo real)</li>
        </ul>
      </section>

      {/* Funcionalidades */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#7451A6]">Funcionalidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Monitoramento ao Vivo</h3>
            <p className="text-gray-700">
              Exibe dados como frequência cardíaca, temperatura facial e zona de esforço atual.
            </p>
          </div>
          <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Histórico de Sessões</h3>
            <p className="text-gray-700">
              Registra o histórico das sessões para consulta posterior no grafana, promovendo análise de desempenho.
            </p>
          </div>
          <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Zonas de Esforço</h3>
            <p className="text-gray-700">
              Personaliza zonas de esforço com base no perfil do utilizador, promovendo engajamento.
            </p>
          </div>
          <div className="p-4 bg-[#F5F5F5] rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Comparação em Grupo</h3>
            <p className="text-gray-700">
              Permite a comparação saudável entre participantes em aulas coletivas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SaibaMais;