import React from "react";
import Section from "./reusable/Section";
import { arrowLeftWhite, arrowRight, arrowRightWhite } from "../assets";
import { tools } from "../constants";

const Tools = () => {
  return (
    <Section>
      <div className="container space-y-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl">
            Our fitness <span className="text-primary">Tools</span>
          </h2>
          <div className="flex items-center gap-2 xl:gap-3">
            <img
              src={arrowLeftWhite}
              alt="-"
              className="border-2 border-white p-2 rounded-[4px]"
            />
            <img
              src={arrowRightWhite}
              alt="-"
              className="border-2 border-white p-2 rounded-[4px]"
            />
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          Access a variety of tools to help you reach your fitness goals more
          effectively
        </p>

        <div className="flex gap-3 xl:gap-4 items-center justify-between overflow-hidden">
          {tools.map((tool, i) => (
            <div key={i} className="shrink-0 relative">
              <img
                src={tool}
                alt=""
                className="w-[119.33px] h-[121px] lg:w-[176px] lg:h-[177px] xl:w-[236px] xl:h-[223px]"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <div className="text-sm">Learn More</div>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tools;
