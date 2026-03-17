import { useEffect, useState } from "react";
import { UserHeader } from "../UserHeader";

export default function Usuario() {

  const [courts, setCourts] = useState([]);
  const [misReservas, setMisReservas] = useState([]);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState({});

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

  function reservarDemo(court, hora) {

    // Guardar reserva en frontend
    setMisReservas(prev => [
      ...prev,
      {
        canchaId: court.id,
        nombre: court.nombre,
        hora
      }
    ]);

    // limpiar selección
    setHorarioSeleccionado(prev => ({
      ...prev,
      [court.id]: ""
    }));

  }

  return (
    <div className="min-h-screen bg-gray-200">

      <UserHeader />

      <div className="flex p-10 gap-10">

        {/* 🔹 PANEL IZQUIERDO */}
        <div className="w-1/4 bg-white rounded-2xl p-5 shadow-lg h-fit">

          <h2 className="text-xl font-bold mb-4">Mis reservas</h2>

          {misReservas.length === 0 && (
            <p className="text-gray-500">No tienes reservas</p>
          )}

          {misReservas.map((res, index) => (
            <div
              key={index}
              className="mb-3 p-3 bg-blue-100 rounded-xl"
            >
              <p className="font-bold">{res.nombre}</p>
              <p>{res.hora}</p>
            </div>
          ))}

        </div>

        {/* 🔹 CANCHAS */}
        <div className="grid md:grid-cols-2 gap-10 flex-1">

          {courts.map((court) => {

            const horariosOcupados = misReservas
              .filter(r => r.canchaId === court.id)
              .map(r => r.hora);

            const disponibles = court.horarios?.filter(
              h => !horariosOcupados.includes(h)
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

                {/* 🔽 DROPDOWN */}
                <select
                  value={horarioSeleccionado[court.id] || ""}
                  onChange={(e) =>
                    setHorarioSeleccionado({
                      ...horarioSeleccionado,
                      [court.id]: e.target.value
                    })
                  }
                  className="mb-4 p-2 rounded-lg border"
                >
                  <option value="">Selecciona horario</option>

                  {disponibles.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}

                </select>

                {/* 🔘 BOTÓN RESERVAR */}
                <button
                  disabled={!horarioSeleccionado[court.id]}
                  onClick={() =>
                    reservarDemo(court, horarioSeleccionado[court.id])
                  }
                  className="bg-green-500 disabled:bg-gray-400 px-6 py-2 rounded-full"
                >
                  Reservar
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}