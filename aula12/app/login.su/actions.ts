'use server'

import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';

export async function cadastrarUsuario(formData: FormData) {
    const nome = String(formData.get('nome'))
    const email = String(formData.get('email'))
    const senha = String(formData.get('senha'))

    if (!nome.trim() || !email.trim() || !senha.trim()) return

    const { data, error } = await supabase.auth.signUp({
        email,
        password: senha
    })

    if (error) {
        throw new Error('Erro no Cadstro: ${error.message}')
    }

    if (data?.user?.id) {
        const { error: insertError } = await supabase
            .from('usuarios')
            .insert([{ id: data.user.id, nome }])

        if (insertError) {
            throw new Error(`Erro ao salvar nome: ${insertError.message}`)
        }
    }






}











        