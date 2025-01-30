import Section from "./reusable/Section";
import { ourWebsite } from "../constants";
import { Fragment } from "react";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const OurWebsite = () => {
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative flex items-center justify-between max-md:flex-col"
      >
        <div className="absolute left-1/2 top-1/2 -z-10 h-1/4 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryVar5 blur-[100px]" />
        {ourWebsite.map((item, i) => (
          <Fragment key={item.id || i}>
            <div className="flex flex-col text-center text-sm font-medium lg:flex-row">
              <div className="">
                <div className="text-nowrap">
                  <span
                    className={`text-2xl font-bold ${
                      i % 2 === 0 ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {item.numbers}
                  </span>{" "}
                  {item.title}
                </div>
                <p className="text-greyText">{item.description}</p>
              </div>
            </div>
            <div
              className={`${
                i === ourWebsite.length - 1 ? "hidden" : ""
              } flex justify-center py-3 md:px-1 lg:py-0 xl:px-2`}
            >
              <div className="h-[3px] w-[35vw] rounded-full bg-gradient-to-r from-primary to-secondary sm:w-[30vw] md:h-16 md:w-[3px] lg:bg-gradient-to-b"></div>
            </div>
          </Fragment>
        ))}
      </motion.div>
    </Section>
  );
};

export default OurWebsite;
