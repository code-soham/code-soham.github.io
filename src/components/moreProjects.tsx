const projects = [
  {
    name: "FalFruits",
    desc: "Cloud Kitchen Website (live)",
    tech: ["NextJS", "NodeJS", "MongoDB", "Google Analytics", "SEO"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/falfruitsLLP",
    live: "https://www.falfruits.com/",
    video: null,
    showcase: true,
  },
  {
    name: "Fiesta",
    desc: "Website for Event Management Firm (live)",
    tech: ["NextJS", "NodeJS", "MongoDB", "Google Analytics", "SEO"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/fiestaEvent",
    live: "https://fiestaevent.co.in/",
    video: null,
    showcase: true,
  },
  {
    name: "BondedByBlood",
    desc: "Connect with blood donors in your locality",
    tech: ["HTML", "NodeJS", "MongoDB"],
    img: "https://i.imgur.com/3fFxyyt.png",
    git: "https://github.com/Sanga-Pal/Bonded-By-Blood",
    live: "http://bondedbyblood.vercel.app/",
    video: "https://www.youtube.com/watch?v=boNT7SMTHpk",
    showcase: true,
  },
  {
    name: "EDC",
    desc: "Entrepenuership Development Cell, JGEC (live)",
    tech: ["NextJS"],
    img: "https://i.imgur.com/4YIP5wS.png",
    git: "https://github.com/code-soham/EDC_JGEC/tree/next-dev",
    live: "https://edcjgec.tech/",
    video: null,
    showcase: true,
  },
  {
    name: "Job Search UI",
    desc: "",
    tech: ["Angular", "Material UI"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/entryLevelJobsUI",
    live: null,
    video: "https://youtu.be/RNsrLWXh3JE",
    showcase: false,
  },
  {
    name: "Link APP",
    desc: "Visualizes facebook's graph algorithm.",
    tech: ["React", "Typescript"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/linkApp",
    live: "https://code-soham.github.io/linkApp/",
    video: "https://youtu.be/bMipTP5-URs",
    showcase: false,
  },
  {
    name: "Flipkart Clone",
    desc: "",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://i.imgur.com/JlssUg8.jpeg",
    git: "https://github.com/code-soham/flipkart_mech/",
    live: null,
    video: null,
    showcase: true,
  },
  {
    name: "Cook-Book",
    desc: "Recipe sharing platform.",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://camo.githubusercontent.com/eb27cdf53b22203149368c5e4a9ca0d28242955d17f43dfa488dddac94990571/68747470733a2f2f692e696d6775722e636f6d2f5957394e775a762e6a7067",
    git: "https://github.com/code-soham/CookBook-client",
    live: null,
    video: "https://youtu.be/RAAL4QOxF1g",
    showcase: false,
  },
  {
    name: "Form Builder",
    desc: "",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/React-Form-Builder",
    live: null,
    video: "https://youtu.be/EzlqD5P3DdI",
    showcase: false,
  },
  {
    name: "Pictionary",
    desc: "Anything under the sun, but in a picture.",
    tech: ["HTML", "CSS", "Javascipt"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/gdscjgec/Pictionary",
    live: "https://gdscjgec.github.io/Pictionary/",
    video: null,
    showcase: false,
  },
];
import Image from "next/image";
export default function MoreProjects() {
  return (
    <div className="max-w-xs shadow-xl gap-4 flex flex-col backdrop-brightness-110 px-4 py-8">
      <h1 className="text-lg">More Projects</h1>
      <div
        className="flex flex-row flex-wrap gap-3 max-h-80 overflow-auto"
        id="#more_projects"
      >
        {projects
          .filter((item) => item.showcase === false)
          .map((project, index) => (
            <div
              key={index}
              className="flex flex-between w-full border-b border-b-base-200 pb-2 pr-4 items-center"
            >
              <div className="w-full flex flex-col gap-1">
                <h1 className="text-gray-300">{project.name}</h1>
                <div className="flex flex-row flex-wrap gap-x-2 text-xs">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-light border border-gray-400 p-1 text-gray-400 rounded"
                    >
                      {tech}{" "}
                    </span>
                  ))}
                </div>
              </div>
              <a href={project.git} target="_blank" className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
