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
const socials = [
  {
    name: "Instagram",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5179e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`,
    href: "https://www.instagram.com/soham_hasnt_/",
  },
  {
    name: "Linkedin",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0277b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    href: "https://www.linkedin.com/in/code-soham/",
  },
  {
    name: "Github",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    href: "https://github.com/code-soham",
  },
];
export default function Sidebar() {
  return (
    <div className="hidden md:block w-64">
      <div className="fixed z-50 top-[10dvh] w-64 h-[82dvh] rounded-md drop-shadow-sm bg-base-200 text-neutral-content text-opacity-50">
        <div className="flex flex-col py-12 space-y-6 items-start justify-center m-auto w-2/3">
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
        <div className="w-5/6 m-auto">Socials</div>
        <div className="flex flex-col py-6 space-y-6 items-start justify-center m-auto w-2/3">
          {socials.map((item, index) => (
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
    </div>
  );
}
