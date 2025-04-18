import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";
import monitoring from "../assets/monitoring.jpg";
const LandingPage = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div
      className="h-screen bg-cover bg-center absolute inset-0 bg-no-repeat text-black  max-h-[100vh] overflow-x-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Navbar + Awal */}
      <div className="relative z-10 font-semibold">
        <nav className="right-0 flex gap-5 justify-end m-5 px-10">
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-1 bg-[#FF6BD8] hover:bg-black hover:text-white font-bold"
          >
            Daftar
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-1 bg-[#FF6BD8] hover:bg-black hover:text-white font-bold"
          >
            Login
          </button>
        </nav>
        <div className="w-full flex h-[80vh] px-[5rem]">
          <div className="justify-center items-center m-auto ">
            <h1 className="text-white text-[4rem]">
              GreenTech: Solusi Pintar untuk Pemeliharaan Tanaman
            </h1>
            <p className="text-white my-5 text-[1.25rem]">
              Solusi IoT terdepan untuk memantau dan mengoptimalkan kondisi
              tanaman Anda. Dapatkan data real-time tentang pH, cahaya, suhu,
              kelembaban, dan nutrisi untuk hasil terbaik.
            </p>
            <div className="flex gap-5 text-[1.3rem]">
              <button
                className="px-5 py-1 bg-[#FF6BD8] hover:bg-black hover:text-white font-bold"
                onClick={() => navigate("/register")}
              >
                Daftar Sekarang
              </button>
              <button className="px-5 py-1 bg-[#FF6BD8] hover:bg-black hover:text-white font-bold">
                <a href="#tentang">Pelajari Lebih Lanjut</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Tentang Platform */}
      <div
        className="h-[100vh] bg-[#181818] mt-[3.5rem] flex items-center px-[5rem]"
        id="tentang"
      >
        <div className="text-white">
          <h1 className="text-[4rem] font-semibold">Tentang Platform</h1>
          <div className="flex gap-10 mt-[1rem]">
            <div className="card flex gap-3 items-start">
              <i className="fa-solid fa-wifi bg-[#3c3838] p-2.5 text-[2rem]"></i>
              <div>
                <h3 className="text-[1.6rem] font-semibold">
                  Pemantauan Berbasis IoT
                </h3>
                <p className="mt-2 text-[1rem]">
                  Sistem teknologi canggih yang memungkinkan Anda memantau
                  kondisi tanaman secara real-time dari mana saja.
                </p>
              </div>
            </div>
            <div className="card flex gap-3 items-start">
              <i className="fa-solid fa-wifi bg-[#3c3838] p-2.5 text-[2rem]"></i>
              <div>
                <h3 className="text-[1.6rem] font-semibold">
                  Pemantauan Berbasis IoT
                </h3>
                <p className="mt-2 text-[1rem]">
                  Sistem teknologi canggih yang memungkinkan Anda memantau
                  kondisi tanaman secara real-time dari mana saja.
                </p>
              </div>
            </div>
            <div className="card flex gap-3 items-start">
              <i className="fa-solid fa-wifi bg-[#3c3838] p-2.5 text-[2rem]"></i>
              <div>
                <h3 className="text-[1.6rem] font-semibold">
                  Pemantauan Berbasis IoT
                </h3>
                <p className="mt-2 text-[1rem]">
                  Sistem teknologi canggih yang memungkinkan Anda memantau
                  kondisi tanaman secara real-time dari mana saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fitur Monitoring pH */}
      <div className="flex h-[100vh] bg-[#181818] text-white">
        <div className="mx-[5rem] my-[5rem]">
          <h1 className="text-[4rem]">Fitur Monitoring pH</h1>
          <div className="flex gap-5">
            <div className="bg-[#3c3838] p-5">
              <h3 className="text-[1.6rem] font-semibold w-[15rem]">
                Sensor Presisi Tinggi
              </h3>
              <p>
                Dilengkapi sensor pH canggih dengan ketelitian hingga 0.1 pada
                rentang pengukuran lengkap 0-14 skala pH untuk hasil yang
                akurat.
              </p>
            </div>
            <div className="bg-[#3c3838] p-5">
              <h3 className="text-[1.6rem] font-semibold">
                Sistem Peringatan Cerdas
              </h3>
              <p>
                Dapatkan notifikasi otomatis saat nilai pH tanaman anda berada
                di luar rentang ideal untuk pertumbuhan optimal.
              </p>
            </div>
          </div>
          <div className="bg-[#3c3838] mt-5 p-5">
            <h3 className="text-[1.6rem] font-semibold">
              Rekomendasi Personal
            </h3>
            <p>
              Terima saran penyesuaian pH yang disesuaikan dengan jenis tanaman
              spesifik yang anda budidayakan.
            </p>
          </div>
        </div>
        <img src={monitoring} alt="" className="w-[80vh]" />
      </div>
      {/* Kontrol Pencahayaan Cerdas */}
      <div className="h-[100vh] bg-[#181818]">
        <h1>Kontrol Pencahayaan Cerdas</h1>
        <div className="flex justify-center items-center gap-1">
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
              }}
              className="relative bg-[#333] w-[10rem] px-[20px] py-3 text-center text-white"
            >
              <i class="fas fa-cog"></i>
            </div>
            <h2>Deteksi Cahaya</h2>
            <p>Sensor cahaya mengukur intensitas dalam lumens dengan akurasi tinggi</p>
          </div>
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
              }}
              className="relative bg-[#333] w-[10rem] px-[20px] py-3 text-center text-white"
            >
              <i class="fas fa-credit-card"></i>
            </div>
          </div>
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
              }}
              className="relative bg-[#333] w-[10rem] px-[20px] py-3 text-center text-white"
            >
              <i class="fas fa-lightbulb"></i>
            </div>
          </div>
          <div>
            <div
              style={{
                clipPath:
                  "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%)",
              }}
              className="relative bg-[#333] w-[10rem] px-[20px] py-3 text-center text-white"
            >
              <i class="fas fa-leaf"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Monitoring Suhu dan Kelembapan */}
      <div></div>
      {/* Analisis Nutrisi Terlarut */}
      <div></div>
    </div>
  );
};

export default LandingPage;
