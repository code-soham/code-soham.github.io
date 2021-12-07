function getDirection(l, c) {
  const pages = ["/", "/about", "/code", "/resume"];
  if (l === c) {
    return "";
  } else {
    // console.log(pages.indexOf(l) - pages.indexOf(c));
    return pages.indexOf(l) < pages.indexOf(c)
      ? "animate__animated animate__slideInRight"
      : "animate__animated animate__slideInLeft";
  }
}

module.exports = getDirection;
