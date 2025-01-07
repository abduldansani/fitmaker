import React from "react";
import Section from "./reusable/Section";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <Section>
      <div className="container grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-8 shrink-0">
          <div className="font-semibold text-xl lg:text-3xl xl:text-[40px]">
            Achive Your
          </div>
          <div className="text-2xl lg:text-4xl xl:text-5xl font-gagalin">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Fitness Goals
            </span>
          </div>
          <div className="font-semibold text-xl lg:text-4xl xl:text-[40px]">
            With Fitmaker
          </div>
        </div>
        <div className="lg:row-span-2 relative rounded-full w-fit h-fit">
          <div className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-l from-primary to-secondary flex items-center justify-center blur-xl drop-shadow-lg" />
          <img
            src={heroImg}
            alt=""
            width={169}
            height={181}
            className="lg:w-[408.32px] lg:h-[490px] xl:w-[536.45px] xl:h-[609px]"
          />
        </div>
        <div className="max-lg:col-span-2 lg:row-start-2 space-y-4">
          <div className="text-xs xl:test-sm">
            "Join the Fitmaker community and transform your fitness journey. Our
            expert coaches and personalized programs are designed to help you
            achieve your goals and exceed your expectations. Ready to make a
            change?"
          </div>
          <div className="flex items-center gap-3 justify-between">
            <button className="bg-primary font-light text-sm lg:font-medium lg:text-base xl:text-lg rounded-xl lg:rounded-2xl xl:rounded-[20px] py-3 lg:py-4 w-full">
              Start Your Journey
            </button>
            <button className="bg-transparent border border-secondary text-secondary font-light text-sm lg:font-medium lg:text-base xl:text-lg rounded-xl lg:rounded-2xl xl:rounded-[20px] py-3 lg:py-4 w-full">
              Explore Programs
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
