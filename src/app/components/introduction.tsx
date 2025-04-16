import { Circle, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

const locationName = "Eskişehir, Türkiye";
const encodedLocationName = encodeURIComponent(locationName);
const mapsUrlByName = `https://www.google.com/maps/search/?api=1&query=${encodedLocationName}`;
const finalMapsUrl = mapsUrlByName;

const linkedInUrl = "https://www.linkedin.com/in/burkay-çetinkaya-485558225/";
const gitHubUrl = "https://github.com/Rliin";

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="flex justify-around gap-4 p-35 bg-[#030712] text-gray-400"
    >
      <div className="flex flex-col gap-y-15 text-wrap w-2/3">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Hi, I&apos;m Burkay 👋
          </h1>
          <p className="mt-4">
            I&apos;m a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="**:flex **:flex-row *:gap-2 w-fit *:my-2 hover-effect-utility-child *:items-center">
          <a href={finalMapsUrl} target="_blank">
            <MapPin />
            {locationName}
          </a>
          <a href="#getInTouch">
            <span
              className="relative size-2 flex-none rounded-full bg-green-500 before:absolute before:size-2 before:animate-ping before:rounded-full before:bg-green-500 m-0.5"
              color="#09BC78"
            />
            Available for opportunities
          </a>
        </div>
        <div className="flex flex-row gap-4 hover-effect-utility-child">
          <a href={gitHubUrl} target="_blank">
            <Github />
          </a>
          <a href={linkedInUrl} target="_blank">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="relative *:rounded-lg w-[310px]">
        <div className="absolute bg-[#374151] z-10 m-12 h-70 w-70"></div>
        <div className="relative z-20 border-10 rounded-lg border-[#030712]">
          <Image
            src="/PhotoIntroduction.jpg"
            alt="Profile"
            className="rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
