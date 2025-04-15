import SkillsData from "@/app/data/skillsData";
import Image from 'next/image';

function Skills () {
  return (
    <div className="bg-[#030712] py-25 px-35 text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">Skills</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div>
        <ListSkills skillsdata={SkillsData}/>
      </div>
    </div>
  )
}

function ListSkills (props: any) {
  return(
    <div className="grid grid-cols-8 mt-5">
      {props.skillsdata.map((skill: any, index: number) => (
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