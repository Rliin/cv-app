import { CircleUserRound } from "lucide-react";
import { getTranslations } from 'next-intl/server';
import { Wave1 } from "./waveSvg";

async function Testimonials() {
  const t = await getTranslations("testimonials")
  return (
    <section id="testimonials" className="relative bg-(--second-color) py-25 px-5 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>{t("pageContent")}</p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-18 *:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] **:[&>h3]:text-lg dark:**:[&>h1]:text-white **:[&>h1]:text-2xl **:[&>h1]:font-bold **:[&>h1]:mb-1">
        <div className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>{t("testimonialText1")}</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>{t("testimonialTitle1")}</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>{t("testimonialText2")}</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>{t("testimonialTitle2")}</h3>
          </div>
        </div>
        <div className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>{t("testimonialText3")}</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>{t("testimonialTitle3")}</h3>
          </div>
        </div>
      </div>
      <Wave1/>
    </section>
  )
}

export default Testimonials;

//https://folge.me/tools/tailwind-shadow-generator