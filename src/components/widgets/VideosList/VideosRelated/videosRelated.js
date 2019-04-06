import React from "react";
import VideoListTemplate from "../videosListTemplate";
import "../videosList.css";

const videosRelated = props => (
  <div className="relatedWrapper">
    <VideoListTemplate data={props.data} teams={props.teams} />
  </div>
);

export default videosRelated;
