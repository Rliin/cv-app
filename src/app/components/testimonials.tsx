import { CircleUserRound } from "lucide-react";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#111827] py-25 px-5 lg:px-25 xl:px-35 text-gray-400">
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#525A68]">Testimonials</h1>
      </div>
      <div className="flex justify-center pt-5">
        <p>Nice things people have said about me:</p>
      </div>
      <div className="flex flex-col xl:flex-row xl:gap-18 *:shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.8)] **:[&>h3]:text-lg **:[&>h1]:text-white **:[&>h1]:text-2xl **:[&>h1]:font-bold **:[&>h1]:mb-1">
        <div className="flex flex-col text-xl items-center gap-10 bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>Founder - xyz.com</h3>
          </div>
        </div>
        <div className="flex flex-col text-xl items-center gap-10 bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>“Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.”</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>Founder - abc.com</h3>
          </div>
        </div>
        <div className="flex flex-col text-xl items-center gap-10 bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p>“Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.”</p>
          <div className="flex flex-col items-center">
          <h1>John Doe</h1>
          <h3>Freelancer</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;

//https://folge.me/tools/tailwind-shadow-generator