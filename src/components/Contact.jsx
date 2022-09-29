import { useForm } from "@formspree/react";
export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: "bx bxl-gmail",
      link: "mailto:sc2412@it.jgec.ac.in",
    },
    {
      name: "LinkedIn",
      icon: "bx bxl-linkedin",
      link: "https://www.linkedin.com/in/code-soham/",
    },
    {
      name: "facebook",
      icon: "bx bxl-facebook",
      link: "https://www.facebook.com/soham.36.chowdhury",
    },
    {
      name: "Github",
      icon: "bx bxl-github",
      link: "https://github.com/code-soham/",
    },
    {
      name: "Instagram",
      icon: "bx bxl-instagram",
      link: "https://www.instagram.com/soham_hasnt_/",
    },
    {
      name: "Twitter",
      icon: "bx bxl-twitter",
      link: "https://twitter.com/sohamHasnt",
    },
  ];
  return (
    <div className="h-screen w-full text-red-500 bg-neutral-900 flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-5xl font-bold mb-14">Connect with me!</h1>
      <div className="mx-auto">{MyForm()}</div>
      <div className="w-5/6 p-3 flex flex-wrap flex-row justify-center items-center">
        {contacts.map((contact,index) => (
          <a
            data-aos="fade-right"
            data-aos-delay={index*100}
            className={`m-1 sm:m-3 rounded-full bg-gray-300 h-9 w-9 sm:h-14 sm:w-14 flex justify-center items-center group hover:bg-red-500 transition-all duration-700`}
            href={contact.link}
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={`${contact.icon} text-xl sm:text-2xl group-hover:text-gray-300 transition-all duration-700`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  );
}
function MyForm() {
  const [state, handleSubmit] = useForm("xayarlwj");
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-5/6 m-auto flex-col text-lg sm:text-2xl justify-evenly items-center p-5 bg-white bg-opacity-5 shadow-sm shadow-white rounded-xl"
    >
      <label className="font-light w-full my-2">
        Your email:
        <br />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email address"
          className="font-normal p-3 my-3 w-full text-sm sm:text-2xl text-cyan-900 rounded-sm"
        />
      </label>
      <label className="font-light w-full my-2">
        Your message:
        <br />
        <textarea
          name="message"
          required
          placeholder="Type your message here"
          className="font-normal my-3 p-3 w-full text-lg sm:text-2xl text-cyan-900 rounded-sm"
        ></textarea>
      </label>
      <button
        type="submit"
        className=" w-full text-sm sm:text-lg p-3 bg-red-500 text-white rounded-sm transition-all duration-700 sm:hover:bg-red-900 sm:hover:text-xl"
        disabled={state.submitting}
      >
        Transmit&nbsp;
        <i className="bx bx-rocket"></i>
      </button>
    </form>
  );
}
