'use server';

import { revalidatePath } from 'next/cache';
import { supabase } from '@/lib/supabase';

export async function addTask(formData: FormData) {
  const title = String(formData.get('title'));

  if (!title.trim()) return;

  await supabase.from('tasks').insert({ title });
  revalidatePath('/tasks');
}

export async function toggleDone(id: string, done: boolean) {
  await supabase.from('tasks').update({ done }).eq('id', id);
  revalidatePath('/tasks');
}
