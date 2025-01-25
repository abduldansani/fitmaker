import React from "react";
import Section from "./reusable/Section";
import { plans } from "../constants";

const Plans = () => {
  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="space-y-4 xl:space-y-6 text-center">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl">
            Our <span className="text-primary">Plans</span>
          </h2>
          <p className="text-xs lg:text-sm xl:text-base">
            Select the plan that suits your fitness goals and let our expert
            coaches guide you every step of the way.
          </p>
        </div>
        <div className="cursor-not-allowed w-fit mx-auto rounded-[40px] border-2 border-primary flex items-center justify-between text-xs md:text-sm">
          <div className="bg-primary rounded-[40px] py-3 px-8">Mounthly</div>
          <p className="px-8">Annauly</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-9">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-4 xl:p-6 border-2 rounded-lg flex flex-col gap-3 xl:gap-4 ${
                plan.id === 2
                  ? "max-sm:-order-1 border-primary"
                  : "border-secondary"
              }`}
            >
              <div
                className={`absolute w-2/3 aspect-square top-4 left-1/2 -translate-x-1/2 max-lg:blur-[100px] lg:blur-[200px] -z-10 ${
                  plan.id === 2 ? "bg-primaryVar4" : "bg-secondaryVar3"
                }`}
              />
              <div className="space-y-2 xl:space-y-3 text-center">
                <p
                  className={`text-sm ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                  lg:text-base
                >
                  Package
                </p>
                <div className="font-gagalin text-2xl xl:text-[32px]">
                  {plan.package}
                </div>
              </div>

              <div className="space-y-2 xl:space-y-3">
                <p
                  className={`text-xm  text-center ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                  lg:text-base
                >
                  Description
                </p>
                <p className="text-xs xl:text-sm">{plan.description}</p>
              </div>
              <div className="space-y-2 xl:space-y-3 flex-1">
                <p
                  className={`text-xm  text-center ${
                    plan.id === 2 ? "text-primary" : "text-secondary"
                  }`}
                  lg:text-base
                >
                  Features
                </p>
                <ul className="text-xs xl:text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center text-lg font-bold xl:text-[28px]">
                {plan.price}$
                <span className="text-greyText font-medium text-lg">/USD</span>
              </div>
              <button
                className={`font-medium text-lg rounded-[20px] py-4 w-full ${
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
      </div>
    </Section>
  );
};

export default Plans;
