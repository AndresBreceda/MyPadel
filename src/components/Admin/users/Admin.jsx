import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserHeader from "../../UserHeader/UserHeader";

export default function Admin() {
  const [users, setUsers] = useState([
    { id: 1, email: "usuario@padel.com" },
    { id: 2, email: "usuario@padel.com" },
    { id: 3, email: "usuario@padel.com" },
  ]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200">

        <UserHeader/>


      <div className="px-16 pt-6">
        <div className="flex gap-16 text-2xl font-bold border-b-2 border-black pb-2">
          <button onClick={() => navigate('/admin/users')} className="underline cursor-pointer">Usuarios</button>
          <button onClick={() => navigate('/admin/canchas')} className="cursor-pointer">Canchas</button>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-12 px-16 py-10">

        {/* Formulario */}
        <div className="bg-gray-100 border-2 border-blue-400 rounded-3xl p-8 w-80">
          <h2 className="text-xl font-bold mb-6">Nuevo usuario</h2>

          <label className="block mb-2 text-lg">Email:</label>
          <input
            type="text"
            className="w-full border border-gray-500 p-2 mb-4"
          />

          <label className="block mb-2 text-lg">Password:</label>
          <input
            type="password"
            className="w-full border border-gray-500 p-2 mb-8"
          />

          <button className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-full text-lg font-semibold">
            Agregar
          </button>
        </div>

        {/* Lista de usuarios */}
        <div className="flex-1 bg-gray-100 border-2 border-blue-400 rounded-3xl overflow-hidden">
          {users.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center justify-between px-6 py-5 border-b border-black"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center text-2xl">
                  <AccountCircleIcon className="text-gray-700" />
                </div>

                <p className="text-lg">
                  Email: {user.email}
                </p>
              </div>

              <div className="flex gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-full font-semibold border border-black">
                  Editar
                </button>

                <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold border border-black">
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}