import { useEffect, useState } from "react";
import githubOctocat from "./Octocat";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [width, setWidth] = useState(window.innerWidth);
  const segs = ["ABOUT", "EDUCATION", "SKiLLS", "PROJECTS", "CONTACT"];
  const sections = document.querySelectorAll(".sub_section");
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("scroll", () => {
      const current =
        sections.length -
        1 -
        [...sections]
          .reverse()
          .findIndex((section) => window.scrollY >= section.offsetTop - 1);
      setActive(current - 1);
    });
  }, [width, sections]);
  return (
    <div className="fixed w-full top-0 z-50">
      <div
        style={{
          position: "absolute",
          right: 0,
          zIndex: "0",
          top: "-120px",
          borderTop: "120px solid transparent",
          borderLeft: "120px solid transparent",
          borderRight: "120px solid #fffaaa",
          borderBottom: "120px solid transparent",
          height: "0px",
          width: "0px",
        }}
      ></div>
      <a
        href="https://github.com/code-soham"
        rel="noreferrer"
        target="_blank"
        className="h-16 w-16 pr-4 pt-4 right-0 z-1 absolute animate-bounce hover:animate-pulse"
      >
        {githubOctocat()}
      </a>
      <div
        className={`h-16 p-2 bg-slate-700 bg-opacity-50 text-gray-50 font-extrabold hidden sm:flex justify-evenly items-center w-full`}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          key="home"
          href="#"
          className="hover:text-gray-200 absolute left-0 m-1 md:m-3 lg:m-10"
        >
          <i className="bx bxs-home text-2xl md:text-4xl"></i>
        </a>
        {segs.map((seg, index) => (
          <a
            key={index}
            className={`hover:text-fuchsia-700 transform-gpu duration-300 ${
              active === index ? "active-link" : ""
            }`}
            href={`#${seg.toLowerCase()}`}
          >
            {seg}
          </a>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full bg-slate-800 text-gray-100 p-4 m-4 lg:hidden md:hidden sm:hidden absolute left-0 top-0 z-10`}
      >
        {!isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {isOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className={`rounded-full text-gray-100 p-4 lg:hidden md:hidden sm:hidden absolute left-0 m-auto w-fit right-0 z-10`}
      >
        <i className="bx bxs-home text-2xl"></i>
      </a>
      {
        <div
          className={`text-gray-300 ${
            isOpen ? "visible" : "invisible"
          } font-extrabold flex flex-col justify-evenly items-center w-11/12 absolute m-auto left-0 right-0 top-0 sm:hidden rounded-lg`}
        >
          {segs.map((seg, index) => (
            <a
              key={index}
              className={`py-5 transition-all duration-700 ease-in-out transform-gpu ${
                isOpen ? "translate-y-20" : "-translate-y-96"
              } rounded-3xl bg-opacity-90 bg-white text-orange-500 hover:bg-slate-600 w-full my-1 hover:text-white text-center`}
              href={`#${seg.toLowerCase()}`}
            >
              {seg}
            </a>
          ))}
        </div>
      }
    </div>
  );
}
