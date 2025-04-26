import { Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { WaveOpacity } from "./waveSvg";

const photoIntroduction = "/PhotoIntroduction.jpg";
const linkedInUrl = "https://www.linkedin.com/in/burkay-çetinkaya/";
const gitHubUrl = "https://github.com/Rliin";

async function Introduction() {
  const t = await getTranslations("introduction");
  const locationName = t("location");
  const encodedLocationName = encodeURIComponent(locationName);
  const mapsUrlByName = `https://www.google.com/maps/search/?api=1&query=${encodedLocationName}`;
  const finalMapsUrl = mapsUrlByName;

  return (
    <section
      id="introduction"
      className="relative flex flex-col lg:flex-row justify-around gap-4 lg:p-25 xl:p-35 py-20 bg-(--first-color) dark:text-gray-400"
    >
      <div className="order-last mx-auto mt-20 lg:mt-0 text-left lg:order-first flex flex-col gap-y-15 text-wrap w-2/3">
        <div>
          <h1 className="text-5xl font-bold dark:text-white">{t("title")}</h1>
          <p className="mt-4">{t("text")}</p>
        </div>
        <div className="**:flex **:flex-row *:gap-2 w-fit *:my-2 hover-effect-utility-child *:items-center">
          <a href={finalMapsUrl} target="_blank">
            <MapPin />
            {locationName}
          </a>
          <a href="#getInTouch">
            <span
              className="relative size-2 flex-none rounded-full bg-green-500 before:absolute before:size-2 before:animate-ping before:rounded-full before:bg-green-500 m-2"
              color="#09BC78"
            />
            {t("availability")}
          </a>
        </div>
        <div className="flex flex-row gap-4 hover-effect-utility-child">
          <a href={gitHubUrl} target="_blank">
            <Github />
          </a>
          <a href={linkedInUrl} target="_blank" title="LinkedIn">
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="order-first lg:order-last *:rounded-lg w-[310px] mx-auto">
        <div className="absolute bg-[#E6E8EB] dark:bg-[#374151] z-10 m-12 h-70 w-70"></div>
        <div className="relative z-20 border-10 rounded-lg border-white dark:border-[#030712] h-[310px] w-[310px]">
          <Image
            fill={true}
            src={photoIntroduction}
            alt="Profile"
            className="rounded-lg object-cover"
            priority={true}
            sizes="290px"
          />
        </div>
      </div>

      <WaveOpacity color="second-color" />

    </section>
  );
}

export default Introduction;
