import img1 from '../assets/hardware1.png';
import img2 from '../assets/hardware2.png';
import img3 from '../assets/hardware3.png';

function Hardware() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-[#24284B] mb-10">Hardware</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <img src={img1} alt="Placa ESP32" className="w-full max-w-sm rounded-lg shadow-lg" />
          <p className="mt-2 text-center text-[#24284B] font-medium">Placa ESP32 com Câmera Térmica</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img2} alt="Sensor BLE" className="w-full max-w-sm rounded-lg shadow-lg" />
          <p className="mt-2 text-center text-[#24284B] font-medium">Placa ESP32 com PPG</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={img3} alt="Montagem final" className="w-full max-w-sm rounded-lg shadow-lg" />
          <p className="mt-2 text-center text-[#24284B] font-medium">Smartwatch</p>
        </div>
      </div>
    </div>
  );
}

export default Hardware;
