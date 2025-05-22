import Header from "@/app/components/header";
import Introduction from "@/app/components/introduction";
import AboutMe from "@/app/components/aboutMe";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Work from "@/app/components/work";
import Testimonials from "@/app/components/testimonials";
import GetInTouch from "@/app/components/getInTouch";
import Footer from "@/app/components/footer";
import Education from "../components/education";

export default function Home() {
  return (
    <div>
    <Header/>
    <Introduction/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Education/>
    <Work/>
    <Testimonials/>
    <GetInTouch/>
    <Footer/>
    </div>
  );
}
