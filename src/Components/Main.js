import React from "react";
import "./style/main.css";

export default function Main() {
  return (
    <>
      <div className="main-div">
        <div className="video"></div>
        <div className="details-heading">
          <p>Details:</p>
        </div>
        <div className="details">
          <div>
            <h4>Event date</h4>
            <p>2023-02-22</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>Delhi,India</p>
          </div>
        </div>
        <div className="budget">
          <h4>Budget</h4>
          <h4 id="price"> &#8377;5,00,000</h4>
          <h5>Singers under 5 Lakh</h5>
        </div>
      </div>
    </>
  );
}
