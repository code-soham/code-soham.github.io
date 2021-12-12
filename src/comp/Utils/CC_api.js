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
//   console.log(data);
  return (
    <RatingCard
      src="https://i.imgur.com/b6gouB9.png?1"
    //   handle={data.user_details[0].username}
      site={data.platform}
      rating={data.rating}
      maxRating={data.highest_rating}
      maxRank={"★★★★"}
      link={"https://codechef.com/users/" + data.username}
    />
  );
}
