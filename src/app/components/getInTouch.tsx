import { Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import { Wave2 } from "./waveSvg";

const linkedInUrl = "https://www.linkedin.com/in/burkay-çetinkaya/";
const gitHubUrl = "https://github.com/Rliin";

async function GetInTouch() {
  const t = await getTranslations('getInTouch')
  return (
    <section id="getInTouch" className="relative bg-(--first-color) py-25 px-10 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>{t("pageContent")}</p>
      </div>
      <div className="flex flex-col gap-5 mt-15 hover-effect-utility-child *:w-fit *:mx-auto">
        <div className="flex flex-row gap-6 justify-center items-center">
          <Mail size={35}/>
          <a href="mailto:burkay.cetinkaya.ds@gmail.com" className="text-lg lg:text-[min(2vw,2.5rem)] dark:text-white">burkay.cetinkaya.ds@gmail.com</a>
          {/* <Copy size={35}/> */}
        </div>
        
      </div>

        <div className="flex flex-col justify-center items-center mt-15 ">
          <p>{t("text")}</p>
          <div className="flex flex-row gap-3 mt-5 hover-effect-utility-child">
          <a href={gitHubUrl} target="_blank"><Github /></a>
          <a href={linkedInUrl} target="_blank"><Linkedin /></a>
          </div>
        </div>
        <Wave2/>
    </section>
  )
}

export default GetInTouch;