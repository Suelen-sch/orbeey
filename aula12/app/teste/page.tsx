'use client'
import { useEffect, useState } from "react";

export default function PageTeste() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts))
      .finally(() => setLoading(false));
  }, [])

  return (
    <div className="mt-25 mb-10">
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Página Client
          </h1>
      {loading ? (
        <div className="text-center text-gray-500">Carregando...</div>
      ) : (
        <div className="flex flex-col gap-4 mx-2">
          {posts.map((post: any) => (
            <div key={post.id} className="bg-gray-200 p-4 rounded-md">
              <h2 className="font-bold text-black">{post.title}</h2>
              <p className="text-black">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}