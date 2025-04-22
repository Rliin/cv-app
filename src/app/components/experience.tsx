import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

const upworkLogoSrc = "/upwork-svgrepo-com.svg"

async function Experience() {
  const t = await getTranslations("experience")
  return (
    <section className="bg-[#FBFAFC] dark:bg-[#111827] py-25 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>{t("pageContent")}</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="order-1">
          <Image
            src={upworkLogoSrc}
            alt="upwork logo"
            width={68}
            height={68} />
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Sr. Frontend Developer</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Nov 2021 - Present</div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="order-1">
          <Image
            src={upworkLogoSrc}
            alt="upwork logo"
            width={68}
            height={68} />
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Sr. Frontend Developer</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Nov 2021 - Present</div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg p-15 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="order-1">
          <Image
            src={upworkLogoSrc}
            alt="upwork logo"
            width={68}
            height={68} />
        </div>
        <div className="order-3 lg:order-2 lg:px-20">
          <h1 className="text-white text-xl pb-3">Sr. Frontend Developer</h1>
          <ul className="list-disc ml-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
            <li>Ut enim ad minim veniam</li>
            <li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          </ul>
        </div>
        <div className=" order-2 lg:order-3 whitespace-nowrap">Nov 2021 - Present</div>
      </div>
    </section>
  )
}

/* function ListExperience () {
  return (
    <></>
  )
} */
export default Experience;