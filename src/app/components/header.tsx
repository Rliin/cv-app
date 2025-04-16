import { MoonStar } from "lucide-react"

const Header = () => {
  return (
    <header className="z-100 fixed top-0 right-0 left-0 flex justify-around between bg-[#030712] shadow-[0px_2px_6px_0px_rgba(0,_0,_0,_0.8)]">
      <a href="#introduction" className="flex items-center text-lg font-bold">
        {"<BC />"}
      </a>
      <nav className="flex items-center justify-end bg-[#030712] gap-5 p-5 text-sm text-gray-400 *:rounded-lg [&>a]:hover:scale-105 [&>a]:hover:text-white [&>a]:transition-all [&>a]:duration-400">
        <a href="#aboutMe">About</a>
        <a href="#work">Work</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#getInTouch">Contact</a>
        <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
        <a><MoonStar /></a>
        <button className="bg-white text-black px-4.5 py-1.5 hover:bg-slate-800 transition duration-400 hover:text-white">Download CV</button>
      </nav>
    </header>
  )
}

export default Header;