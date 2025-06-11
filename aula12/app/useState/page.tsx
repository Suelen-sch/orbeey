"use client";
import { useState } from "react";

export default function UseStateAula() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");
  const [fruta, setFruta] = useState("Banana");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-2xl mb-4">UseState Aula</h1>

      {/* Exemplo 1: Contador */}
      <div className="mb-6 flex flex-col items-center">
        <span className="text-lg mb-2">Contador: {contador}</span>
        <div>
          <button
            className="bg-blue-500 px-4 py-2 rounded mr-2"
            onClick={() => setContador(contador + 1)}
          >
            +
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded"
            onClick={() => setContador(contador - 1)}
          > 
            -
          </button>
        </div>
      </div>

      {/* Exemplo 2: Input controlado */}
      <div className="flex flex-col items-center mb-6">
        <input
          className="text-black px-2 py-1 rounded mb-2"
          type="text"
          placeholder="Digite algo..."
          value={texto}
          onChange={(teste) => setTexto(teste.target.value)}/>
        <span>Você digitou: {texto}</span>
      </div>

      {/* Exemplo 3: Select controlado */}
      <div className="flex flex-col items-center">
        <label htmlFor="frutas" className="mb-2">Escolha uma fruta:</label>
        <select
          id="frutas"
          className="text-black px-2 py-1 rounded mb-2"
          value={fruta}
          onChange={(e) => setFruta(e.target.value)}
        >
          <option value="Banana">Banana</option>
          <option value="Maçã">Maçã</option>
          <option value="Uva">Uva</option>
          <option value="Laranja">Laranja</option>
        </select>
        <span>Fruta selecionada: {fruta}</span>
      </div>
    </div>
  );
}