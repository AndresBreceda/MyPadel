import { useEffect, useState } from "react";
import { UserHeader } from "../UserHeader";

export default function Usuario() {

  const [courts, setCourts] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {

    async function fetchCourts() {

      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8080/api/canchas", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await response.json();
      setCourts(data);

    }

    fetchCourts();

  }, []);

  async function obtenerReservas(canchaId) {

    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:8080/api/reservas/cancha/${canchaId}?fecha=${selectedDate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    return data.map(r => r.horario);
  }

  async function reservar(canchaId, hora) {

    const token = localStorage.getItem("token");

    await fetch("http://localhost:8080/api/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        canchaId,
        horario: hora,
        fecha: selectedDate
      })
    });

    alert("Reserva creada");

  }

  return (
    <div className="min-h-screen bg-gray-200">

      <UserHeader />

      <div className="p-10">

        <h2 className="text-2xl font-bold mb-6">Selecciona fecha</h2>

        <div className="flex items-center gap-4 mb-10">

          <label className="text-lg font-semibold">
            Fecha:
          </label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="
              bg-white
              border-2 border-blue-400
              rounded-xl
              px-4 py-2
              text-lg
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              hover:border-blue-500
              transition
            "
          />

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {courts.map((court) => {

            const horariosDisponibles = court.horarios?.filter(
              h => !reservas.includes(h)
            );

            return (
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

                <div className="grid grid-cols-2 gap-2">

                {court.horarios?.map((hora) => (

                  <button
                    key={hora}
                    onClick={() => reservar(court.id, hora)}
                    className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full"
                  >
                    {hora}
                  </button>

                ))}

              </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}