import React from "react";
import Contact from "./ContactMe";
export default function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="foot-l-div">
          <Contact />
        </div>
        <div className="foot-r-div">
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
