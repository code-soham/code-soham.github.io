import React, { useEffect } from "react";
import RatingCard from "./RatingCard";
export default function CCcard() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(
      "https://competitive-coding-api.herokuapp.com/api/codechef/code_soham"
    )
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <RatingCard
      src="https://i.imgur.com/b6gouB9.png?1"
      site={data.platform}
      rating={data.rating}
      maxRating={data.highest_rating}
      maxRank={"★★★★"}
      link={"https://www.codechef.com/users/code_soham"}
    />
  );
}
