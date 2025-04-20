import { Copyright} from "lucide-react";

function Footer() {
  return (
    <div className="flex flex-row bg-[#FBFAFC] dark:bg-[#111827] justify-center items-center dark:text-gray-300 gap-2 p-5">
      <Copyright />
      <h1>2025</h1>
      <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-gray-800 dark:via-gray-100 to-transparent opacity-25"></div>
      <h1>Burkay</h1>
    </div>
  )
}

export default Footer;