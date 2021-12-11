import React, { useEffect } from "react";
import RatingCard from "./RatingCard";
export default function CFcard() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(
      "https://competitive-coding-api.herokuapp.com/api/codeforces/code_soham"
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return (
    <RatingCard
      handle={data.username}
      site={data.platform}
      rating={data.rating}
      maxRating={data["max rating"]}
      maxRank={data["max rank"]}
      link={"https://codeforces.com/profile/" + data.username}
    />
  );
}
