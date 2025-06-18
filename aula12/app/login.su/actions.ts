'use server';

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

export async function cadastrarUsuario(formData: FormData) {
    const teste = String(formData.get("nome"));
    const email = String(formData.get("email"));
    const senha = String(formData.get("senha"));
  
    if (!teste.trim() || !email.trim() || !senha.trim()) return;

    // Encripta a senha antes de salvar
    const senhaHash = await bcrypt.hash(senha, 10);

    // Insere diretamente na tabela login
    const { error } = await supabase
      .from('login')
      .insert([{
        name: teste,
        email: email,
        password: senhaHash,
        created_at: new Date().toISOString()
      }]);
    if (error) {
        throw new Error(`Erro no Cadastro: ${error.message}`);
    }

    revalidatePath("/usuarios");
}

