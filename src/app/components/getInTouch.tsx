import { Copy, Github, Linkedin, Mail, Phone } from "lucide-react";

function GetInTouch() {
  return (
    <section id="getInTouch" className="bg-[#030712] py-25 px-35 text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">Get in touch</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
      </div>
      <div className="flex flex-col gap-5 mt-15">
        <div className="flex flex-row gap-6 justify-center items-center">
          <Mail size={35} />
          <h1 className="text-4xl text-white">burkay.cetinkaya.ds@gmail.com</h1>
          <Copy size={35} />
        </div>
        <div className="flex flex-row gap-6 justify-center items-center">
          <Phone size={35} />
          <h1 className="text-4xl text-white">+90 554 380 4200</h1>
          <Copy size={35} />
        </div>

        <div className="flex flex-col justify-center items-center mt-15">
          <p>You may also find me on these platforms!</p>
          <div className="flex flex-row gap-3 mt-5">
          <Github />
          <Linkedin />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch;