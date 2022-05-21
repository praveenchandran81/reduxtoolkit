import React, { useState } from "react";
import { postAdded } from "./postSlice";
import usersSlice from "../users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onDescriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const onAuthorChangeHandler = (e) => {
    setUserId(e.target.value);
  };

  const onAddPostHandler = () => {
    if (name && description) {
      dispatch(postAdded(name, description, userId));
    }
    setName("");
    setDescription("");
    setUserId("");
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const canSave = Boolean(name) && Boolean(description) && Boolean(userId);

  return (
    <div>
      Add New Post
      <section>
        <form>
          <label htmlFor="inputPostName">Name</label>
          <input
            type="text"
            id="inputPostName"
            value={name}
            onChange={onNameChangeHandler}
          ></input>
          <label htmlFor="selectAuthor">Author</label>
          <select
            id="selectAuthor"
            value={userId}
            onChange={onAuthorChangeHandler}
          >
            <option value=""></option>
            {userOptions}
          </select>

          <label htmlFor="inputPostDescription">Description</label>
          <input
            type="text"
            id="inputPostDescription"
            value={description}
            onChange={onDescriptionChangeHandler}
          ></input>

          <button type="button" onClick={onAddPostHandler} disabled={!canSave}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
