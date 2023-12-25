import MoreProjects from "@/components/moreProjects";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
export default function Home() {
  return (
    <>
      <Projects />
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <Skills />
        <MoreProjects />
      </div>
    </>
  );
}
