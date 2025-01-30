import React from "react";
import Section from "./reusable/Section";
import { plans } from "../constants";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Plans = () => {
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-4 xl:space-y-6"
      >
        <div className="space-y-4 text-center xl:space-y-6">
          <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
            Our <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xs lg:text-sm xl:text-base">
            Select the plan that suits your fitness goals and let our expert
            coaches guide you every step of the way.
          </p>
        </div>
        <div className="mx-auto flex w-fit cursor-not-allowed items-center justify-between rounded-[40px] border-2 border-primary text-xs md:text-sm">
          <div className="rounded-[40px] bg-primary px-8 py-3">Mounthly</div>
          <p className="px-8">Annauly</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-9">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col gap-3 rounded-lg border-2 p-4 xl:gap-4 xl:p-6 ${
                plan.id === 2
                  ? "border-primary max-sm:-order-1"
                  : "border-secondary"
              }`}
            >
              <div
                className={`absolute left-1/2 top-4 -z-10 aspect-square w-2/3 -translate-x-1/2 max-lg:blur-[100px] lg:blur-[200px] ${
                  plan.id === 2 ? "bg-primaryVar4" : "bg-secondaryVar3"
                }`}
              />
              <div className="space-y-2 text-center xl:space-y-3">
                <p
                  className={`text-sm lg:text-base ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                >
                  Package
                </p>
                <div className="font-gagalin text-2xl xl:text-[32px]">
                  {plan.package}
                </div>
              </div>

              <div className="space-y-2 xl:space-y-3">
                <p
                  className={`text-center text-sm lg:text-base ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                >
                  Description
                </p>
                <p className="text-xs xl:text-sm">{plan.description}</p>
              </div>
              <div className="flex-1 space-y-2 xl:space-y-3">
                <p
                  className={`text-center text-sm lg:text-base ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                >
                  Features
                </p>
                <ul className="text-xs xl:text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="list-inside list-disc">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center text-lg font-bold xl:text-[28px]">
                {plan.price}$
                <span className="text-lg font-medium text-greyText">/USD</span>
              </div>
              <button
                className={`w-full rounded-[20px] py-4 text-lg font-medium ${
                  plan.id === 2
                    ? "bg-primary hover:bg-primaryVar1 focus:bg-primaryVar2"
                    : "bg-secondary hover:bg-secondaryVar1 focus:bg-secondaryVar2"
                }`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Plans;
