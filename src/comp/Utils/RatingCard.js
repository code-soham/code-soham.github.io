import React from 'react';
import './RatingCard.scss';
export default function RatingCard(props) {
    return (
        <div className="rating-card">
            <img src= {props.src} alt="logo"/>
            <h1>@{props.handle}</h1>
            <h3 style={{ color : "cyan"}}>{props.maxRank}</h3>
            <h3>Max Rating : {props.maxRating}</h3>
            <a target="_blank" rel="noreferrer" href={props.link}><h3 style={{color:"brown !important"}}>VISIT</h3></a>
        </div>
    );
}