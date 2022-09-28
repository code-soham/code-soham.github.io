export default function Head() {
  return (
    <div
      className="h-screen w-full pr-16 pl-16 text-indigo-900 bg-indigo-400 flex flex-col md:flex-row justify-center md:justify-between text-5xl items-center"
      style={{
        background: `url(/assets/bg-st-stp.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="text-4xl">Hello humans...</h1>
        <h2 className="text-6xl text-white">
          I'm <span className="text-green-500 font-semibold">Soham</span>
        </h2>
        <p className="w-fit m-auto mt-3 text-xl text-black shadow-sm shadow-indigo-700 hover:bg-amber-400 cursor-pointer hover:text-orange-900 p-2 transition-all duration-700">
          Nerd &#8226; Dev &#8226; Music
        </p>
        <p className="w-fit m-auto mt-1 text-xl text-white shadow-sm shadow-indigo-700 hover:bg-amber-400 cursor-pointer hover:text-orange-900 p-2 transition-all duration-700">
          &#8226; Certified Geek
        </p>
      </div>
      <div>
        <img src={"https://i.imgur.com/DAU8ePe.png"} alt="svg" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 mx-auto">
        {downDoubleArrow()}
      </div>
    </div>
  );
}
function downDoubleArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-20 h-20 absolute bottom-0 left-0 right-0 mx-auto animate-bounce cursor-pointer"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
