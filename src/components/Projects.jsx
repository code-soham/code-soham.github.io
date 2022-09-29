import data from "../utils/projects.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Projects() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1568 },
      items: 4,
    },
    desktop2: {
      breakpoint: { max: 1567, min: 1280 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1279, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  console.log(data);
  return (
    <div className="min-h-screen w-full text-slate-900 bg-gray-400 flex flex-col justify-evenly lg:justify-center items-center">
      <h1 className=" text-2xl sm:text-5xl font-bold -mb-14 sm:mb-14">
        #madeWith &#10084; <span className="text-red-700">&amp;</span> Coffee
        <br />
        <p className="text-xl sm:text-2xl font-extralight text-right">
          My Projects
        </p>
      </h1>
      <div className="w-5/6">
        <Carousel
          swipeable={true}
          draggable={true}
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={3000}
          pauseOnHover={true}
          focusOnSelect={true}
          partialVisible={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {data.map((project) => (
            <div className="group text-white">
              <div
                className="h-72 w-60 sm:h-96 sm:w-80 bg-slate-900 bg-opacity-70 sm:mx-14 rounded-2xl p-3"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundBlendMode: "difference",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="h-72 w-60 sm:h-96 sm:w-80 sm:mx-14 top-0 flex flex-col justify-end p-3 rounded-2xl left-0 bg-black bg-opacity-20 absolute  group-hover:bg-opacity-50 transition-all duration-700 ">
                <h1 className="mb-1 translate-y-20 group-hover:translate-y-0 transition-all duration-500 font-semibold text-2xl sm:text-3xl">
                  {project.name}
                </h1>
                <h2 className="mb-5 translate-y-20 group-hover:translate-y-0 transition-all duration-700 font-bold text-sm sm:text-xl">
                  {project.tech}
                </h2>
                <p className="text-sm font-semibold translate-y-32 group-hover:translate-y-0 transition-all duration-1000">
                  {project.desc}
                </p>
              </div>
              <div className="h-12 w-60 sm:h-16 sm:w-80 text-4xl bg-slate-900 bg-opacity-70 sm:mx-14 rounded-t-2xl transition-all duration-1000 -translate-y-12 sm:-translate-y-16 group-hover:translate-y-0 p-3 top-0 absolute flex flex-row justify-evenly items-center">
                <a
                  className="h-8 sm:h-10 w-8 sm:w-10 hover:text-yellow-300 transition-all duration-400"
                  href={project.git}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  className="h-8 sm:h-10 w-8 sm:w-10 hover:text-yellow-300 transition-all duration-400"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
