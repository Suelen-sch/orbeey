import { cadastrarUsuario } from "./actions";

export default function CadastroForm() {
  return (
    <form
      action={cadastrarUsuario}
      className="flex flex-col gap-4 max-w-sm mx-auto mt-24 bg-white p-8 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Cadastro</h2>
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-400"
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        required
        className="border border-gray-300 rounded px-4 py-2 focus:outline-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition"
      >
        Cadastrar
      </button>
        </form>
    );
}
    