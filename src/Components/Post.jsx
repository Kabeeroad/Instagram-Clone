import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar>K</Avatar>
      </div>
      <div className="post-img"></div>
      <div className="post-footer"></div>
    </div>
  );
};

export default Post;
