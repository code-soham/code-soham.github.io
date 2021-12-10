import React, { useEffect } from "react";
export default function CF_card() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://codeforces.com/api/user.info?handles=code_soham")
      .then((res) => res.json())
      .then((json) => setData(json.result[0]));
  }, []);
  console.log(data);
  return (
    <div className="card">
      
    </div>
    );
}
