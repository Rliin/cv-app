import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import { Wave2 } from "./waveSvg";

async function Work() {
  const t = await getTranslations("work")
  return (
    <section id="work" className="relative bg-(--first-color) py-25 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5 px-5 text-pretty">
        <p>{t("pageContent")}</p>
      </div>

      <div>  
      <div className="work-item-utility hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="flex bg-[#FAFAFC] dark:bg-[#374151] rounded-t-lg lg:rounded-l-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/GoletPicture.png"
            alt="Golet Project"
            width={650}
            height={650}
          />
        </div>
        <div className="bg-white dark:bg-[#1F2937] rounded-b-lg lg:rounded-r-lg p-5 lg:p-15 *:mb-5">
          <h1 className="dark:text-white text-xl">Golet Web and Mobile E-commerce site</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
            <li>React</li>
            <li>Javascript</li>
            <li>Firebase</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Expo</li>
            <li>Java</li>
            <li>React Native</li>
            <li>Github</li>
            <li>Git</li>
          </ul>
          <div className="w-fit hover-effect-utility-child">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="work-item-utility hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="order-last lg:order-first bg-white dark:bg-[#1F2937] rounded-b-lg lg:rounded-l-lg p-5 lg:p-15 *:mb-5">
          <h1 className="dark:text-white text-xl">Treausure Wizard</h1>
          <p>Mobile roguelike video game inspired by Vampire Survivors.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
            <li>Unity</li>
            <li>C#</li>
            <li>Android</li>
          </ul>
          <div className="w-fit hover-effect-utility-child">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
        <div className="order-first lg:order-last flex bg-[#FAFAFC] dark:bg-[#374151] rounded-t-lg lg:rounded-r-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/TWPicture.png"
            alt="Treausure Wizard Project"
            width={650}
            height={650}
          />
        </div>

      </div>
      <div className="work-item-utility hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="flex bg-[#FAFAFC] dark:bg-[#374151] rounded-t-lg lg:rounded-l-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/GoletPicture.png"
            alt="Golet Project"
            width={650}
            height={650}
          />
        </div>
        <div className="bg-white dark:bg-[#1F2937] rounded-b-lg lg:rounded-r-lg p-5 lg:p-15 *:mb-5">
          <h1 className="dark:text-white text-xl">Fiskil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
            <li>React</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Nest.js</li>
            <li>PostgreSQL</li>
            <li>Tailwindcss</li>
            <li>Figma</li>
            <li>Cypress</li>
            <li>Storybook</li>
            <li>Git</li>
          </ul>
          <div className="w-fit hover-effect-utility-child">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
      </div>
      </div>
      <Wave2/>
    </section>
  )
}

export default Work;
