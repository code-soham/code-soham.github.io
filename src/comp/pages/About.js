import React from "react";
import getDirection from "./Animator";
import { useEffect } from "react";
export default function About(props) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    props.setOpen(false);
  }, []); // eslint-disable-line
  return (
    <div className={getDirection(props.lastPath, props.curPath) + " about"}>
      <div id="intro">
        <img
          alt="me"
          className="profPic"
          src={process.env.PUBLIC_URL + `/Assets/profile_pic.jpg`}
        />
        <span id="intro_txt">
          <h1>&lt;know me/&gt;</h1>
          <h4>
            <span className="highlight">☆&nbsp;</span>
            Hi! I am <span className="highlight">
              Soham Chowdhury
            </span> from{" "}
            <span className="highlight">Coochbehar, West-Bengal</span>
          </h4>
          <h4>
            <span className="highlight">☆&nbsp;</span>I am pursuing my undergrad
            in Information Technology (Engg.) from{" "}
            <span className="highlight">
              Jalpaiguri Government Engineering College (2020-24)
            </span>
          </h4>
          <h4>
            <span className="highlight">☆&nbsp;</span>
            I'm into <span className="highlight">
              Competitive Programming
            </span>{" "}
            and <span className="highlight">Web Development</span>
          </h4>
        </span>
      </div>
      <div id="skills">
        <h1>&lt;Technical Stack/&gt;</h1>
        <div id="icons">
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/html.svg`}
            alt="HTML5"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/css3.svg`}
            alt="CSS3"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/c++.svg`}
            alt="C-plus-plus"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/js.svg`}
            alt="Javascript"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/git.svg`}
            alt="Git"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/reactjs.svg`}
            alt="ReactJs"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/mongodb.svg`}
            alt="MongoDB"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/nodejs.svg`}
            alt="Node"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/python.svg`}
            alt="Python"
          />
        </div>
      </div>
      <div id="tools">
        <h1>&lt;Tools I know/&gt;</h1>
        <div id="icons">
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/vscode.svg`}
            alt="VS Code"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/sublime.svg`}
            alt="Sublime3"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/github.svg`}
            alt="Github"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/heroku.svg`}
            alt="Heroku"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/postman.svg`}
            alt="Postman"
          />
          <img
            height={96}
            width={96}
            src={process.env.PUBLIC_URL + `Assets/Icons/sparkar.png`}
            alt="SparkAR"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/canva.svg`}
            alt="Canva"
          />
          <img
            src={process.env.PUBLIC_URL + `Assets/Icons/pp.svg`}
            alt="Premiere Pro"
          />
        </div>
      </div>
    </div>
  );
}
