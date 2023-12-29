const projects = [
  {
    name: "FalFruits",
    desc: "Cloud Kitchen Website (live)",
    tech: ["NextJS", "NodeJS", "MongoDB", "Google Analytics", "SEO"],
    img: "/falfruits.png",
    git: "https://github.com/falfruitsLLP",
    live: "https://www.falfruits.com/",
    video: null,
    showcase: true,
  },
  {
    name: "Fiesta",
    desc: "Website for Event Management Firm (live)",
    tech: ["NextJS", "NodeJS", "MongoDB", "Google Analytics", "SEO"],
    img: "/fiesta.png",
    git: "https://github.com/fiestaEvent",
    live: "https://fiestaevent.co.in/",
    video: null,
    showcase: true,
  },
  {
    name: "BondedByBlood",
    desc: "Connect with blood donors in your locality",
    tech: ["HTML", "NodeJS", "MongoDB"],
    img: "/bondedbyblood.png",
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
export default function Projects() {
  return (
    <div className="flex flex-col px-4">
      <h1 className="text-lg py-2">Projects</h1>
      <div
        className="w-full flex flex-col items-center sm:flex-row justify-start flex-wrap gap-4 p-2"
        id="#projects"
      >
        {projects
          .filter((item) => item.showcase === true)
          .map((project, index) => (
            <a
              href={project.live ?? project.git}
              key={index}
              className="w-5/6 sm:w-48 h-64 flex flex-col bg-white rounded-md"
            >
              <Image
                src={project.img}
                alt={project.name}
                height={128}
                width={320}
                className="rounded-t-md min-h-[128px] object-contain"
              />
              <div className="flex flex-col items-start justify-start px-2 py-1 text-accent h-full gap-1">
                <h1 className="text-lg font-black text-base-100">
                  {project.name}
                </h1>
                <p className="text-xs">{project.desc}</p>
                <div className="flex flex-row flex-wrap text-neutral text-xs">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-light bg-neutral/10 p-[1px] m-[1px]"
                    >
                      {tech}{" "}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
