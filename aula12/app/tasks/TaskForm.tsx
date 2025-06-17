"use client";
import { useRef, useTransition } from "react";
import { addTask } from "./actions";

export default function TaskForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [isPending, start] = useTransition();

  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        start(async () => {
          await addTask(new FormData(ref.current!));
          ref.current!.reset();
        });
      }}
      className="flex gap-2">
      <input
        name="title"
        placeholder="Nova task..."
        className="flex-1 border px-2 py-1 rounded"
      />
      <button
        type="submit"
        disabled={isPending}
        className="px-3 bg-blue-600 text-white rounded"
      >
        {isPending ? "..." : "Add"}
      </button>
    </form>
  );
}
