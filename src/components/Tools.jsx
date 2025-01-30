import React, { useRef, useState } from "react";
import Section from "./reusable/Section";
import { arrowLeftWhite, arrowRight, arrowRightWhite } from "../assets";
import { tools } from "../constants";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Tools = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const amount = window.innerWidth - window.innerWidth / 2;

  const handleScroll = (scrollAmount) => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    const maxScrollLeft = scrollWidth - clientWidth;
    const newScrollPosition = Math.min(
      Math.max(scrollLeft + scrollAmount, 0),
      maxScrollLeft,
    );

    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-4"
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
            Our fitness <span className="text-primary">Tools</span>
          </h2>
          <div className="flex items-center gap-2 xl:gap-3">
            <button onClick={() => handleScroll(-amount)}>
              <img
                src={arrowLeftWhite}
                alt="-"
                className="rounded-[4px] border-2 border-white p-2"
              />
            </button>
            <button onClick={() => handleScroll(amount)}>
              <img
                src={arrowRightWhite}
                alt="-"
                className="rounded-[4px] border-2 border-white p-2"
              />
            </button>
          </div>
        </div>
        <p className="text-center text-xs lg:text-sm xl:text-base">
          Access a variety of tools to help you reach your fitness goals more
          effectively
        </p>

        <div
          ref={containerRef}
          className="relative flex items-center justify-between gap-3 overflow-scroll scroll-smooth no-scrollbar xl:gap-4"
        >
          <div className="absolute left-0 top-1/2 -z-10 h-2/3 w-1/3 -translate-y-1/2 rounded-full bg-primaryVar4 blur-[100px] md:blur-[200px]" />
          <div className="absolute right-0 top-1/2 -z-10 h-2/3 w-1/3 -translate-y-1/2 rounded-full bg-secondaryVar3 blur-[100px] md:blur-[200px]" />
          {tools.map((tool, i) => (
            <div key={i} className="relative shrink-0">
              <img
                src={tool}
                alt=""
                className="-z-10 h-[121px] w-[119.33px] lg:h-[177px] lg:w-[176px] xl:h-[223px] xl:w-[236px]"
              />
              <button className="absolute bottom-2 left-2 flex items-center gap-1">
                <div
                  className={`absolute left-0 z-10 size-5 rounded-full blur-[10px] ${
                    i % 2 === 0 ? "bg-primaryVar5" : "bg-secondaryVar3"
                  }`}
                />
                <p className="z-20 text-sm">Learn More</p>
                <img src={arrowRight} alt="" />
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Tools;
