import { AppBar } from "@mui/material";
import React from "react";
import { Brightness7Rounded, Brightness4Rounded } from "@mui/icons-material";
export default function Navigation(props) {
  const [classes, setClasses] = React.useState("dark");
  const changeTheme = () => {
    if (classes === "light") {
      setClasses("dark");
    } else {
      setClasses("light");
    }
  };
  return (
    <div className={classes}>
      <AppBar className="appBar" position="relative">
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        >
          <div></div>
          <h3 className="pr-14" onClick={changeTheme}>
            {classes === "dark" ? (
              <Brightness4Rounded fontSize="large" color="error" />
            ) : (
              <Brightness7Rounded color="primary" />
            )}
          </h3>
        </div>
      </AppBar>
      <div className="bod"></div>
    </div>
  );
}
