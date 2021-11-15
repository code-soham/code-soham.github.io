import { Route, Routes } from "react-router-dom";
import { Landing, About, Code, Resume } from "./pages/PageHandler";
export default function Routing(props) {
  return (
    <Routes>
      <Route path="/" element={<Landing lastPath={props.lpath} />} />
      <Route path="/about" element={<About lastPath={props.lpath} />} />
      <Route path="/code" element={<Code lastPath={props.lpath} />} />
      <Route path="/resume" element={<Resume lastPath={props.lpath} />} />
    </Routes>
  );
}
