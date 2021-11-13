import { AppBar, SwipeableDrawer, useScrollTrigger } from "@mui/material";
import React from "react";
import {
  Brightness7Rounded,
  Brightness4Rounded,
  Menu,
  Home,
  Description,
  PersonOutline
} from "@mui/icons-material";
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

export default function Navigation(props) {
  const [classes, setClasses] = React.useState("dark");
  const [open, setOpen] = React.useState(false);
  const changeTheme = () => {
    if (classes === "light") {
      setClasses("dark");
    } else {
      setClasses("light");
    }
  };
  return (
    <React.Fragment>
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
                  <Menu />
                </div>
              </div>
              <div className="nav">
              <div className="icon">
                  <Home />
                  <h3>Home</h3>
                </div>
                <div className="icon">
                  <PersonOutline/>
                  <h3>About</h3>
                </div>
                <div className="icon">
                  <Description />
                  <h3>Resume</h3>
                </div>
              </div>
              <div className="pr-14">
                
                <div className="icon logo" onClick={changeTheme}>
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
        <div className="bod"></div>
      </div>
      <SwipeableDrawer
        className="drawer"
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        asdjh
      </SwipeableDrawer>
    </React.Fragment>
  );
}
