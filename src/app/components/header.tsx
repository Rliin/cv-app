import { MoonStar } from "lucide-react"

const Header = () => {
    return (
        <header className="flex justify-around between bg-[#030712]">
      <div className="flex items-center text-lg font-bold">
        {"<BC />"}
      </div>
        <nav className="flex justify-end bg-[#030712] gap-5 p-5 text-sm text-gray-400 *:rounded-lg [&>button]:hover:text-white [&>button]:transition-all [&>button]:duration-400">
          <button>About</button>
          <button>Work</button>
          <button>Testimonials</button>
          <button>Contact</button>
          <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
          <button><MoonStar/></button>
          <button className="bg-white text-black px-4.5 py-1.5 hover:bg-slate-800 transition duration-400 hover:text-white">Download CV</button>
        </nav>
      </header>
    )
}

export default Header;