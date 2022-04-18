import React from "react";
import Contact from "./ContactMe";
import Social from "./Social";
import { Divider, Typography } from "@mui/material";
export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="foot-l-div">
          <Contact />
        </div>
        <Divider orientation="vertical" flexItem />
        <div className="foot-r-div">
          <Social />
        </div>
      </div>
      <div className="footer2">
        <Typography variant="body2" align="center" lineHeight="1em">
          Designed and developed by Soham Chowdhury ©2021
        </Typography>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
