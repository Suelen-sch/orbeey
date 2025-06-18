'use server';

import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginUsuario(formData: FormData) {
  const email = String(formData.get("email"));
  const senha = String(formData.get("senha"));

  if (!email.trim() || !senha.trim()) return { ok: false, msg: "Campos obrigatórios" };

  // Busca usuário pelo email
  const { data, error } = await supabase
    .from('login')
    .select('*')
    .eq('email', email)
        .single();
    console.log('Dados do usuário:', data);

  if (error || !data) {
    return { ok: false, msg: "Usuário não encontrado" };
  }

  // Compara senha digitada com hash do banco
    const senhaConfere = await bcrypt.compare(senha, data.password);
    console.log('Senha conferida:', senhaConfere);
  if (!senhaConfere) {
    return { ok: false, msg: "Senha incorreta" };
  }

  // Redireciona para a home se o login for bem-sucedido
  redirect('/');
}