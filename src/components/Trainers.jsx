import React from "react";
import {
  arrowLeftWhite,
  arrowRight,
  arrowRightWhite,
  chevronRight,
  edward,
  josh,
  quote,
  steven,
} from "../assets";
import Section from "./reusable/Section";
import { trainers } from "../constants";

const Trainers = () => {
  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={arrowLeftWhite}
              alt="-"
              className="border-2 border-white py-2 px-4 rounded-[4px]"
            />
            <img
              src={arrowRightWhite}
              alt="-"
              className="border-2 border-white py-2 px-4 rounded-[4px]"
            />
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          At This Part you can See Some Of our Trainers And They’re Work’s.
        </p>
        <div className="flex justify-between items-center gap-3 lg:gap-6 xl:gap-10 overflow-hidden">
          {trainers.map((trainer, i) => (
            <div className="rounded-xl flex flex-col shrink-0">
              <img
                src={trainer.image}
                alt=""
                className="w-[119.33px] md:w-[214px] md:h-[220px] xl:size-[281px]"
              />
              <div className="space-y-3 px-3 bg-greyLight drop-shadow-sm rounded-xl">
                <h3 className="font-medium xl:text-2xl xl:font-bold">
                  {trainer.name}
                </h3>
                <p className="text-greyTextVar1 font-medium text-xs lg:text-sm xl:text-base">
                  {trainer.role}
                </p>
                <div className="flex items-center gap-1">
                  <div className="text-sm">Learn More</div>
                  <img src={arrowRight} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto py-2.5 px-5 text-secondary flex items-center gap-1 border border-secondary rounded-xl text-sm font-light">
          <p>View All</p>
          <img src={chevronRight} alt="" />
        </button>
      </div>
    </Section>
  );
};

export default Trainers;
