import { AppBar } from "@mui/material";
import React from "react";
// import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles({
//   root: {
//     backgroundColor: "#403F4C !important",
//     minHeight: "90vh",
//   },
//   appBar: {
//     backgroundColor: "#1B2432 !important",
//     height: "10vh",
//   },
// });
export default function Navigation(props) {
  const [classes, setClasses] = React.useState('dark');
  const changeTheme = () => {
    if (classes === "light") {
      setClasses("dark");
    } else {
      setClasses("light");
    }
  };
  const [theme, setTheme] = React.useState("dark");
  return (
    <div className={classes}>
      <AppBar className="appBar" position="relative">
        <h3 className="p-4" onClick={changeTheme}>Header</h3>
      </AppBar>
      <div className="bod"></div>
    </div>
  );
}
