import React from "react";
import getDirection from "./Animator";
export default function About(props) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <h3>{props.lastPath}</h3>
      <img src="https://picsum.photos/600/600" alt="asf" />
    </div>
  );
}
