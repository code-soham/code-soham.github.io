export default function Skills() {
  let set = [
    {
      name: "HTML",
      icon: "/html.svg",
      lev: 100,
    },
    {
      name: "CSS",
      icon: "/css3.svg",
      lev: 90,
    },
    {
      name: "JavaScript",
      icon: "/js.svg",
      lev: 85,
    },
    {
      name: "React",
      icon: "/reactjs.svg",
      lev: 70,
    },
    {
      name: "Node",
      icon: "/nodejs.svg",
      lev: 85,
    },
    {
      name: "MongoDB",
      icon: "/mongodb.svg",
      lev: 90,
    },
    {
      name: "Git",
      icon: "/git.svg",
      lev: 90,
    },
    {
      name: "Python",
      icon: "/python.svg",
      lev: 60,
    },
    {
      name: "AWS",
      icon: "/aws.svg",
      lev: 50,
    },
    {
      name: "C++",
      icon: "/c++.svg",
      lev: 60,
    },
    {
      name: "Postman",
      icon: "/postman.svg",
      lev: 90,
    },
    {
      name: "Tailwind",
      icon: "/tailwind.svg",
      lev: 95,
    },
    {
      name: "Material UI",
      icon: "/mui.png",
      lev: 90,
    },
    {
      name: "GCP",
      icon: "/gcp.svg",
      lev: 40,
    },
    {
      name: "Canva",
      icon: "/canva.svg",
      lev: 100,
    },
    {
      name: "Premiere Pro",
      icon: "/pp.svg",
      lev: 70,
    },
  ];
  return (
    <div className="w-full text-white font-semibold bg-cyan-900 flex flex-col justify-center items-center sm:p-10 min-h-screen sm:justify-evenly">
      <h1 className="text-2xl sm:text-5xl font-bold">
        What do I wield ?
        <br />
        <p className="scale-75 sm:scale-100 text-sm font-mono font-medium max-w-xs sm:max-w-md">
          A <span className="text-amber-400 font-semibold">lightsaber</span>,
          you think? or maybe the{" "}
          <span className="text-violet-400 font-semibold">Infinity Stones</span>
          !
        </p>
      </h1>
      <div className="flex flex-wrap justify-center">
        {set.map((skill, index) => (
          <div
            className="group"
            data-aos="flip-right"
            data-aos-delay={200 * index}
          >
            <div className="flex-col m-4 sm:m-10 h-16 w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 bg-gray-200 rounded-md sm:rounded-xl md:rounded-2xl lg:rounded-3xl flex justify-center items-center transition-all duration-500 hover:scale-125 hover:bg-yellow-100">
              <img
                src={process.env.PUBLIC_URL + "/assets/icons" + skill.icon}
                alt={skill.name}
                className="h-12 w-12 md:h-20 md:w-20 lg:w-28 lg:h-28 transition-all duration-700 m-20"
              />
            </div>
            <div className="h-0 group-hover:h-2 group-hover:sm:h-5  group-hover:w-20 translate-x-2 sm:translate-x-10 group-hover:md:w-24 transition-all duration-75 group-hover:lg:w-32 group-hover:visible absolute bg-gray-50 sm:-mt-5 rounded-sm">
              <div
                className={`w-0 h-full bg-blue-400 rounded-sm transition-all duration-1000 
                ${
                  skill.lev === 40
                    ? "group-hover:w-p40"
                    : skill.lev === 50
                    ? "group-hover:w-p50"
                    : skill.lev === 60
                    ? "group-hover:w-p60"
                    : skill.lev === 70
                    ? "group-hover:w-p70"
                    : skill.lev === 80
                    ? "group-hover:w-p80"
                    : skill.lev === 85
                    ? "group-hover:w-p85"
                    : skill.lev === 90
                    ? "group-hover:w-p90"
                    : skill.lev === 95
                    ? "group-hover:w-p95"
                    : "group-hover:w-p100"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
