import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// ICONOS
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

export default function UserHeader() {

  const navigate = useNavigate();

  const [clima, setClima] = useState(null);

  useEffect(() => {

    async function fetchClima() {

      try {

        const API_KEY = "da853f6538a78a7ab1178e4502c74d09";

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=MexicoCity&appid=${API_KEY}&units=metric&lang=es`
        );

        const data = await response.json();

        setClima({
          temp: data.main.temp,
          estado: data.weather[0].main // Clear, Clouds, Rain...
        });

      } catch (error) {
        console.error("Error obteniendo clima", error);
      }

    }

    fetchClima();

  }, []);

  function getIconoClima(estado) {

    switch (estado) {
      case "Clear":
        return <WbSunnyIcon />;
      case "Clouds":
        return <CloudIcon />;
      case "Rain":
        return <UmbrellaIcon />;
      default:
        return <CloudIcon />;
    }

  }

  return (
    <div className="bg-blue-500 text-white flex items-center justify-between px-6 h-16 relative">

      {/* Logo + titulo */}
      <div className="flex items-center">
        <img
          src="/raqueta.png"
          alt="Logo"
          className="absolute w-20 -top-2 left-4 mt-2"
        />

        <h1 className="text-xl font-bold ml-24">
          My Padel App
        </h1>
      </div>

      {/* 🌤️ CLIMA */}
      {clima && (
        <div className="flex items-center gap-2 bg-blue-400 px-3 py-1 rounded-xl">

          {getIconoClima(clima.estado)}

          <span className="font-semibold">
            {Math.round(clima.temp)}°C
          </span>

          <span className="text-sm">
            {clima.estado}
          </span>

        </div>
      )}

      {/* Usuario */}
      <button onClick={() => navigate('/')} className="flex items-center gap-2">
        <LogoutIcon className="text-white text-3xl" />
        <span className="font-semibold">Cerrar sesión</span>
      </button>

    </div>
  );
}