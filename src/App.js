import React from "react";
import "./App.css";
import "aos/dist/aos.css";
import "./comp/styles.scss";
import Aos from "aos";
import "animate.css";
import Main from "./comp/Main";
import { Bars } from "react-loader-spinner";
function App() {
  Aos.init({ duration: 2000 });
  window.onload = () => {
    var loader = document.querySelector(".loader");
    setTimeout(() => {
      loader.classList.add("fadeOut");
      loader.style.display = "none";
    }, 2000);
  };

  return (
    <React.Fragment>
      <div id="APP" className="App">
        <div className="loader">
          <Bars
            heigth="100"
            width="100"
            color="#b76d68"
            ariaLabel="loading-indicator"
          />
        </div>
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;
