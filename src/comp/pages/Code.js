import React, { useEffect } from "react";
import ATcard from "../Utils/Atcoder_api";
import CCcard from "../Utils/CC_api";
import CFcard from "../Utils/CF_api";
import getDirection from "./Animator";
import Aos from "aos";
export default function Code(props) {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: false,
    });
  }, []);
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <CFcard data-aos="zoom-in" />
        <CCcard />
        <ATcard />
      </div>
      <hr/>
    </div>
  );
}
