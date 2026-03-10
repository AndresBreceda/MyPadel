import { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserHeader } from "../UserHeader";

export default function Usuario() {

  const [courts, setCourts] = useState([]);

  useEffect(() => {

    async function fetchCourts() {

      const token = localStorage.getItem("token");

      try {

        const response = await fetch("http://localhost:8080/api/canchas", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await response.json();
        setCourts(data);

      } catch (error) {
        console.error("Error fetching courts:", error);
      }

    }

    fetchCourts();

    console.log(courts);

  }, []);

  return (
    <div className="min-h-screen bg-gray-200">

      <UserHeader />

      <div className="p-10">
        <h2 className="text-2xl font-bold mb-8">Horarios disponibles</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {courts.map((court) => (
            <div
              key={court.id}
              className="bg-gray-100 rounded-3xl border-2 border-blue-400 p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold">{court.nombre}</h3>
              <p className="font-semibold mb-4">{court.tipo}</p>

              <img
                src="/cancha.png"
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