import { getTranslations } from "next-intl/server";

interface PageTitleProps{
  pageName: string,
  hasContent?: boolean
}
//If there is no pageContent add "hasContent={false} property when calling the component."
async function PageTitle({ pageName, hasContent = true}: PageTitleProps) {
  const t = await getTranslations(pageName);

  return (
    <div className="flex flex-col gap-3 text-center text-pretty mb-10">
      <div className="flex justify-center">
        <h1 className="text-sm dark:text-white text-black px-4.5 py-1 rounded-full bg-[#E6E8EB] dark:bg-[#525A68]">
          {t("pageTitle")}
        </h1>
      </div>
      {hasContent && <p className="mx-16 md:mx-0">{t("pageContent")}</p>}
    </div>
  );
}

export default PageTitle;
