import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Wave1 } from "./waveSvg";

async function AboutMe() {
  const t = await getTranslations("aboutMe");
  return (
    <section
      id="aboutMe"
      className="relative bg-(--second-color) py-25 lg:px-25 xl:px-35 px-10 dark:text-gray-400 "
    >
      <div className="flex justify-center">
        <h1 className="text-sm px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">
          {t("pageTitle")}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-10 py-10">
        <div className="flex justify-center *:rounded-lg lg:w-1/2 px-10">
          <div>
            <Image
              src="/PhotoAboutMe.jpg"
              alt="About me"
              height={250}
              width={400}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          <h1 className="pb-5 dark:text-white text-[25px]">{t("title")}</h1>
          <p>
            {t("text1")}
            <br />
            <br />
            {t("text2")}
            <br />
            <br />
            {t("text3")}
            <br />
            <br />
            {t("text4")}
          </p>
          <br />
          <ol className="*:m-1 grid grid-cols-2">
            <li> • {t("li1")} </li>
            <li> • {t("li2")} </li>
            <li> • {t("li3")} </li>
            <li> • {t("li4")} </li>
          </ol>
          <br />
          <p>{t("text5")}</p>
        </div>
      </div>
      <Wave1/>
    </section>
  );
}

export default AboutMe;
