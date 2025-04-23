import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Wave1 } from "./waveSvg";

const redgiantLogoSrc = "/experience-logos/redgiantLogo.jpg"
const devnetLogoSrc = "/experience-logos/devnetLogo.jpg"
const iotechLogoSrc = "/experience-logos/iotechLogo.jpg"

async function Experience() {
  const t = await getTranslations("experience")
  return (
    <section className="relative bg-(--second-color) py-25 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>{t("pageContent")}</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="order-1">
          <Image
            src={iotechLogoSrc}
            alt="iotech logo"
            width={68}
            height={68} 
            className="rounded-2xl"/>
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Frontend Developer</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Feb 2025 - Present</div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="order-1">
          <Image
            src={devnetLogoSrc}
            alt="devnet logo"
            width={68}
            height={68} 
            className="rounded-2xl"/>
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Game Developer Intern</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Jul 2024 - Sep 2024</div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out">
        <div className="order-1">
          <Image
            src={redgiantLogoSrc}
            alt="red giant rover logo"
            width={68}
            height={68} 
            className="rounded-2xl"/>
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Marketing and Sponsorship Coordinator</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Feb 2021 - Sep 2023</div>
      </div>
      <Wave1/>
    </section>
  )
}

/* function ListExperience () {
  return (
    <></>
  )
} */
export default Experience;