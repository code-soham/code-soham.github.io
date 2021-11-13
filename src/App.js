import React, { useState } from "react";
import "./App.css";
import Navigation from "./comp/Navigation";
import "aos/dist/aos.css";
import "./comp/styles.scss";
function App() {
  return (
    <React.Fragment>
      <div id="APP" className="App" >
      <Navigation />
    </div>
    </React.Fragment>
  );
}

export default App;
