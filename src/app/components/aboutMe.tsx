import Image from 'next/image';

const AboutMe = () => {
    return (
        <div className="bg-[#111827] pt-25 px-35 text-gray-400 ">
            <div className="flex justify-center">
                <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">About Me</h1>
            </div>
            <div className="flex justify-around flex-row py-10">
                <div className="wx-1/2 flex justify-center *:rounded-lg">
                    <Image src="/PhotoAboutMe.jpg" alt="About me" width={500} height={500} />
                </div>
                <div className="w-1/2">
                    <h1 className="pb-5 text-white text-[25px]">Curious about me? Here you have it:</h1>
                    <p>
                        I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js &amp; Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        <br />
                        <br />
                        I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestis, Tailwindcss, Supabase and much more.
                        <br />
                        <br />
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                        When I&apos;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech- related bites and build in public, or you can follow me on GitHub.
                        <br />
                        <br />
                        Finally, some quick bits about me.
                        <br />
                        <br />
                        • B.E. in Computer Engineering
                        • Full time freelancer
                        • Avid learner
                        • Aspiring indie hacker
                        <br />
                        <br />
                        One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;