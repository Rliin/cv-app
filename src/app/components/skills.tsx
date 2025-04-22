import SkillsData from "@/app/data/skillsData";
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';


async function Skills () {
  const t = await getTranslations("skills");
  return (
    <div className="bg-white dark:bg-[#030712] py-25 lg:p-25 xl:p-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">{t("pageTitle")}</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>{t("pageContent")}</p>
      </div>
      <div>
        <ListSkills skillsdata={SkillsData}/>
      </div>
    </div>
  )
}

function ListSkills (props: { skillsdata: Array<{ logo: string, text: string }> }) {
  return(
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 mt-5">
      {props.skillsdata.map((skill, index: number) => (
        <div key={index} className="flex flex-col items-center p-4">
          <div className="mb-2">
            <Image 
              src={`/skills-logos/${skill.logo}.svg`} 
              alt={skill.text} 
              width={58} 
              height={58}/>
          </div>
          <div>
            <p className="text-center text-sm">{skill.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;