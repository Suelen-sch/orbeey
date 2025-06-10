
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Simulação de autenticação (troque para false para testar redirecionamento)
  const authenticated = true;

  // Protege todas as rotas que começam com /dashboard
  if (request.nextUrl.pathname.startsWith("/login") && !authenticated) {
    console.log("ACESSO NEGADO!!!");

    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
