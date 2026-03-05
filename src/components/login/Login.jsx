import { useState } from "react";
import { Footer } from "../Footer";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password
    });

    // aquí después llamarás tu API
  };

  return (
    <div className="h-screen flex flex-col">

      {/* NAVBAR */}
      <div className="bg-blue-500 h-20 flex items-center px-6 text-white shadow-md border-b border-l-0 border-r-0 border-t-0 border-black border-2">
        <img className="text-3xl mr-3 w-25 mt-6 absolute" src="/raqueta.png" alt="Logo" />
        <h1 className="text-2xl font-bold ml-25">My Padel App</h1>
      </div>

      {/* MAIN */}
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/padel-bg.webp')"
        }}
      >

        <div className="w-full max-w-6xl flex gap-12 items-center px-6">

          {/* TEXTO */}
          <div className="flex-1 text-white">
            <div className="bg-black/70 inline-block px-6 py-4 rounded-xl">
              <h2 className="text-3xl font-bold mb-3">
                My Padel App
              </h2>

              <p className="text-lg">
                Esta es una app para reservar canchas,
                ver disponibilidad y agendar horarios
              </p>
            </div>
          </div>

          {/* LOGIN */}
          <div className="w-96">

            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-md bg-white/40 p-8 rounded-2xl shadow-xl border border-white/30"
            >

              <h3 className="text-2xl font-semibold mb-6 text-center">
                Login
              </h3>
            
                {/* EMAIL */}
                <div className="relative mb-4">

                <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                </div>

                {/* PASSWORD */}
                <div className="relative mb-6">

                <PasswordIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Entrar
              </button>

            </form>

          </div>

        </div>

      </div>

      <Footer></Footer>

    </div>
  );
}