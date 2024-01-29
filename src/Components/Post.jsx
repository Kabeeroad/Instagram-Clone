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
      <div className="post-img">
        <img
          src="https://th.bing.com/th/id/R.7d87a9db161c1987ccc79e260c2af967?rik=ov%2byM6p3OU2hYA&riu=http%3a%2f%2feskipaper.com%2fimages%2fbeauty-model-girl-portrait-1.jpg&ehk=GzUKVAL%2bf%2beb2gvQtc5NZgTaYVKCqFwU5f3a54bDVoE%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="post-footer"></div>
    </div>
  );
};

export default Post;
