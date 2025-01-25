import React from "react";
import Section from "./reusable/Section";
import { heroImg } from "../assets";
import HeroCta from "./HeroCta";
import { stats } from "../constants";

const Hero = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="h-full absolute left-0 -translate-x-1/2 blur-[250px] w-[260px] rounded-full bg-secondaryVar3" />
      <div className="h-full absolute right-0 translate-x-1/2 blur-[250px] w-[260px] rounded-full bg-primaryVar4" />
      <div className="container space-y-4">
        <div className="flex items-center justify-between gap-1 md:gap-4 lg:gap-8 shrink-0">
          <div className="flex flex-col items-center gap-6 xl:gap-9">
            <div className="flex flex-col items-center gap-4 lg:gap-6 xl:gap-8">
              <div className="font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-[40px]">
                Achive Your
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-gagalin">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Fitness Goals
                </span>
              </div>
              <div className="font-semibold text-xl sm:text-3xl lg:text-4xl xl:text-[40px]">
                With Fitmaker
              </div>
            </div>
            <div className="max-md:hidden">
              <HeroCta />
            </div>
          </div>
          <div className="lg:row-span-2 relative w-fit shrink-0">
            <div className="max-lg:hidden size-[70px] bg-secondary blur-xl drop-shadow-md absolute rounded-full" />
            <div className="max-lg:hidden size-[70px] bg-primary blur-xl drop-shadow-md absolute rounded-full bottom-0 right-0" />
            {stats.map((item) => (
              <div
                key={item.id}
                className={`max-lg:hidden absolute p-0.5 w-fit rounded-[20px] bg-gradient-to-b from-primary to-secondary ${item.positionClass}`}
              >
                <div className="rounded-[20px] bg-grey flex flex-col gap-2 py-2 px-6 xl:px-9">
                  <h3 className="font-medium">{item.figures}</h3>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="absolute bottom-0 -translate-y-3 lg:-left-2 xl:-left-3 -z-10 w-full aspect-square lg:w-[420.33px] xl:w-[569.71px] lg:h-[422px] xl:h-[533px] rounded-full bg-gradient-to-l from-primary to-secondary flex items-center justify-center blur-lg drop-shadow-sm" />
            <img
              src={heroImg}
              alt=""
              width={169}
              height={181}
              className="sm:w-[300px] lg:w-[408.32px] lg:h-[490px] xl:w-[536.45px] xl:h-[609px]"
            />
          </div>
        </div>
        <div className="md:hidden">
          <HeroCta />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
