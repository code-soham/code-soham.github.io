export default function About() {
  return (
    <div
      className="w-full text-cyan-900 font-semibold bg-white flex flex-col justify-center items-center p-10 min-h-screen sm:justify-evenly"
      style={{
        background: `url(https://i.imgur.com/x62n0Al.png)`,
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl sm:text-5xl font-bold">Who Am I ?</h1>
      <div className="flex flex-col-reverse justify-evenly lg:flex-row-reverse lg:justify-center w-full lg:px-5">
        <div className="text-left m-auto lg:m-0 lg:ml-5 text-sm lg:text-2xl">
          <h1 className="text-3xl lg:text-5xl font-bold underline">
            An IT Undergrad
          </h1>
          <p className="mt-3 max-w-3xl lg:max-w-3xl">
            I am Soham Chowdhury, a junior at{" "}
            <a
              href="https://jgec.ac.in"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-200 bg-opacity-50"
            >
              Jalpaiguri Government Engineering College
            </a>{" "}
            pursuing by B.Tech in <br />{" "}
            <span className="bg-purple-800 bg-opacity-40">
              Information Technology
            </span>
            .
          </p>
          <p className="text-emerald-700 mt-3 max-w-3xl lg:max-w-3xl">
            Cut to chase, I am an avid learner and a self-taught developer (
            powered by the most wonderful peer-group in association with
            StackOverflow &amp; Google).
          </p>

          <p className="text-amber-700 mt-3 max-w-3xl lg:max-w-3xl">
            You can find me grinding on competitive programming platforms, if
            not maintaining my github graphs.
          </p>
        </div>
        <div>
          <img
            className="h-32 w-32 sm:h-52 sm:w-52 lg:h-96 lg:w-96 m-auto mb-10 border-cyan-900 border-spacing-4 rounded-full lg:rounded-none lg:rounded-l-full border-4"
            src={"https://i.imgur.com/foRoD7B.jpg"}
            alt="svg"
          />
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1BRRRgqxEyM3iTR-7Nd7oAMQfmChImCoU/view?usp=sharing"
        target={"_blank"}
        rel="noreferrer"
        className="flex justify-center scale-75 sm:scale-100 items-center text-3xl h-16 sm:h-20 w-52 bg-purple-900 bg-opacity-50 hover:bg-opacity-100 transition-all duration-700 hover:tracking-widest text-white mt-4 rounded-lg border-2 border-cyan-700"
      >
        RESUME <i className="bx bx-download"></i>
      </a>
    </div>
  );
}
