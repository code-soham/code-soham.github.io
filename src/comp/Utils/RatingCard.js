import React from "react";
import "./RatingCard.scss";
export default function RatingCard(props) {
  return (
    <div className="rating_card">
      <div className="rating_card_header">
        <img
          src={props.src}
          alt="logo"
          style={{
            borderRadius: "25px 0px 0px 0px",
            margin: "1 0 auto",
            backgroundColor: "#fff",
          }}
        />
      </div>
      <div className="rating_card_content">
        <h3 style={{ color: "cyan" }}>{props.maxRank}</h3>
        <h3>Max Rating : {props.maxRating}</h3>
        <div className="prm2">Current Rating : {props.rating}</div>

        <a target="_blank" rel="noreferrer" href={props.link}>
          <div className="rating_btn">
            <h3>VIEW PROFILE</h3>
          </div>
        </a>
      </div>
    </div>
  );
}
