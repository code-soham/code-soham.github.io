import React from "react";
import CF_card from "../Utils/CF_api";
import getDirection from "./Animator";
export default function Code(props) {
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <div style={{height:'100px', width:'auto', backgroundColor:'white'}}>{CF_card()}</div>
    </div>
  );
}
