import { AppBar, useScrollTrigger } from "@mui/material";
import React, { useEffect } from "react";
import {
  Brightness7Rounded,
  Brightness4Rounded,
  Menu,
  Close,
} from "@mui/icons-material";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routing from "./Routing";
import Dpdown from "./Dpdown";
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
export default function Main(props) {
  const [lpath, setLpath] = React.useState("/");
  const [curPath, setCurPath] = React.useState("/");
  const [classes, setClasses] = React.useState("dark");
  const [open, setOpen] = React.useState(false);
  const changeTheme = () => {
    if (classes === "light") {
      setClasses("dark");
    } else {
      setClasses("light");
    }
  };
  window.onscroll = function () {
    setOpen(false);
  }
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={classes}>
          <ElevationScroll {...props}>
            <AppBar className="appBar" position="sticky">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="pl-14">
                  <div className="icon menuIcon" onClick={() => setOpen(!open)}>
                    { !open ? <Menu /> : <Close/>}
                  </div>
                </div>
                <NavBar
                  curPath={curPath}
                  setLpath={setLpath}
                  setCurPath={setCurPath}
                />
                <div className="pr-14">
                  <div
                    className="icon logo"
                    data-aos="zoom-in-left"
                    onClick={changeTheme}
                  >
                    {classes === "dark" ? (
                      <Brightness4Rounded />
                    ) : (
                      <Brightness7Rounded />
                    )}
                  </div>
                </div>
              </div>
            </AppBar>
          </ElevationScroll>
          {open ? (
            <Dpdown
              curPath={curPath}
              setLpath={setLpath}
              setCurPath={setCurPath}
            />
          ) : null}
          <div className="bod">
            <Routing lpath={lpath} />
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}