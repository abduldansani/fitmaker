import React from "react";
import Section from "./reusable/Section";
import { services } from "../constants";
import { arrowRight } from "../assets";

const Services = () => {
  return (
    <Section className="relative">
      <div className="w-full h-1/2 absolute inset-0 bg-primaryVar4 blur-[400px]" />
      <div className="container space-y-4 xl:space-y-6 text-center">
        <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-xs lg:text-sm xl:text-base">
          At This Part You Can Easily access all of our servises. take a look at
          them and chose wich ever you want.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, i) => (
            <div key={i} className="relative">
              <img src={service} alt="" className="w-full" />
              <button className="absolute bottom-6 left-6 flex items-center gap-1">
                <div className="absolute left-0 size-5 rounded-full blur-[10px] bg-primaryVar5 " />
                <div className="relative font-medium md:font-regular text-lg md:text-xs xl:text-sm">
                  <p> Learn More</p>
                </div>
                <img src={arrowRight} alt="-" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
