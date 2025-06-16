'use client';
import { useOptimistic, startTransition } from 'react';
import { toggleDone } from './actions';
interface Task {
    id: string;
    title: string;
    done: boolean;
    created_at?: string; // opcional se você não usar
  }
  
  interface Props {
    task: Task;
  }
export default function TaskItem({ task }: Props) {
    const [optimistic, setOptimistic] = useOptimistic(task);

  async function onToggle() {
    const next = !optimistic.done;

    startTransition(() =>
      setOptimistic({ ...optimistic, done: next })
    );

    await toggleDone(task.id, next);
  }

  return (
    <li
      className={`flex items-center gap-2 p-2 border rounded ${
        optimistic.done ? 'opacity-50 line-through' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={optimistic.done}
        onChange={onToggle}
      />
      <span>{optimistic.title}</span>
    </li>
  );
}
