'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const autenticar = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'teste@orbey.com' && senha === '123456') {
      localStorage.setItem('auth', 'true');
      router.push('/');
    } else {
      setErro('Credenciais inválidas');
    }
  };

  return (
    <div className="wrapper flex min-h-screen text-white font-[Inter]">
      <div
        className="hero flex-1 flex items-center justify-center bg-[linear-gradient(60deg,_#021323_0%,_#0038B4_50%,_#00061A_100%)] bg-[length:200%_200%] animate-[gradientShift_15s_ease_infinite]"
      >
        <img
          src="/orbeey.png" 
          alt="Logo estilizada"
          className="w-[45%] drop-shadow-[0_0_25px_rgba(0,0,0,0.4)]"
        />
      </div>

      <div className="login flex-1 bg-[#021323] flex items-center justify-center p-8">
        <form
          onSubmit={autenticar}
          className="card max-w-[360px] w-full flex flex-col gap-5 animate-[slide_0.8s_ease-out]"
        >
          <h1 className="text-xl font-bold text-white mb-2">Acesse sua conta</h1>

          <div className="social flex gap-3">
            <button type="button" className="flex-1 border border-[#0038B4] bg-[#00061A] text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-[#0038B4] transition">
              <img width="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              GitHub
            </button>
            <button type="button" className="flex-1 border border-[#0038B4] bg-[#00061A] text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-[#0038B4] transition">
              <img width="20" className="rounded-full" src="/google.jpg" alt="Google" />
              Google
            </button>
          </div>

          <label>
            <span className="text-sm text-[#7A7A7A]">E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full mt-1 py-3 px-4 rounded-lg border border-[#0038B4] bg-[#00061A] text-white focus:outline-2 focus:outline-[#1ACBF3]"
              placeholder="Seu e-mail"
            />
          </label>

          <label>
            <span className="text-sm text-[#7A7A7A]">Senha</span>
            <input
              type="password"
              required
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="w-full mt-1 py-3 px-4 rounded-lg border border-[#0038B4] bg-[#00061A] text-white focus:outline-2 focus:outline-[#1ACBF3]"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            className="btn py-3 rounded-lg bg-[#0038B4] text-white font-semibold hover:-translate-y-[2px] transition transform animate-[pulse_2.4s_infinite]"
          >
            Entrar
          </button>

          {erro && <p className="msg text-sm text-center text-[#1ACBF3]">{erro}</p>}
        </form>
      </div>

      <style jsx global>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slide {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 56, 180, .6); }
          50%      { box-shadow: 0 0 0 10px rgba(0, 56, 180, 0); }
        }
      `}</style>
    </div>
  );
}
