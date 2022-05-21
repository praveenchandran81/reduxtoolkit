import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsup: "👍 ",
  wow: "😲 " ,
  heart: "❤️ ",
  rocket: "🚀 ",
  coffee: "☕️ ",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(
    ([emojikey, emoji]) => {
      return (
        <button style={{background:"none",border:"none"}}
          key={emojikey}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: emojikey }))
          }
        >
          {emoji}
          {post.reactions[emojikey]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
