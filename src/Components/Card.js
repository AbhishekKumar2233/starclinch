import React, { useState } from "react";
import "./style/Card.css";

export default function Card() {
  const [btntext, setBtntext] = useState("SELECT");

  const onClickchangebtntext = () => {
    if (btntext == "SELECT") {
      setBtntext("SELECTED");
    } else {
      setBtntext("SELECT");
    }
  };

  return (
    <>
      <div className="main">
        <div className="half-window">
          <div className="singer-name">
            <h1>Jade</h1>
            <h5>singer</h5>
          </div>
          <div className="location">
            <p>New Delhi</p>
          </div>
          <div className="event-booking">
            <p>Event Booking</p>
            <p>104</p>
          </div>
          <div className="image-grid">
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
            <img
              className="images"
              alt="event-imaage"
              src="https://stcdn.starclinch.in/comdjcompresswebp/james_chakre_music-min.webp"
            />
          </div>
          <button
            className={` ${
              btntext == "SELECT" ? "select-btn" : "select-btn selected-btn"
            }`}
            onClick={() => {
              onClickchangebtntext();
            }}
          >
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
