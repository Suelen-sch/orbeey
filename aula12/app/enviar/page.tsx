'use client'
import Link from "next/link";

export default function Enviar() {
  const produto = "Notebook";
  const preco = 3500;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Enviar Produto</h2>
      <Link
        href={{
          pathname: "/receber",
          query: { produto, preco }
        }}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition"
      >
        Ir para página de receber com parâmetros
      </Link>
    </div>
  );
}