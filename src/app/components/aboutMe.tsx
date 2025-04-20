import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="aboutMe"
      className="bg-[#111827] py-25 lg:p-25 xl:p-35 px-20 text-gray-400 "
    >
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">
          About Me
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-10 py-10">
        <div className="flex justify-center *:rounded-lg lg:w-1/2">
            <div>
          <Image
            src="/PhotoAboutMe.jpg"
            alt="About me"
            height={250}
            width={400}
            className="rounded-lg"
            />
            </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="pb-5 text-white text-[25px]">
            Curious about me? Here you have it:
          </h1>
          <p>
            I&apos;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js &amp; Node.js). I am very
            enthusiastic about bringing the technical and visual aspects of
            digital products to life. User experience, pixel perfect design, and
            writing clear, readable, highly performant code matters to me.
            <br />
            <br />
            I began my journey as a web developer in 2015, and since then,
            I&apos;ve continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my thirties, 7 years after starting my web development journey,
            I&apos;m building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestis, Tailwindcss,
            Supabase and much more.
            <br />
            <br />
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development. When I&apos;m
            not in full-on developer mode, you can find me hovering around on
            twitter or on indie hacker, witnessing the journey of early startups
            or enjoying some free time. You can follow me on Twitter where I
            share tech- related bites and build in public, or you can follow me
            on GitHub.
            <br />
            <br />
            Finally, some quick bits about me.
          </p>
          <br />
          <ol className="*:m-1 grid grid-cols-2">
            <li> • B.E. in Computer Engineering </li>
            <li> • Full time freelancer </li>
            <li> • Avid learner </li>
            <li> • Aspiring indie hacker </li>
          </ol>
          <br />
          <p>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
