import { supabase } from '@/lib/supabase';

import { cadastrarUsuario } from "./actions";


export default function CadastroForm() {
    return (
    <form action={cadastrarUsuario}>
       <input type="text" name="nome" placeholder="Nome completo" required />
       <input type="email" name="email" placeholder="Email" required />
       <input type="password" name="senha" placeholder="Senha" required />
       <button type="submit">Cadastrar</button>
    </form>
    )
}