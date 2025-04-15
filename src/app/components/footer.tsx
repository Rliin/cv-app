import { Copyright, Heart } from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-row bg-[#111827] justify-center items-center text-gray-300 gap-2 p-5">
      <Copyright />
      <h1>2023</h1>
      <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-gray-500 to-transparent opacity-25"></div>
      <h1>written with</h1>
      <Heart fill="red" color="red" size="18"/>
      <h1>by Burkay</h1>
    </div>
  )
}

export default Footer;