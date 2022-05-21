import React from "react";

import { useSelector } from "react-redux";

import { postsAll } from "../posts/postSlice";
import AddPostForm from "./AddPostForm";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const AllPosts = () => {
  const allposts = useSelector(postsAll);
  
  const orderedPosts=allposts.posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => {
    return <article key={post.id}>
        <h2>{post.name}</h2>
        <p>{post.description}</p>
        <PostAuthor userId={post.userId}></PostAuthor><br></br>
        <TimeAgo timeStamp={post.date}></TimeAgo>
        <ReactionButtons post={post}></ReactionButtons>
    </article>;
  });

  return <div>
      <AddPostForm/>

      {renderedPosts}
      
      </div>;
};

export default AllPosts;
