import { ExternalLink } from "lucide-react";
import Image from "next/image";

function Work() {
  return (
    <section id="work" className="bg-[#030712] py-25 px-35 text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">Work</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>Some of the noteworthy projects I have built:</p>
      </div>

      <div>  
      <div className="work-item-utility">
        <div className="flex bg-[#374151] rounded-l-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/ProjectPicture.png"
            alt="Golet Project"
            width={650}
            height={650}
          />
        </div>
        <div className="bg-[#1F2937] rounded-r-lg p-15 *:mb-5">
          <h1 className="text-white text-xl">Fiskil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
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
          <div className="w-fit hover:text-white">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="work-item-utility">
        <div className="bg-[#1F2937] rounded-l-lg p-15 *:mb-5">
          <h1 className="text-white text-xl">Fiskil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
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
          <div className="w-fit hover:text-white">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
        <div className="flex bg-[#374151] rounded-r-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/ProjectPicture.png"
            alt="Golet Project"
            width={650}
            height={650}
          />
        </div>

      </div>
      <div className="work-item-utility">
        <div className="flex bg-[#374151] rounded-l-lg items-center justify-center">
          <Image
            className="rounded-lg m-12"
            src="/ProjectPicture.png"
            alt="Golet Project"
            width={650}
            height={650}
          />
        </div>
        <div className="bg-[#1F2937] rounded-r-lg p-15 *:mb-5">
          <h1 className="text-white text-xl">Fiskil</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
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
          <div className="w-fit hover:text-white">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Work;
