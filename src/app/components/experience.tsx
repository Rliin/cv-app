import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Wave1 } from "./waveSvg";
import ExperienceData from "@/app/data/experienceData";

interface BulletPointType {
  li: string;
}

interface ExperienceItem {
  image: {
    src: string,
    alt: string
  },
  title: string,
  organization: string,
  bulletPointContent: BulletPointType[],
  dates: string,
}

type ExperienceDataType = ExperienceItem[];

async function Experience() {
  const t = await getTranslations("experience")
  return (
    <section className="relative bg-(--second-color) py-25 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5 px-5 text-pretty">
        <p>{t("pageContent")}</p>
      </div>
      <ListExperience experiencedata={ExperienceData} />
      <Wave1/>
    </section>
  )
}

async function ListExperience (props: {
  experiencedata: ExperienceDataType;
}) {
  const t = await getTranslations("experience")

  return (
    <div>
    {props.experiencedata.map((experience : ExperienceItem , index: number) => (
    <div key={index} className="flex xl:flex-row flex-col gap-5 justify-around bg-white dark:bg-[#1F2937] rounded-lg px-15 py-10 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out">
    <div className="order-1">
      <Image
        src={experience.image.src}
        alt={experience.image.alt}
        width={68}
        height={68} 
        className="rounded-2xl w-fit"/>
    </div>
    <div className="order-3 xl:order-2 xl:px-10">
      <h1 className="dark:text-white text-black text-xl">{t(experience.title)}</h1> {/*<-- Working here */}
      <h2 className="pb-3">{t(experience.organization)}</h2>
      <ul className="list-disc list-outside">
        {experience.bulletPointContent.map((bullet, bulletIndex) => (
          <li key={bulletIndex} className="mb-1">{t(bullet.li)}</li>
        ))}
      </ul>
    </div>
    <div className=" order-2 xl:order-3 whitespace-nowrap">{t(experience.dates)}</div>
  </div>
    ))}
  </div>
  )
}
export default Experience;