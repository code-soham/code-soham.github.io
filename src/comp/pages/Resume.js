import React, { useEffect } from "react";
import getDirection from "./Animator";
export default function Resume(props) {
  useEffect(() => {
    props.setOpen(false);
  }, []); // eslint-disable-line
  return (
    <div className={getDirection(props.lastPath, props.curPath)}>
      <div className="edu">
        <div className="edu_lf">
          <h1>&lt;Education/&gt;</h1>
          <img
            className="edu_gif"
            src={process.env.PUBLIC_URL + `/Assets/Gifs/edu.gif`}
            alt="edu"
          />
        </div>

        <div className="edu_data">
          <div className="edu_row">
            <div className="ed_head">
              <span className="degree">B.TECH IT</span>
              <span> Dur. &nbsp;&nbsp;2020- present</span>
            </div>
            <div className="ed_subhead">
              <p>Jalpaiguri Government Engineering College</p>
            </div>
            <div className="ed_grade highlight">
              <p>GPA : 8.7</p>
            </div>
          </div>
          <div className="edu_row">
            <div className="ed_head">
              <span className="degree">H.S. (+2)</span>
              <span> Dur. &nbsp;&nbsp;2018- 2020</span>
            </div>
            <div className="ed_subhead">
              <p>St. Mary's High School</p>
            </div>
            <div className="ed_grade highlight">
              <p>96.5%</p>
            </div>
          </div>
          <div className="edu_row">
            <div className="ed_head">
              <span className="degree">Secondary (10th)</span>
              <span> Dur. &nbsp;&nbsp;2016-2018</span>
            </div>
            <div className="ed_subhead">
              <p>St. Mary's High School</p>
            </div>
            <div className="ed_grade highlight">
              <p>96.8%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="edu">
        <div className="edu_lf">
          <h1>&lt;Coding Profiles/&gt;</h1>
          <img
            className="edu_gif"
            src={process.env.PUBLIC_URL + `/Assets/Gifs/cp_gif.gif`}
            alt="cp"
          />
        </div>

        <div className="edu_data">
          <div className="edu_row">
            <img
              alt="cp"
              src="https://cp-cards.herokuapp.com?name=code_soham&codeforces=code_soham&codechef=code_soham&atcoder=code_soham"
            />
          </div>
          <div className="edu_row">
            <img
              alt="cp"
              src="https://leetcode.card.workers.dev/code_soham?theme=unicorn&font=source_code_pro&extension=null"
            />
          </div>
        </div>
      </div>
      <div className="cvdiv">
        <a
          target="__blank"
          rel="noreferrer"
          id="cv_btn"
          href="https://drive.google.com/file/d/1DkEwjNvEYlkYluRSAzyvbWUchSWEkFDS/view?usp=sharing"
          download="SOHAM CHOWDHURY RESUME"
        >
          VIEW CV
        </a>
      </div>
    </div>
  );
}
