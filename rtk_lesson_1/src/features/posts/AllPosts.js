import React from "react";

import { useSelector } from "react-redux";

import { postsAll } from "../posts/postSlice";
import AddPostForm from "./AddPostForm";

import PostAuthor from "./PostAuthor";

const AllPosts = () => {
  const allposts = useSelector(postsAll);
  

  const renderedPosts = allposts.posts.map((post) => {
    return <article key={post.id}>
        <h2>{post.name}</h2>
        <p>{post.description}</p>
        <PostAuthor userId={post.userId}></PostAuthor>
    </article>;
  });

  return <div>
      <AddPostForm/>

      {renderedPosts}
      
      </div>;
};

export default AllPosts;
