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
              className="text-amber-900"
            >
              Jalpaiguri Government Engineering College
            </a>{" "}
            pursuing by B.Tech in <br />{" "}
            <span className="text-purple-800">Information Technology</span>.
          </p>
          <p className="text-emerald-800 mt-3 max-w-3xl lg:max-w-3xl">
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
    </div>
  );
}
