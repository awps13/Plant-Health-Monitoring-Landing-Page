import React, { useState } from "react";
import axios from "axios";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        username,
        password,
      });

      if (response.data.success) {
        setMessage("Registration successful!");
      } else {
        setMessage("Registration failed: " + response.data.message);
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
          <h1 className="text-center m-2 text-[2rem]">Register</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <p>Username</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2"
            />
            <button
              type="submit"
              className="bg-[#ff00bb] rounded-lg mt-2 p-2 hover:bg-[black] hover:text-white"
            >
              Register
            </button>
          </form>
          {message && <p>{message}</p>}
          <p className="mt-2">
            Sudah punya akun?
            <a
              onClick={() => navigate("/login")}
              href=""
              className="text-blue-100 hover:text-blue-300"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
