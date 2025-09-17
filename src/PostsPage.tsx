import React, { useEffect } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const PostsPage = () => {
    const [posts, setPosts] = React.useState<Post[]>([]);
    const getPosts = async () => {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       const data = await res.json();
       setPosts(data);
       console.log(data);
    }

    //mounted
    useEffect(() => {
        getPosts();
    }, []);

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-2xl mb-4">My Posts Page</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
