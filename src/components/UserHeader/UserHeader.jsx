import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

export default function UserHeader() {
  const navigate = useNavigate();

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

      {/* Usuario */}
      <button onClick={() => navigate('/')} className="flex items-center gap-2">
        <LogoutIcon className="text-white text-3xl" />
        <span className="font-semibold">Cerrar sesión</span>
      </button>

    </div>
  )
}