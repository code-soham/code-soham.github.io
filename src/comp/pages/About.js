import React from "react";

export default function About(props) {
  window.scrollTo(
    {
      top: 0,
      behavior: "smooth",
    }
  );
  return (
    <div data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <h3>{props.lastPath}</h3>
      <img src="https://picsum.photos/600/600" alt="asf"/>
    </div>
  );
}
