import { NextRequest, NextResponse } from 'next/server';

// Exemplo: bloqueia acesso à página de cadastro se o usuário já estiver logado (cookie "usuario_logado")
export function middleware(request: NextRequest) {
  // Exemplo: verifica se existe um cookie chamado "usuario_logado"
  const usuarioLogado = request.cookies.get('usuario_logado');

  // Se estiver logado, redireciona para a home ou outra página
  if (usuarioLogado) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Se não estiver logado, permite acesso normalmente
  return NextResponse.next();
}

// Define em quais rotas o middleware será aplicado
export const config = {
  matcher: [
    '/cadastro',           // exemplo: protege a rota /cadastro
    '/outra-rota-protegida'
  ],
};