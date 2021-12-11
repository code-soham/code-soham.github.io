import React from "react";
import CFcard from "../Utils/CF_api";
import getDirection from "./Animator";
export default function Code(props) {
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <CFcard/>
    </div>
  );
}
