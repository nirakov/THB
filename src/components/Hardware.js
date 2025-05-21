import img1 from '../assets/hardware1.png';
import img2 from '../assets/hardware2.png';
import img3 from '../assets/hardware3.png';

function Hardware() {
  return (
    <div className="p-8 flex flex-col md:flex-row gap-10 items-start">
      {/* Texto sobre o hardware */}
      <div className="md:w-1/2 w-full text-left flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-[#24284B] mb-4">Hardware</h1>
        <h2 className="text-xl font-semibold text-[#7451A6] mb-2">Componentes do Sistema</h2>
        <p className="text-gray-700 mb-6">
          O sistema de hardware do The Heart Box é composto por sensores fisiológicos, microcontroladores ESP32 e câmeras térmicas. Esses dispositivos trabalham em conjunto para coletar, processar e transmitir dados fisiológicos em tempo real. A modularidade do sistema permite a integração de novos sensores e dispositivos, garantindo flexibilidade e escalabilidade.
        </p>
        <p className="text-gray-700 mb-6">
          Cada componente foi cuidadosamente selecionado para oferecer alta precisão e confiabilidade, permitindo o monitoramento contínuo e detalhado das métricas fisiológicas durante atividades físicas.
        </p>
      </div>

      {/* Imagens do hardware */}
      <div className="md:w-1/2 w-full mt-4 md:mt-8 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          <div className="flex flex-col items-center">
            <img src={img1} alt="Placa ESP32" className="w-full max-w-sm rounded-lg shadow-lg" />
            <p className="mt-4 text-center text-[#24284B] font-medium">Placa ESP32 com Câmera Térmica</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img2} alt="Sensor BLE" className="w-full max-w-sm rounded-lg shadow-lg" />
            <p className="mt-4 text-center text-[#24284B] font-medium">Placa ESP32 com PPG</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img3} alt="Montagem final" className="w-full max-w-sm rounded-lg shadow-lg" />
            <p className="mt-4 text-center text-[#24284B] font-medium">Smartwatch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardware;