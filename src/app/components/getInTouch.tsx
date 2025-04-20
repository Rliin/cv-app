import { Github, Linkedin, Mail, Phone } from "lucide-react";

const linkedInUrl = "https://www.linkedin.com/in/burkay-çetinkaya-485558225/";
const gitHubUrl = "https://github.com/Rliin";

function GetInTouch() {
  return (
    <section id="getInTouch" className="bg-white dark:bg-[#030712] py-25 px-10 lg:px-25 xl:px-35 dark:text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">Get in touch</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
      </div>
      <div className="flex flex-col gap-5 mt-15 hover-effect-utility-child">
        <div className="flex flex-row gap-6 justify-center items-center">
          <Mail size={35}/>
          <a href="mailto:burkay.cetinkaya.ds@gmail.com" className="text-lg lg:text-[min(2vw,2.5rem)] dark:text-white">burkay.cetinkaya.ds@gmail.com</a>
          {/* <Copy size={35}/> */}
        </div>
        <div className="flex flex-row gap-6 justify-center items-center">
          <Phone size={35} />
          <a href="tel:+905543804200" className="text-lg lg:text-[2vw] dark:text-white">+90 554 380 4200</a>
          {/* <Copy size={35} /> */}
        </div>
      </div>

        <div className="flex flex-col justify-center items-center mt-15 ">
          <p>You may also find me on these platforms!</p>
          <div className="flex flex-row gap-3 mt-5 hover-effect-utility-child">
          <a href={gitHubUrl} target="_blank"><Github /></a>
          <a href={linkedInUrl} target="_blank"><Linkedin /></a>
          </div>
        </div>
    </section>
  )
}

export default GetInTouch;