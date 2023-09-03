import SwitchTheme from "./theme-switch";

export default function Navbar() {
  return (
    <div className="shadow-sm fixed w-full bg-base-100 z-50">
        <div className="navbar max-w-6xl m-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a>Works</a>
              <ul className="p-2">
                <li>
                  <a href="/experience">Experience</a>
                </li>
                <li>
                  <a href="/achievements">Achievements</a>
                </li>
              </ul>
            </li>
            <li>
              <button className="">Contact Me</button>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" href="/">Home</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/about">About Me</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Works</summary>
              <ul className="p-2">
                <li>
                  <a href="/experience">Experience</a>
                </li>
                <li>
                  <a href="/achievements">Achievements</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button className="">Contact Me</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
      </div>
    </div>
    </div>
  );
}
