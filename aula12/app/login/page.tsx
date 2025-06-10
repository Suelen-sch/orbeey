'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [modoTela, setModoTela] = useState<'login' | 'criar' | 'registrar'>('login');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const autenticar = (e: React.FormEvent) => {
    e.preventDefault();
      localStorage.setItem('auth', 'true');
      router.push('/');
  };

  const imagemLogo =
    modoTela === 'registrar'
      ? '/logo-cadastro.png'
      : '/orbeey.png';

  const fundoHero =
    modoTela === 'registrar'
      ? 'bg-[linear-gradient(60deg,_#000000_0%,_#0038B4_50%,_#001430_100%)]'
      : modoTela === 'criar'
      ? 'bg-[linear-gradient(60deg,_#102C44_0%,_#0058C0_50%,_#001A33_100%)]'
      : 'bg-[linear-gradient(60deg,_#021323_0%,_#0038B4_50%,_#00061A_100%)]';

  return (
    <div className="wrapper flex min-h-screen text-white font-[Inter]">
      {/* HERO COM FUNDO E LOGO DINÂMICOS */}
      <div className={`hero flex-1 flex items-center justify-center ${fundoHero} bg-[length:200%_200%] animate-[gradientShift_15s_ease_infinite]`}>
        <img
          src={imagemLogo}
          alt="Logo estilizada"
          className="w-[45%] drop-shadow-[0_0_25px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* FORMULÁRIOS CONDICIONAIS */}
      <div className="login flex-1 bg-[#021323] flex items-center justify-center p-8">
        {modoTela === 'login' && (
          <form onSubmit={autenticar} className="card max-w-[360px] w-full flex flex-col gap-5 animate-[slide_0.8s_ease-out]">
            <h1 className="text-xl font-bold text-white mb-2">Acesse sua conta</h1>

            <div className="social flex gap-3">
              <button type="button" className="flex-1 border border-[#0038B4] bg-[#00061A] text-white py-3 rounded-lg hover:bg-[#0038B4] transition">GitHub</button>
              <button type="button" className="flex-1 border border-[#0038B4] bg-[#00061A] text-white py-3 rounded-lg hover:bg-[#0038B4] transition">Google</button>
            </div>

            <label>
              <span className="text-sm text-[#7A7A7A]">E-mail</span>
              <input type="text" required value={email} onChange={e => setEmail(e.target.value)} className="input" placeholder="Seu e-mail" />
            </label>

            <label>
              <span className="text-sm text-[#7A7A7A]">Senha</span>
              <input type="password" required value={senha} onChange={e => setSenha(e.target.value)} className="input" placeholder="••••••••" />
            </label>

            <button type="submit" className="btn py-3 rounded-lg bg-[#0038B4] text-white font-semibold animate-[pulse_2.4s_infinite]">Entrar</button>
            <p className="text-sm text-[#1ACBF3] text-center cursor-pointer" onClick={() => setModoTela('criar')}>
              Não tem sua conta? Crie agora
            </p>

            {erro && <p className="text-sm text-center text-[#1ACBF3]">{erro}</p>}
          </form>
        )}

        {modoTela === 'criar' && (
          <div className="card max-w-[360px] w-full flex flex-col gap-4 animate-[slide_0.8s_ease-out]">
            <h1 className="text-xl font-bold text-white mb-4 text-center">Crie sua conta</h1>
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded bg-[#0038B4]" onClick={() => setModoTela('registrar')}>
                Pessoa Física
              </button>
              <button className="flex-1 py-3 rounded border border-[#0038B4]" onClick={() => setModoTela('registrar')}>
                Pessoa Jurídica
              </button>
            </div>
            <p className="text-sm text-[#1ACBF3] text-center cursor-pointer mt-3" onClick={() => setModoTela('login')}>
              Já tem conta? Entrar
            </p>
          </div>
        )}

        {modoTela === 'registrar' && (
          <form className="card max-w-[360px] w-full flex flex-col gap-4 animate-[slide_0.8s_ease-out]">
            <h1 className="text-xl font-bold text-white mb-2">Registrar Conta</h1>

            <input className="input" placeholder="Usuário" />
            <input className="input" placeholder="Endereço de e-mail" />
            <input className="input" placeholder="Confirme o endereço de e-mail" />
            <div className="flex gap-2">
              <input className="input flex-1" placeholder="Razão Social" />
              <input className="input flex-1" placeholder="CNPJ" />
            </div>

            <button className="btn py-3 rounded-lg bg-[#0038B4] text-white font-semibold">Próximo</button>
            <p className="text-sm text-[#1ACBF3] text-center cursor-pointer" onClick={() => setModoTela('login')}>
              Já tem conta? Entrar
            </p>
          </form>
        )}
      </div>

      {/* ESTILO GLOBAL */}
      <style jsx global>{`
        .input {
          width: 100%;
          margin-top: 4px;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid #0038B4;
          background: #00061A;
          color: white;
        }
        .input:focus {
          outline: 2px solid #1ACBF3;
        }

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