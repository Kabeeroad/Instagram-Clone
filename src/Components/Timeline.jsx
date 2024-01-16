import React from "react";
import Suggestion from "./Suggestion";
import "./Timeline.css";
import Post from "./Post";
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-left">
        <div className="timeline-post">
          <Post />
        </div>
      </div>
      <div className="timeline-right">
        <Suggestion />
      </div>
    </div>
  );
};

export default Timeline;
