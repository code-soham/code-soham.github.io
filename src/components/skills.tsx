const skills = [
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Javascript",
      "ReactJS",
      "Angular",
      "Sveltekit",
      "NextJS",
    ],
  },
  {
    category: "Backend",
    skills: ["NodeJS", "Express", "MongoDB", "Firebase", "SocketIO"],
  },
  {
    category: "Others",
    skills: [
      "Typescript",
      "Git",
      "Python",
      "Heroku",
      "Netlify",
      "Vercel",
      "AWS",
      "Google Cloud",
    ],
  },
];
export default function Skills() {
  return (
    <div className="flex flex-col px-4" id="#skills">
      <h1 className="text-lg py-2 -ml-4">What I know</h1>
      <div className="w-full flex md:flex-row flex-wrap gap-4 p-2">
        {skills.map((domain, index) => (
          <div className="flex flex-col shadow-2xl p-4 gap-4 max-w-[220px]" key={index}>
            <h1 className="text-base font-bold text-accent">{domain.category}</h1>
            <div className="flex flex-wrap gap-y-4 gap-x-2">
              {domain.skills.map((skill, index2) => (
                <div className="border border-base-200 p-1 rounded-md text-xs bg-neutral" key={index2}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
