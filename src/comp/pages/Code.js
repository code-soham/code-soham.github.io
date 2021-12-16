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
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <h1
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            margin: "auto",
          }}
        >
          GITHUB
        </h1>
        <img
          className="isDarkMode"
          style={{
            width: "70vw",
          }}
          src="https://activity-graph.herokuapp.com/graph?username=code-soham&theme=react-dark"
          alt="graph"
        />
        <img
          className="isLightMode"
          style={{
            width: "70vw",
          }}
          src="https://activity-graph.herokuapp.com/graph?username=code-soham&theme=react-light"
          alt="graph"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <h1
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            margin: "auto",
          }}
        >
          LEETCODE
        </h1>
        <img
          className="isDarkMode"
          style={{
            width: "70vw",
            maxWidth: "800px",
          }}
          src="https://leetcode.card.workers.dev/code_soham?theme=forest&font=baloo"
          alt="graph"
        />
        <img
          className="isLightMode"
          style={{
            maxWidth: "800px",
            width: "70vw",
          }}
          src="https://leetcode.card.workers.dev/code_soham?theme=nord&font=baloo"
          alt="graph"
        />
      </div>
    </div>
  );
}
