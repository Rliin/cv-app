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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2 md:p-2 lg:p-5 hover:scale-101 transition-transform duration-400 ease-in-out">
                <Card className="bg-white dark:bg-[#1F2937]">
                  <CardContent className="flex aspect-square justify-center text-center px-5 xs:px-10">
                      <a
                        className="flex justify-around flex-col text-xl items-center gap-10 rounded-lg"
                        href={t(`testimonialLink${index+1}`)}
                        target="_blank"
                      >
                        <CircleUserRound size={64} color="black" />
                        <p className="text-left text-base sm:text-lg xl:text-lg text-gray-400 font-light">{t(`testimonialText${index+1}`)}</p>

                        <div className="flex flex-col items-center *:flex *:flex-row *:gap-2 *:items-center *:text-center *:text-pretty">
                          <h1 className="font-bold text-lg sm:text-xl xl:text-2xl mb-1">{t(`testimonialPerson${index+1}`)}</h1>
                          <h3 className="text-gray-400 text-base sm:text-xl lg:text-lg">{t(`testimonialTitle${index+1}`)}</h3>
                        </div>
                      </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex"/>
        <CarouselNext className="hidden lg:flex"/>
      </Carousel>
      <Wave1 />
    </section>
  );
}

export default Testimonials;
