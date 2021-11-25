import React from "react";
import getDirection from "./Animator";
import "./styles.scss";
export default function Landing(props) {
  const theme = props.theme === "dark" ? [2] : [1];
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <div className="respRC">
        <div className="lft">A</div>
        <div className="rht">
          <img
            className="floating"
            src={process.env.PUBLIC_URL + `/Assets/${theme}.png`}
            width="70%"
            height="auto"
            alt="clipart"
          />
        </div>
      </div>
    </div>
  );
}
