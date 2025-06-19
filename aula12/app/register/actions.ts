'use server'

import { supabase } from "@/lib/supabase"
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache"

export async function cadastrarUsuario(formData: FormData) {
  const nome = String(formData.get("nome"))
  const email = String(formData.get("email"))
  const senha = String(formData.get("password"))

  if (!nome || !email || !senha) {
    return { ok: false, msg: "Todos os campos são obrigatórios." }
  }

  try {
    // Criptografa a senha
    const hash = await bcrypt.hash(senha, 10)

    // Insere na tabela login
    const { error } = await supabase.from("login").insert([
      {
        nome,
        email,
        password: hash
      }
    ])

    if (error) {
      return { ok: false, msg: `Erro ao cadastrar: ${error.message}` }
    }

    revalidatePath('/')
    return { ok: true, msg: "Cadastro realizado com sucesso!" }
  } catch (e: any) {
    return { ok: false, msg: "Erro interno ao cadastrar." }
  }
}