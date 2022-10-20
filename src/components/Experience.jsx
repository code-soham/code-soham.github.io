import exp from "../utils/experience.json";
export default function Experience() {
  return (
    <div className="w-full text-green-900 font-semibold bg-green-100 flex flex-col justify-center items-center sm:p-10 min-h-screen sm:justify-evenly">
      <h1 className="text-2xl sm:text-5xl font-bold">
        Experience
        <br />
        <p className="scale-75 sm:scale-100 text-sm font-bold font-mono max-w-xs sm:max-w-md">
          A <span className="text-cyan-900 font-semibold">Looooong</span> way to
          go :)
        </p>
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        {exp.map((item) => (
          <div className="w-5/6 max-w-6xl my-2 min-w-1 px-6 py-10 border-4 border-green-900 rounded-md shadow-lg bg-opacity-60 min-h-max bg-green-700 flex flex-col justify-evenly">
            <div className="mb-10">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                {item.title}
                <span className="text-sm md:text-lg font-light float-right">
                  {item.date}
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-xl font-medium">
                {item.company}&nbsp;
                <a href={item.companyUrl} rel="noreferrer" target="__blank">
                  <i class="text-2xl bx bx-right-top-arrow-circle"></i>
                </a>
              </p>
            </div>
            <ul className="text-sm md:text-base lg:text-xl font-light">
              {item.notes?.map((note) => (
                <li>&bull;&nbsp;{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
