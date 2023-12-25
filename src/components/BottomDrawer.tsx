const menu = [
  {
    name: "Home",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
      </svg>`,
    href: "/#",
  },
  {
    name: "About Me",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
      </svg>`,
    href: "/about",
  },
  // {
  //   name: "Work Experience",
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suitcase-lg-fill" viewBox="0 0 16 16">
  //     <path d="M7 0a2 2 0 0 0-2 2H1.5A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14H2a.5.5 0 0 0 1 0h10a.5.5 0 0 0 1 0h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2H11a2 2 0 0 0-2-2zM6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM3 13V3h1v10zm9 0V3h1v10z"/>
  //   </svg>`,
  //   href: "/experience",
  // },
];
export default function BottomDrawer() {
  return (
    <div className="fixed bottom-0 h-8 w-full sm:hidden rounded-t-xl bg-base-300">
      <div className="flex flex-row justify-evenly items-center h-8">
        {menu.map((item, index) => (
          <a
            href={item.href}
            key={index}
            className="flex items-start gap-4 justify-center"
          >
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="rounded-full devicon-home"
            ></div>
            <div className="">{item.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
