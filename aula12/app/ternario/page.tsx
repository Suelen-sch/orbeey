export default function Ternario() {
  const idade = 10;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
          <h1 className="text-2xl mb-4">Operador Ternário</h1>
          {idade >= 18 ? (<p >Você é maior de idade.</p>) : (<p >Você é menor de idade.</p>)}
    </div>
  );
}