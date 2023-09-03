import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-6xl m-auto min-h-[95svh] flex flex-col justify-evenly pt-20 z-0">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center m-auto my-5">
        <Image
          src="https://i.imgur.com/6hUvFvt.jpg"
          height={250}
          width={250}
          alt="profile"
          className="col-span-1 m-auto rounded-lg mask mask-squircle drop-shadow-md"
        />
        <details open className="max-w-xl mx-10 m-auto my-4 md:my-0">
          <summary className="col-span-1 m-auto text-2xl" aria-expanded="true">
            Soham Chowdhury
          </summary>
          <h2 className="text-lg font-semibold">
            Software Developer & IT Undergrad (2024)
          </h2>
          <p>
            <strong>Inquisitive</strong> and passionate about technology, I
            spend my regular day building projects, solving problems & learning
            new things. I am a <strong>final year</strong> undergrad on a
            lookout for full-time opportunities in tech.
          </p>
        </details>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 space-y-1 md:space-y-0 mb-10">
        <div className="drop-shadow-lg max-w-xl col-span-1 w-[98%] min-h-[300px] mx-auto h-full sm:bg-primary bg-opacity-40 rounded-md p-4 text-primary sm:text-white">
          <h3 className="text-xl font-semibold">Education</h3>
          {/* <ul className="steps steps-vertical">
            <li data-content="" className="step step-primary">
              <div>
                Jalpaiguri Government Engineering College
              </div>
            </li>
            <li data-content="" className="step step-primary">
              Choose plan
            </li>
            <li data-content="" className="step step-primary">
              Purchase
            </li>
          </ul> */}
          <div className="collapse collapse-arrow">
            <input
              title="edu"
              placeholder="edu"
              type="radio"
              name="edu-accordion"
              defaultChecked
              readOnly
            />
            <div className="collapse-title text-xl font-medium">
              Bachelors of Technology
            </div>
            <div className="collapse-content">
              <p>Jalpaiguri Government Engineering College</p>
              <p>Information Technology 2020-24</p>
              <p>CGPA : 9.155</p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input
              title="edu"
              placeholder="edu"
              type="radio"
              name="edu-accordion"
            />
            <div className="collapse-title text-xl font-medium">
              Higher Secondary
            </div>
            <div className="collapse-content">
              <p>St. Mary&apos;s Higher Secondary School, Coochbehar</p>
              <p>ISC 2018-20</p>
              <p>Score : 96.5%</p>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input
              title="edu"
              placeholder="edu"
              type="radio"
              name="edu-accordion"
            />
            <div className="collapse-title text-xl font-medium">
              Secondary Education
            </div>
            <div className="collapse-content">
              <p>St. Mary&apos;s Higher Secondary School, Coochbehar</p>
              <p>ICSE 2018</p>
              <p>Score : 96.8%</p>
            </div>
          </div>
        </div>
        <div className="drop-shadow-lg max-w-xl col-span-1 w-[98%] min-h-[300px] mx-auto h-full sm:bg-secondary bg-opacity-40 rounded-md p-4">
          <h3 className="text-xl font-semibold text-secondary sm:text-white">Skills</h3>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-5 bg-transparent" data-theme="garden">
            <i className="colored devicon-react-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-nextjs-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-svelte-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-angularjs-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-nodejs-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-mongodb-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-cplusplus-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-git-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-ubuntu-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-amazonwebservices-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-googlecloud-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-express-original bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-tailwindcss-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-bootstrap-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-materialui-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-canva-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-premierepro-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
            <i className="colored devicon-aftereffects-plain bg-accent-content p-3 rounded-full m-auto text-4xl"></i>
          </div>
        </div>
      </section>
    </main>
  );
}
