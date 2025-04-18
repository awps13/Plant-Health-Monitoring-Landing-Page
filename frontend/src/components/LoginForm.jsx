import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi

  // Cek jika sudah ada token saat halaman login dimuat
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home"); // Jika token ada, alihkan ke halaman Home
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token); // Menyimpan token
        setMessage("Login successful!");
        navigate("/home"); // Redirect ke halaman home setelah login berhasil
      } else {
        setMessage("Login failed: " + response.data.message);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center absolute inset-0 bg-no-repeat text-black  max-h-[100vh] items-center justify-center flex"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 font-semibold flex shadow-2xl shadow-pink-500">
        <div className="bg-[#FF6BD8] w-[20rem] m-auto p-5 rounded-lg">
          <h1 className="text-center m-2 text-[2rem]">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1"
          >
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required className="p-2"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required className="p-2"
            />
            <button type="submit" className="bg-[#ff00bb] rounded-lg mt-2 p-2 hover:bg-[black] hover:text-white">Login</button>
          </form>
          {message && <p className="mt-2">Username atau password salah</p>}
          <p className="mt-2">Belum punya akun? <a onClick={()=> navigate("/register")} href="" className="text-blue-100 hover:text-blue-300">Buat akun</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
