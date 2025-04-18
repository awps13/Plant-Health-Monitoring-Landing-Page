import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SensorCard from "../components/SensorCrad";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Menghapus token dari localStorage
    navigate("/"); // Mengarahkan kembali ke halaman login
  };

  const [sensorData, setSensorData] = useState({
    ph: 6.3,
    light: 250,
    temperature: 27.5,
    humidity: 65,
    tds: 1150,
  });

  const handleNyalakanLampu = () => {
    alert("Perintah: Nyalakan Lampu (simulasi)");
  };
  
  const handleTambahNutrisi = () => {
    alert("Perintah: Tambah Nutrisi (simulasi)");
  };

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">
          Dashboard Monitoring Tanaman
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SensorCard title="Nilai pH" value={sensorData.ph} unit="" />

          <SensorCard
            title="Intensitas Cahaya"
            value={sensorData.light}
            unit="Lux"
          >
            <button
              onClick={handleNyalakanLampu}
              className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600"
            >
              Nyalakan Lampu
            </button>
          </SensorCard>

          <SensorCard title="Suhu" value={sensorData.temperature} unit="°C" />
          <SensorCard title="Kelembaban" value={sensorData.humidity} unit="%" />

          <SensorCard
            title="Nutrisi Terlarut (TDS)"
            value={sensorData.tds}
            unit="ppm"
          >
            <button
              onClick={handleTambahNutrisi}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
            >
              Tambah Nutrisi
            </button>
          </SensorCard>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
