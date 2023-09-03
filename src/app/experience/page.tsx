import Image from "next/image";
const data = [
  {
    company: "Timechain Labs",
    companyUrl: "https://timechainlabs.io/",
    position: "Svelte Developer",
    startDate: "Jul 2023",
    endDate: "Present",
    keyPoints: [
      "Developing web products & implementing fast, modular & reactive code.",
      "Working with web metrics & lighthouse performance.",
    ],
    jobType: "intern",
  },
  {
    company: "Coursesity",
    companyUrl: "https://coursesity.com/",
    position: "Frontend Developer",
    startDate: "Aug 2023",
    endDate: "Sep 2023",
    keyPoints: [
      "Computing most efficient UI features to handle a platform with 100K monthly users.",
      "Working on Angular & NextJS to develop reactive apps with good SEO & SSR capabilities.",
    ],
    jobType: "contract",
  },
  {
    company: "Codefeast",
    companyUrl: "https://codefeast.in/",
    position: "MERN Stack Developer",
    startDate: "May 2023",
    endDate: "Present",
    keyPoints: [
      "Developing MERN stack applications for clients & handling mentorship sessions.",
    ],
    jobType: "part-time",
  },
  {
    company: "Fiesta",
    companyUrl: "https://fiestaevent.co.in/",
    position: "Web Developer",
    jobType: "freelance",
    keyPoints: [
      "Designed a NextJS Web application with high performance & responsiveness.",
      "Worked on SEO compliance & achieved a lighthouse performance score of 98+.",
    ],
  },
  {
    company: "The 10x Academy",
    companyUrl: "https://the10xacademy.com/",
    position: "DSA & MERN stack Mentor",
    startDate: "Sep 2022",
    endDate: "Dec 2022",
    keyPoints: [
      "Mentoring students on Data Structures & Algorithms & MERN stack.",
      "Helping students to build projects & solve problems.",
    ],
    jobType: "part-time",
  },
  {
    company: "Agrivision4u",
    companyUrl: "https://agrivision4u.com/",
    position: "Full Stack Intern",
    startDate: "Aug 2022",
    endDate: "Oct 2022",
    keyPoints: [
      "Developed the web platform on MERN Stack with features from AWS & Google Cloud.",
      "Integrated APIs and developed efficient funtionalities for the backend.",
    ],
    jobType: "intern",
  },
];
const projects = [
  {
    name: "Fiesta",
    desc: "Website for an Event Management Firm (Being used in production)",
    tech: ["NextJS", "NodeJS", "MongoDB", "Google Analytics", "SEO"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/fiestaEvent",
    live: "https://fiestaevent.co.in/",
    video: null,
    showcase: true,
  },
  {
    name: "BondedByBlood",
    desc: "Bonded by Blood was created to connect donors across the globe with people in need of organs and blood.",
    tech: ["HTML", "NodeJS", "MongoDB"],
    img: "https://i.imgur.com/3fFxyyt.png",
    git: "https://github.com/Sanga-Pal/Bonded-By-Blood",
    live: "http://bondedbyblood.vercel.app/",
    video: "https://www.youtube.com/watch?v=boNT7SMTHpk",
    showcase: true,
  },
  {
    name: "EDC-JGEC",
    desc: "Official Website for the Entrepenuership Development Cell, JGEC",
    tech: ["NextJS"],
    img: "https://i.imgur.com/4YIP5wS.png",
    git: "https://github.com/code-soham/EDC_JGEC/tree/next-dev",
    live: "https://edcjgec.tech/",
    video: null,
    showcase: true,
  },
  {
    name: "Job Search UI",
    desc: "Implemented API from entryleveljobs.me to create the UI for a job filtering and searching web application.",
    tech: ["Angular", "Material UI"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/entryLevelJobsUI",
    live: null,
    video: "https://youtu.be/RNsrLWXh3JE",
    showcase: true,
  },
  {
    name: "Link APP",
    desc: "Mimics facebook's graph algorithm for maintaining friend connections and displays them as path of the graph.",
    tech: ["React", "Typescript"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/linkApp",
    live: "https://code-soham.github.io/linkApp/",
    video: "https://youtu.be/bMipTP5-URs",
  },
  {
    name: "Flipkart Clone",
    desc: "Flipkart results page clone made using MERN Stack, with functional sorting, searching, pagination and filtering.",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://i.imgur.com/JlssUg8.jpeg",
    git: "https://github.com/code-soham/flipkart_mech/",
    live: null,
    video: null,
  },
  {
    name: "Cook-Book",
    desc: "A recipe app to create, store and view recipes from all those contributed by the users in the community.",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://camo.githubusercontent.com/eb27cdf53b22203149368c5e4a9ca0d28242955d17f43dfa488dddac94990571/68747470733a2f2f692e696d6775722e636f6d2f5957394e775a762e6a7067",
    git: "https://github.com/code-soham/CookBook-client",
    live: null,
    video: "https://youtu.be/RAAL4QOxF1g",
  },
  {
    name: "Form Builder",
    desc: "A form builder app to create and maintain forms, based on google forms with reduced flexibility(for now).",
    tech: ["ReactJS", "NodeJS", "MongoDB", "Express"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/code-soham/React-Form-Builder",
    live: null,
    video: "https://youtu.be/EzlqD5P3DdI",
  },
  {
    name: "Pictionary",
    desc: "An informational project maintained by myself for Open Source events - JWOC and Hacktoberfest '21",
    tech: ["HTML", "CSS", "Javascipt"],
    img: "https://loremflickr.com/320/240",
    git: "https://github.com/gdscjgec/Pictionary",
    live: "https://gdscjgec.github.io/Pictionary/",
    video: null,
  },
];
export default function Experience() {
  return (
    <main
      id="#experience"
      className="max-w-[95vw] lg:max-w-4xl xl:max-w-6xl m-auto min-h-[95svh] flex flex-col justify-evenly py-28 z-0"
    >
      <h1 className="text-xl text-left font-bold mb-10 text-primary">
        Work Experience
      </h1>
      <ul className="grid md:grid-cols-2 m-auto mb-10 w-[98%]">
        {data.map((item, index) => (
          <li
            className="sm:-skew-x-6 group transition-all duration-300 min-h-[200px] border-l-8 border-l-secondary bg-base-100 bg-cover bg-center text-secondary drop-shadow-2xl p-3 m-2 group hover:bg-secondary hover:text-base-100"
            // style={{backgroundImage: `url(https://i.imgur.com/tCtVg8n.png)`,backgroundBlendMode: `color-burn`}}
            key={index}
          >
            <div className="sm:skew-x-6 step-content flex flex-col justify-start gap-1">
              <a
                href={item.companyUrl}
                className="step-title text-xl font-bold"
              >
                {item.company}
              </a>
              <div className="step-description text-lg">
                {item.position}
                <span className="badge badge-secondary ml-4 group-hover:badge-ghost">
                  {item.jobType}
                </span>
              </div>
              {item.startDate && (
                <div className="step-description text-sm">
                  {item.startDate} - {item.endDate}
                </div>
              )}
              <ul className="list-disc  list-inside text-sm">
                {item.keyPoints.map((point, index) => (
                  <li className="list-item text-wrap" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <h1 className="text-xl text-left font-bold mb-10 text-primary">
        Projects
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 gap-y-1 ">
        {projects.map((project, index) => (
          <li
            key={index}
            className="card w-80 sm:w-96 min-h-[200px] bg-base-100 group shadow-xl image-full m-auto transition-all duration-300"
          >
            <figure className="">
              <Image
                // src={project.img}
                src={`https://loremflickr.com/320/240?${index}`}
                width={500}
                height={200}
                className="bg-cover object-cover rounded-sm drop-shadow-md group-hover:opacity-25 transition-all duration-300"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.desc}</p>
              <div className="card-header-pills space-x-2 space-y-1">
                {project.tech.map((tech, index) => (
                  <span
                    className="badge badge-outline badge-sm badge-accent group-hover:badge-ghost"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="card-actions justify-end">
                {project.git && (
                  <a
                    className="btn btn-sm btn-secondary"
                    href={project.git}
                    referrerPolicy="no-referrer"
                    title="Github"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                )}
                {project.live && (
                  <a
                    className="btn btn-sm btn-secondary"
                    href={project.live}
                    referrerPolicy="no-referrer"
                    title="Github"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-browser-chrome"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                      />
                    </svg>
                  </a>
                )}
                {project.video && (
                  <a
                    className="btn btn-sm btn-secondary"
                    href={project.video}
                    referrerPolicy="no-referrer"
                    title="Github"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
