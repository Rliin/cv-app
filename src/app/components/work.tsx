/* import { ExternalLink } from "lucide-react"; */
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Wave2 } from "./waveSvg";

async function Work() {
  const t = await getTranslations("work");
  return (
    <section
      id="work"
      className="relative bg-(--first-color) py-25 lg:px-25 xl:px-35 dark:text-gray-400"
    >
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">
          {t("pageTitle")}
        </h1>
      </div>
      <div className="flex justify-center pt-5 px-5 text-pretty">
        <p>{t("pageContent")}</p>
      </div>

      <div>
        <div className="work-item-utility hover:scale-101 transition-transform duration-400 ease-in-out">
          <div className="flex bg-[#FAFAFC] dark:bg-[#374151] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none items-center justify-center">
            <Image
              className="rounded-lg m-12"
              src="/GoletPicture.png"
              alt="Golet Project"
              width={1500}
              height={650}
            />
          </div>
          <div className="bg-white dark:bg-[#1F2937] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none p-5 lg:p-15 *:mb-5">
            <h1 className="dark:text-white text-xl">
              {t("workTitle1")}
            </h1>
            <p>
            {t("workText1")}
            </p>
            <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
              <li>React</li>
              <li>Javascript</li>
              <li>Firebase</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Expo</li>
              <li>Kotlin</li>
              <li>React Native</li>
              <li>Github</li>
              <li>Git</li>
            </ul>
            {/* <div className="w-fit hover-effect-utility-child">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div> */}
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row mt-15 mx-10
  shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out bg-white dark:bg-[#1F2937] rounded-full"
        >
          <div className="bg-white dark:bg-[#1F2937] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-5 lg:p-15 *:mb-5">
            <h1 className="dark:text-white text-xl">{t("workTitle2")}</h1>
            <p>{t("workText2")}</p>

            {/* <div className="w-fit hover-effect-utility-child">
            <a
            href="https://rliin.github.io/rock-paper_scissors-website/"
            target="_blank">
            <ExternalLink className="m-2" />
            </a>
            </div> */}
          </div>
          <div className="flex bg-white dark:bg-[#1F2937] p-4 rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none items-center justify-center">
            <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
              <li>React</li>
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Zustand</li>
              <li>Auth.js</li>
              <li>Tailwindcss</li>
              <li>Shadcn</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
        <div className="work-item-utility hover:scale-101 transition-transform duration-400 ease-in-out">
          <div className="order-last lg:order-first bg-white dark:bg-[#1F2937] rounded-b-lg lg:rounded-l-lg lg:rounded-br-none p-5 lg:p-15 *:mb-5">
            <h1 className="dark:text-white text-xl">{t("workTitle3")}</h1>
            <p>{t("workText3")}</p>
            <ul className="*:px-7 *:py-1 *:mr-2 *:my-1 *:bg-[#E6E8EA] dark:*:bg-[#374151] *:rounded-full flex flex-wrap font-bold">
              <li>Unity</li>
              <li>C#</li>
              <li>Android</li>
              <li>TextMeshPro</li>
              <li>URP</li>
            </ul>
            {/* <div className="w-fit hover-effect-utility-child">
            <a
              href="https://rliin.github.io/rock-paper_scissors-website/"
              target="_blank">
              <ExternalLink className="m-2" />
            </a>
          </div> */}
          </div>
          <div className="order-first lg:order-last flex bg-[#FAFAFC] dark:bg-[#374151] rounded-t-lg lg:rounded-r-lg lg:rounded-tl-none items-center justify-center">
            <Image
              className="rounded-lg m-12"
              src="/TWPicture.png"
              alt="Treausure Wizard Project"
              width={1500}
              height={650}
            />
          </div>
        </div>
        
      </div>
      <Wave2 />
    </section>
  );
}

export default Work;
