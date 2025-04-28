import { CircleUserRound } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Wave1 } from "./waveSvg";
import PageTitle from "./pageTitle";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

async function Testimonials() {
  const t = await getTranslations("testimonials");
  return (
    <section
      id="testimonials"
      className="relative bg-(--second-color) py-25 px-5 lg:px-25 xl:px-35 dark:text-gray-400"
    >
      <PageTitle pageName="testimonials" />

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 mx-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 md:p-2 lg:p-5 hover:scale-101 transition-transform duration-400 ease-in-out">
                <Card className="bg-white dark:bg-[#1F2937]">
                  <CardContent className="flex aspect-square text-center px-10">
                      <a
                        className="flex justify-around flex-col text-xl items-center gap-10 rounded-lg"
                        href={t(`testimonialLink${index+1}`)}
                        target="_blank"
                      >
                        <CircleUserRound size={64} color="black" />
                        <p className="text-left text-gray-400 font-light">{t(`testimonialText${index+1}`)}</p>

                        <div className="flex flex-col items-center *:flex *:flex-row *:gap-2 *:items-center *:text-center *:text-pretty">
                          <h1 className="font-bold text-2xl mb-1">{t(`testimonialPerson${index+1}`)}</h1>
                          <h3 className="text-gray-400 text-lg">{t(`testimonialTitle${index+1}`)}</h3>
                        </div>
                      </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-mx-5 lg:mx-0"/>
        <CarouselNext className="-mx-5 lg:mx-0"/>
      </Carousel>

      {/* <div className="flex flex-col xl:flex-row xl:gap-18 *:shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] **:[&>h3]:text-lg dark:**:[&>h1]:text-white **:[&>h1]:text-2xl **:[&>h1]:font-bold **:[&>h1]:mb-1">
        <a className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out"
        href={t("testimonialLink1")}
        target="_blank">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p className="text-pretty">{t("testimonialText1")}</p>
          <div className="flex flex-col items-center *:flex *:flex-row *:gap-2 *:items-center">
          <h1>{t("testimonialPerson1")}</h1>
          <h3>{t("testimonialTitle1")}</h3>
          </div>
        </a>
        <a className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out"
        href={t("testimonialLink2")}
        target="_blank">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p className="text-pretty">{t("testimonialText2")}</p>
          <div className="flex flex-col items-center *:flex *:flex-row *:gap-2 *:items-center">
          <h1>{t("testimonialPerson2")}</h1>
          <h3 className="text-pretty text-center">{t("testimonialTitle2")}</h3>
          </div>
        </a>
        <a className="flex flex-col justify-between text-xl items-center gap-10 bg-white dark:bg-[#1F2937] mt-15 py-15 px-5 md:px-15 rounded-lg xl:w-1/3 mx-auto hover:scale-101 transition-transform duration-400 ease-in-out"
        href={t("testimonialLink3")}
        target="_blank">
        <CircleUserRound 
        size={64} 
        color="black"/>
          <p className="text-pretty">{t("testimonialText3")}</p>
          <div className="flex flex-col items-center">
          <h1>{t("testimonialPerson3")}</h1>
          <h3>{t("testimonialTitle3")}</h3>
          </div>
        </a>
      </div> */}
      <Wave1 />
    </section>
  );
}

export default Testimonials;

//https://folge.me/tools/tailwind-shadow-generator
