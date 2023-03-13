import React from "react";
import "./style/Selected.css";

export default function Selected() {
  return (
    <div className="selected-card">
      <div className="selected-imagegrid">
        <img
          className="images"
          alt="event-imaage"
          src="https://stcdn.starclinch.in/comdjcompresswebp/james_chakre_music-min.webp"
        />{" "}
        <img
          className="images"
          alt="event-imaage"
          src="https://stcdn.starclinch.in/comdjcompresswebp/jade-min.webp"
        />
        <img
          className="images"
          alt="event-imaage"
          src="https://stcdn.starclinch.in/comdjcompresswebp/james_chakre_music-min.webp"
        />
        <img
          className="images"
          alt="event-imaage"
          src="https://stcdn.starclinch.in/comdjcompresswebp/jade-min.webp"
        />
      </div>
      <button className="selected-button ">SELECTED</button>
    </div>
  );
}
