import React from "react";
import "./post.css";
import { Avatar } from "@mui/material";
import { MoreHorizOutlined } from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-headerAuth">
          <Avatar>K</Avatar>
          radian_. <span>12h</span>
        </div>

        <MoreHorizOutlined />
      </div>
      <div className="post-img"></div>
      <div className="post-footer"></div>
    </div>
  );
};

export default Post;
