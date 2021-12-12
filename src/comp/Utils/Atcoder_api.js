//[Imgur]()
import React, { useEffect } from "react";
import RatingCard from "./RatingCard";
export default function ATcard() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://competitive-coding-api.herokuapp.com/api/atcoder/code_soham")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  // console.log(data);
  return (
    <RatingCard
      src="https://i.imgur.com/kvizPWz.png?1"
      handle={data.username}
      site={data.platform}
      rating={data.rating}
      maxRating={data.highest}
      maxRank={data.level}
      link={"https://atcoder.jp/users/" + data.username}
    />
  );
}
