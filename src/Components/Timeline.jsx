import React from "react";
import Suggestion from "./Suggestion";
import "./Timeline.css";
const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-left">timeline</div>
      <div className="timeline-right">
        <Suggestion />
      </div>
    </div>
  );
};

export default Timeline;
