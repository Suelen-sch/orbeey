import { supabase } from '@/lib/supabase';
import TaskForm     from './TaskForm';
import TaskItem     from './TaskItem';

export const revalidate = 0;             // SSR sempre (demo)

export default async function TasksPage() {
  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <section className="p-8 max-w-lg mx-auto" style={{ marginTop: '100px' }}>
      <h1 className="text-xl mb-4">Minhas Tasks</h1>

      <TaskForm />

      <ul className="space-y-2 mt-6">
        {tasks?.map(t => <TaskItem key={t.id} task={t} />)}
      </ul>
    </section>
  );
}
