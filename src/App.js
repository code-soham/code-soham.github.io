import React from "react";
import "./App.css";
import "aos/dist/aos.css";
import "./comp/styles.scss";
import Aos from "aos";
import Main from "./comp/Main";
function App() {
  Aos.init({ duration: 2000 });
  return (
    <React.Fragment>
      <div id="APP" className="App">
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;
