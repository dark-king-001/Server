import React, { useState } from 'react';

export default function explore() {
  const [posts, setPosts] = useState([
    {
      id: 0,
      title: 'Post Subject',
      date: 'posted on 1st July 2023',
      content: 'Emotional Rescue is the 15th British and 17th American studio album...',
      likes: 0,
      comments: []
    },
    {
      id: 1,
      title: 'Post Subject',
      date: 'posted on 1st July 2023',
      content: 'Emotional Rescue is the 15th British and 17th American studio album...',
      likes: 0,
      comments: []
    },
    // Add more post objects here as needed
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      })
    );
  };

  const handleComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, comment] };
        }
        return post;
      })
    );
  };

  return (
    <main>
      <form action="/search" method="post">
        <input type="text" name="search" id="search" placeholder="Search" />
      </form>
      {posts.map((post) => (
        <section className="post" key={post.id}>
          <div className="title">
            {post.title} <p>{post.date}</p>
          </div>
          <div className="content">{post.content}</div>
          <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
          <input
            type="text"
            name="comment"
            className="comment"
            id="comment"
            placeholder="Comment"
            onChange={(e) => handleComment(post.id, e.target.value)}
          />
        </section>
      ))}
    </main>
  );
}
