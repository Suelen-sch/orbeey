'use client'
import { useSearchParams } from "next/navigation";

export default function Receber() {
    const searchParams = useSearchParams();
    
  const produto = searchParams.get("produto");
  const preco = searchParams.get("preco");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Receber Produto</h2>
      <p className="text-lg text-gray-800 mb-2">
        <span className="font-semibold">Produto:</span> {produto}
      </p>
      <p className="text-lg text-gray-800">
        <span className="font-semibold">Preço:</span> R$ {preco}
      </p>
    </div>
  );
}