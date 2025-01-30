import { useRef, useState } from "react";
import {
  arrowLeftWhite,
  arrowRight,
  arrowRightWhite,
  chevronRight,
} from "../assets";
import Section from "./reusable/Section";
import { trainers } from "../constants";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Trainers = () => {
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
        className="container space-y-4 xl:space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-center text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => handleScroll(-amount)}>
              <img
                src={arrowLeftWhite}
                alt="-"
                className="rounded-[4px] border-2 border-white px-4 py-2"
              />
            </button>
            <button onClick={() => handleScroll(amount)}>
              <img
                src={arrowRightWhite}
                alt="-"
                className="rounded-[4px] border-2 border-white px-4 py-2"
              />
            </button>
          </div>
        </div>
        <p className="text-center text-xs lg:text-sm xl:text-base">
          At This Part you can See Some Of our Trainers And They’re Work’s.
        </p>
        <div
          ref={containerRef}
          className="relative flex items-center justify-between gap-3 overflow-scroll scroll-smooth pb-1 no-scrollbar lg:gap-6 xl:gap-10"
        >
          <div className="absolute bottom-2 left-0 h-1/3 w-1/2 rounded-full bg-primaryVar5 blur-[350px]" />
          <div className="absolute bottom-2 right-0 h-1/3 w-1/2 rounded-full bg-secondaryVar3 blur-[350px]" />
          {trainers.map((trainer, i) => (
            <div key={trainer.id} className="flex shrink-0 flex-col rounded-xl">
              <img
                src={trainer.image}
                alt=""
                className="w-[119.33px] md:h-[220px] md:w-[214px] xl:size-[281px]"
              />
              <div className="space-y-3 rounded-xl bg-greyLight px-3 drop-shadow-sm">
                <h3 className="font-medium xl:text-2xl xl:font-bold">
                  {trainer.name}
                </h3>
                <p className="text-xs font-medium text-greyTextVar1 lg:text-sm xl:text-base">
                  {trainer.role}
                </p>
                <button className="relative flex items-center gap-1">
                  <div
                    className={`absolute left-0 z-10 size-5 rounded-full blur-[10px] ${
                      i % 2 === 0 ? "bg-primaryVar5" : "bg-secondaryVar3"
                    }`}
                  />
                  <div className="text-sm">Learn More</div>
                  <img src={arrowRight} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto flex items-center gap-1 rounded-xl border border-secondary px-5 py-2.5 text-sm font-light text-secondary">
          <p>View All</p>
          <img src={chevronRight} alt="" />
        </button>
      </motion.div>
    </Section>
  );
};

export default Trainers;
