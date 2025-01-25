import { useRef, useState } from "react";
import {
  arrowLeftWhite,
  arrowRight,
  arrowRightWhite,
  chevronRight,
} from "../assets";
import Section from "./reusable/Section";
import { trainers } from "../constants";

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
      maxScrollLeft
    );

    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };
  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
          <div className="flex items-center gap-2">
            <button onClick={() => handleScroll(-amount)}>
              <img
                src={arrowLeftWhite}
                alt="-"
                className="border-2 border-white py-2 px-4 rounded-[4px]"
              />
            </button>
            <button onClick={() => handleScroll(amount)}>
              <img
                src={arrowRightWhite}
                alt="-"
                className="border-2 border-white py-2 px-4 rounded-[4px]"
              />
            </button>
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          At This Part you can See Some Of our Trainers And They’re Work’s.
        </p>
        <div
          ref={containerRef}
          className="relative flex justify-between items-center gap-3 lg:gap-6 xl:gap-10 pb-1 scroll-smooth overflow-scroll no-scrollbar"
        >
          <div className="absolute h-1/3 w-1/2 bottom-2 left-0 bg-primaryVar5 rounded-full blur-[350px] " />
          <div className="absolute h-1/3 w-1/2 bottom-2 right-0 bg-secondaryVar3 rounded-full blur-[350px] " />
          {trainers.map((trainer, i) => (
            <div key={trainer.id} className="rounded-xl flex flex-col shrink-0">
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
                <button className="relative flex items-center gap-1">
                  <div
                    className={`z-10 absolute left-0 size-5 rounded-full blur-[10px] ${
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
        <button className="mx-auto py-2.5 px-5 text-secondary flex items-center gap-1 border border-secondary rounded-xl text-sm font-light">
          <p>View All</p>
          <img src={chevronRight} alt="" />
        </button>
      </div>
    </Section>
  );
};

export default Trainers;
