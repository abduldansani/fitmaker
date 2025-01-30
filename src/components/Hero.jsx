import React from "react";
import Section from "./reusable/Section";
import { heroImg } from "../assets";
import HeroCta from "./HeroCta";
import { stats } from "../constants";

import { motion } from "motion/react";
import { revealFromRight, revealFromTop } from "../motion/hero";

const Hero = () => {
  return (
    <Section className="relative overflow-hidden">
      <div className="absolute left-0 h-full w-[260px] -translate-x-1/2 rounded-full bg-secondaryVar3 blur-[250px]" />
      <div className="absolute right-0 h-full w-[260px] translate-x-1/2 rounded-full bg-primaryVar4 blur-[250px]" />
      <div className="container space-y-4">
        <div className="flex shrink-0 items-center justify-between gap-1 md:gap-4 lg:gap-8">
          <div className="flex flex-col items-center gap-6 xl:gap-9">
            <motion.div
              variants={revealFromTop}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-4 lg:gap-6 xl:gap-8"
            >
              <div className="text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-[40px]">
                Achive Your
              </div>
              <div className="font-gagalin text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Fitness Goals
                </span>
              </div>
              <div className="text-xl font-semibold sm:text-3xl lg:text-4xl xl:text-[40px]">
                With Fitmaker
              </div>
            </motion.div>
            <div className="max-md:hidden">
              <HeroCta />
            </div>
          </div>
          <motion.div
            variants={revealFromRight}
            initial="hidden"
            animate="visible"
            className="relative w-fit shrink-0 lg:row-span-2"
          >
            <div className="absolute size-[70px] rounded-full bg-secondary blur-xl drop-shadow-md max-lg:hidden" />
            <div className="absolute bottom-0 right-0 size-[70px] rounded-full bg-primary blur-xl drop-shadow-md max-lg:hidden" />
            {stats.map((item, i) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + 0.2 * i }}
                key={item.id}
                className={`absolute w-fit rounded-[20px] bg-gradient-to-b from-primary to-secondary p-0.5 max-lg:hidden ${item.positionClass}`}
              >
                <div className="flex flex-col gap-2 rounded-[20px] bg-grey px-6 py-2 xl:px-9">
                  <h3 className="font-medium">{item.figures}</h3>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="absolute bottom-0 -z-10 flex aspect-square w-full -translate-y-3 items-center justify-center rounded-full bg-gradient-to-l from-primary to-secondary blur-lg drop-shadow-sm lg:-left-2 lg:h-[422px] lg:w-[420.33px] xl:-left-3 xl:h-[533px] xl:w-[569.71px]" />
            <img
              src={heroImg}
              alt=""
              width={169}
              height={181}
              className="sm:w-[300px] lg:h-[490px] lg:w-[408.32px] xl:h-[609px] xl:w-[536.45px]"
            />
          </motion.div>
        </div>
        <div className="md:hidden">
          <HeroCta />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
