const work = [
  {
    company: "Timechain Labs",
    companyUrl: "https://timechainlabs.io/",
    position: "Svelte Developer Intern",
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
    endDate: "December 2023",
    keyPoints: [
      "Developing MERN stack applications for clients & handling mentorship sessions.",
    ],
    jobType: "part-time",
  },
  {
    company: "FalFruits",
    companyUrl: "https://falfruits.com/",
    position: "Web Developer",
    jobType: "freelance",
    keyPoints: [
      "Designed a NextJS Web application with high performance & responsiveness.",
      "Worked on SEO compliance & achieved a lighthouse performance score of 98+.",
    ],
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
const edu = [
  {
    course: "ICSE (10th)",
    school: "St. Mary's High School",
    location: "Coochbehar, West Bengal",
    endDate: "2018",
    grade: "96.8%",
  },
  {
    course: "ISC (12th)",
    school: "St. Mary's High School",
    location: "Coochbehar, West Bengal",
    endDate: "2020",
    grade: "96.5%",
  },
  {
    course: "B.Tech (Information Technology)",
    school: "Jalpaiguri Govt. Engineering College",
    location: "West Bengal",
    endDate: "2024 (ongoing)",
    grade: "9.155 CGPA (upto 6th sem)",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col items-start justify-evenly gap-y-2 w-full">
      <h1>Professional Experience</h1>
      <div className="flex flex-row flex-nowrap overflow-auto mb-4 w-[100%] relative">
        {work.map((item, index) => (
          <div
            key={index}
            className={`relative carousel-item mb-10 w-60 flex-col items-start justify-start rounded p-4 m-4 h-32 bg-neutral drop-shadow-md ${
              item.jobType === "intern"
                ? "border border-primary"
                : "border border-success"
            }`}
          >
            <div className="absolute bottom-2 right-2 z-[1] peer h-6 w-6 text-center rounded-full bg-primary-content">i</div>
            <div className="peer-hover:hidden h-full w-full">
              <h1 className="">{item.position}</h1>
              <h2 className="text-sm text-accent">
                <a href={item.companyUrl}>{item.company}</a>
              </h2>
              <h3 className="text-xs">
                {item.startDate} - {item.endDate}
              </h3>
              {item.jobType === "freelance" ? (
                <p className="text-xs">(Independent Freelancing)</p>
              ) : null}
            </div>
            <div className="hidden peer-hover:block h-full w-full">
              {item.keyPoints.map((point, index2) => (
                <p className="whitespace-normal text-xs" key={index2}>
                  &bull; {point}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <h1>Education</h1>
      <ul className="timeline timeline-vertical lg:timeline-horizontal">
        {edu.map((item, index) => (
          <li key={index} className="lg:-mt-12">
            {index == 0 ? null : <hr />}
            <div className="timeline-start">{item.endDate}</div>
            <div className="timeline-middle">
              {index == edu.length - 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="timeline-end timeline-box border-neutral">
              <h1 className="text-lg">{item.course}</h1>
              <h2 className="text-sm text-accent">{item.school}</h2>
              <h3 className="text-xs">{item.location}</h3>
              <h3 className="text-xs">{item.grade}</h3>
            </div>
            {index == edu.length - 1 ? null : <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
}
