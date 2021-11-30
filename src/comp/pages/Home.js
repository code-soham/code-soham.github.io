import React from "react";
import getDirection from "./Animator";
import { Typewriter } from "react-simple-typewriter";
import "./styles.scss";
import { Typography } from "@mui/material";
export default function Landing(props) {
  const theme = props.theme === "dark" ? [2] : [1];
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <div className="respRC">
        <div className="lft">
          <Typography variant="h3" component="h3" align="center">
            Hi There! <span className="waving_hand">&#128075;</span>
          </Typography>
          <Typography variant="h3" component="h3" align="center" className="home_name">
            I'm <span style={{ color: "yellowgreen", fontWeight:'900' }} className="home_name_inn">SOHAM </span>
          </Typography>
          <div className="typewritten">
            <h1>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "COMPETITIVE CODER",
                  "MUSICOPHILE \u266c",
                  "WEB DEVELOPER",
                ]}
                cursor
                loop={false}
                cursorStyle="$"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </h1>
          </div>
        </div>
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
