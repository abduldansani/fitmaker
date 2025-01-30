import React from "react";
import Section from "./reusable/Section";
import { services } from "../constants";
import { arrowRight } from "../assets";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Services = () => {
  return (
    <Section className="relative">
      <div className="absolute inset-0 h-1/2 w-full bg-primaryVar4 blur-[400px]" />
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-4 text-center xl:space-y-6"
      >
        <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-xs lg:text-sm xl:text-base">
          At This Part You Can Easily access all of our servises. take a look at
          them and chose wich ever you want.
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div key={i} className="relative">
              <img src={service} alt="" className="w-full" />
              <button className="absolute bottom-6 left-6 flex items-center gap-1">
                <div className="absolute left-0 size-5 rounded-full bg-primaryVar5 blur-[10px]" />
                <div className="md:font-regular relative text-lg font-medium md:text-xs xl:text-sm">
                  <p> Learn More</p>
                </div>
                <img src={arrowRight} alt="-" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Services;
