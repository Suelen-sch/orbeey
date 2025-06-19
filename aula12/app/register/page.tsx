import { cadastrarUsuario } from "./actions";

export default function Register() {
  async function registerForm(formData: FormData) {
    "use server";
    await cadastrarUsuario(formData);
  }

  return (
    <section
      className="p-8 max-w-lg mx-auto min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        marginTop: "100px",
        background: "linear-gradient(120deg, #e0e7ef 0%, #f8fafc 100%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        borderRadius: "24px",
      }}
    >
      {/* Bolhas animadas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-72 h-72 bg-blue-200 opacity-40 rounded-full top-[-80px] left-[-80px] blur-2xl animate-[bubbleMove_12s_ease-in-out_infinite_alternate] absolute" />
        <div className="w-96 h-96 bg-blue-300 opacity-30 rounded-full bottom-[-120px] right-[-120px] blur-3xl animate-[bubbleMove2_14s_ease-in-out_infinite_alternate] absolute" />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center z-10 drop-shadow-lg">
        Cadastro
      </h1>

      <form action={registerForm} className="flex flex-col gap-6 z-10">
        <div>
          <label
            htmlFor="nome"
            className="block mb-2 text-blue-900 font-semibold"
          >
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-blue-900 font-semibold"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-blue-900 font-semibold"
          >
            Senha:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition text-white font-bold py-3 rounded-lg shadow-lg"
        >
          Cadastrar
        </button>
      </form>

      {/* Animações Tailwind customizadas */}
      <style>
        {`
          @keyframes bubbleMove {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(40px) scale(1.1); }
          }
          @keyframes bubbleMove2 {
            0% { transform: translateY(0) scale(1); }
            100% { transform: translateY(-40px) scale(1.05); }
          }
        `}
      </style>
    </section>
  );
}