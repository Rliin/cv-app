import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Wave1 } from "./waveSvg";
import EducationData from "@/app/data/educationData";
import PageTitle from "./pageTitle";

interface BulletPointType {
  li: string;
}

interface EducationItem {
  image: {
    src: string,
    alt: string
  },
  title: string,
  organization: string,
  bulletPointContent: BulletPointType[],
  dates: string,
}

type EducationDataType = EducationItem[];

async function Education() {
  return (
    <section className="relative bg-(--second-color) pb-40 lg:px-25 xl:px-35 dark:text-gray-400">
      <PageTitle pageName="education" hasContent={false}/>
      <ListEducation educationdata={EducationData} />
      <Wave1/>
    </section>
  )
}

async function ListEducation (props: {
  educationdata: EducationDataType;
}) {
  const t = await getTranslations("education")

  return (
    <div>
    {props.educationdata.map((education : EducationItem , index: number) => (
    <div key={index} className="flex xl:flex-row flex-col gap-5 bg-white dark:bg-[#1F2937] rounded-lg px-15 py-10 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-30 xl:x-50 2xl:mx-70 shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] hover:scale-101 transition-transform duration-400 ease-in-out">
    <div className="order-1 flex-none">
      <Image
        src={education.image.src}
        alt={education.image.alt}
        width={100}
        height={100} 
        sizes="192px"
        className="rounded-2xl"/>
    </div>
    <div className="order-3 xl:order-2 xl:px-10 flex-1">
      <h1 className="dark:text-white text-black text-xl">{t(education.title)}</h1>
      <h2 className="pb-3">{t(education.organization)}</h2>
      <ul className="list-disc list-outside">
        {education.bulletPointContent.map((bullet, bulletIndex) => (
          <li key={bulletIndex} className="mb-1">{t(bullet.li)}</li>
        ))}
      </ul>
    </div>
    <div className=" order-2 xl:order-3 whitespace-nowrap">{t(education.dates)}</div>
  </div>
    ))}
  </div>
  )
}
export default Education;