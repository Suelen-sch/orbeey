interface Posts {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
  
  interface ResponseProps {
    posts: Posts[];
  }
  

export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();
    console.log(data);
  
    return (
      <div className="mt-25 mb-10">
        <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
          Todos os posts
        </h1>
  
                <div className="flex flex-col gap-4 mx-2">
                  {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                      <h2 className="font-bold text-black">{post.title}</h2>
                      <p className="text-black">{post.body}</p>
                    </div>
                  ))}
                </div>
      </div>
    );
  }
  