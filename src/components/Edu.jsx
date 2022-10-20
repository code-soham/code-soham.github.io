import ed from "../utils/edu.json";
export default function Education() {
  return (
    <div className="min-h-screen w-full text-amber-900 bg-orange-400 flex flex-col justify-evenly lg:justify-center items-center">
      <h1 className=" text-4xl sm:text-5xl font-bold -mb-14 sm:mb-14">
        ? Alma Mater <Book />
        <br />
        <p className="text-sm sm:text-lg  sm:ml-10 font-mono text-white font-medium max-w-xs sm:max-w-md">
          Cooch-Behar &gt;&gt;&gt; Jalpaiguri
        </p>
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly w-full items-center">
        {ed.map((e) => (
          <div
            className="max-h-fit border-4 border-amber-800 sm:h-60 flex m-5 flex-col justify-evenly w-5/6 max-w-xl bg-gray-200 bg-opacity-60 rounded-lg shadow-lg p-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              background: `url(https://i.imgur.com/x62n0Al.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl sm:text-2xl font-bold">{e.name}</h1>
            <h1 className="text-amber-700 text-sm sm:text-xl font-semibold">
              {e.degree}
            </h1>
            <h1 className="text-sm sm:text-xl font-medium">{e.year}</h1>
            <h1 className="text-sm sm:text-2xl font-semibold">
              GRADE : {e.cgpa}
            </h1>
            <a
              className="relative"
              href={e.url}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="absolute h-12 w-12 sm:h-32 sm:w-32 rounded-full right-0 -top-10 sm:-top-32 hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-orange-400"
                src={e.avatar}
                alt={e.name + " logo"}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
function Book() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-10 h-10 inline"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}
