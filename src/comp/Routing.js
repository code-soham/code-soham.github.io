import { Route, Routes } from "react-router-dom";
import { Landing, About, Resume } from "./pages/PageHandler";
export default function Routing(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Landing
            lastPath={props.lpath}
            curPath={props.cpath}
            theme={props.theme}
            setOpen={props.setOpen}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            lastPath={props.lpath}
            curPath={props.cpath}
            setOpen={props.setOpen}
          />
        }
      />
      <Route
        path="/resume"
        element={
          <Resume
            lastPath={props.lpath}
            curPath={props.cpath}
            setOpen={props.setOpen}
          />
        }
      />
    </Routes>
  );
}
