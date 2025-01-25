import React, { useRef, useState } from "react";
import Section from "./reusable/Section";
import { arrowLeftWhite, arrowRight, arrowRightWhite } from "../assets";
import { tools } from "../constants";

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
      maxScrollLeft
    );

    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <Section>
      <div className="container space-y-4">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl">
            Our fitness <span className="text-primary">Tools</span>
          </h2>
          <div className="flex items-center gap-2 xl:gap-3">
            <button onClick={() => handleScroll(-amount)}>
              <img
                src={arrowLeftWhite}
                alt="-"
                className="border-2 border-white p-2 rounded-[4px]"
              />
            </button>
            <button onClick={() => handleScroll(amount)}>
              <img
                src={arrowRightWhite}
                alt="-"
                className="border-2 border-white p-2 rounded-[4px]"
              />
            </button>
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          Access a variety of tools to help you reach your fitness goals more
          effectively
        </p>

        <div
          ref={containerRef}
          className="relative flex gap-3 xl:gap-4 items-center justify-between overflow-scroll no-scrollbar scroll-smooth"
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-2/3 w-1/3 rounded-full blur-[100px] md:blur-[200px] bg-primaryVar4 -z-10" />
          <div className="absolute h-2/3 w-1/3 top-1/2  right-0 -translate-y-1/2 rounded-full blur-[100px] md:blur-[200px] bg-secondaryVar3 -z-10" />
          {tools.map((tool, i) => (
            <div key={i} className="shrink-0 relative">
              <img
                src={tool}
                alt=""
                className="-z-10 w-[119.33px] h-[121px] lg:w-[176px] lg:h-[177px] xl:w-[236px] xl:h-[223px]"
              />
              <button className="absolute bottom-2 left-2 flex items-center gap-1">
                <div
                  className={`z-10 absolute left-0 size-5 rounded-full blur-[10px] ${
                    i % 2 === 0 ? "bg-primaryVar5" : "bg-secondaryVar3"
                  }`}
                />
                <p className="z-20 text-sm">Learn More</p>
                <img src={arrowRight} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Tools;
