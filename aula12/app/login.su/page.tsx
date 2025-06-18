import { loginUsuario } from "./actions";

export default function LoginForm() {
  async function action(formData: FormData) {
    "use server";
    const result = await loginUsuario(formData);

  }

  return (
    <form action={action} className="flex flex-col gap-4 max-w-sm mx-auto mt-15 bg-white p-8 rounded-lg shadow ">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-400 text-black"
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-400 text-black"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
      >
        Entrar
      </button>
    </form>
  );
}