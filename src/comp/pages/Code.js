import React from "react";
import getDirection from "./Animator";
export default function Code(props) {
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <img
        width="500px"
        src="https://pruvi007-apis.herokuapp.com/CF/code_soham"
        alt="codeforces"
      />
    </div>
  );
}
