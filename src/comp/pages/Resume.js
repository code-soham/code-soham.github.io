import React from "react";
import getDirection from "./Animator";
export default function Resume(props) {
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <h3>{props.lastPath}</h3>
      <img src="https://picsum.photos/600/600" alt="asf" />
    </div>
  );
}
