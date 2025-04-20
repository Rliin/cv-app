import { Copyright} from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-row bg-[#111827] justify-center items-center text-gray-300 gap-2 p-5">
      <Copyright />
      <h1>2025</h1>
      <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-gray-100 to-transparent opacity-25"></div>
      <h1>written by Burkay</h1>
    </div>
  )
}

export default Footer;