import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserHeader } from "../UserHeader";

export default function Usuario() {
  const courts = [
    { id: 1, name: "Cancha Norte izquierda" },
    { id: 2, name: "Cancha Norte izquierda" },
    { id: 3, name: "Cancha Norte izquierda" },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      
      <UserHeader />

      {/* Content */}
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-8">Horarios disponibles</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courts.map((court) => (
            <div
              key={court.id}
              className="bg-gray-100 rounded-3xl border-2 border-blue-400 p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold">Cancha</h3>
              <p className="font-semibold mb-4">{court.name}</p>

              <img
                src="./cancha.png"
                alt="court"
                className="w-32 mb-6"
              />

              <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-3 rounded-full border border-black">
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}