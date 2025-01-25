import React, { useState } from "react";
import { arrowLeftWhite, arrowRightWhite, quote } from "../assets";
import Section from "./reusable/Section";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedTestimonial = testimonials[currentIndex];

  const nextTestimonials = [
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];
  const handleNext = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="max-lg:flex items-center justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={handlePrev}>
              <img
                src={arrowLeftWhite}
                alt="-"
                width={22.5}
                height={28}
                className="border-2 border-white px-1 py-2 rounded-[4px]"
              />
            </button>
            <button onClick={handleNext}>
              <img
                src={arrowRightWhite}
                alt="-"
                width={22.5}
                height={28}
                className="border-2 border-white px-1 py-2 rounded-[4px]"
              />
            </button>
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          At This Part you can See Few Of The Many Positive reviews Of Our
          Customers.
        </p>

        <div className="flex justify-between gap-3 lg:items-end">
          <div className="flex items-center max-md:gap-2.5">
            <img
              src={displayedTestimonial.image}
              alt={displayedTestimonial.name}
              className="w-[144px] md:w-[215px]"
            />
            <div
              className={`relative self-end ${
                currentIndex === 0 ? "md:max-xl:-ml-5 " : "ml-5"
              } max-md:w-2/3 bg-[#5B0408] p-2 space-y-1 rounded-xl`}
            >
              <div className="absolute top-1/2 -translalate-y-1/2 left-1/2 -translate-x-1/2 w-2/3 h-2/3 rounded-full bg-primaryVar5 blur-[200px] -z-10" />
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="font-medium">{displayedTestimonial.name}</h3>
                  <div className="text-xs text-greyText">
                    {displayedTestimonial.about}
                  </div>
                </div>
                <img src={quote} alt='""' />
              </div>
              <div className="text-xs xl:text-sm">
                {displayedTestimonial.review}
              </div>
            </div>
          </div>
          <button onClick={handlePrev} className="shrink-0">
            <img
              src={arrowLeftWhite}
              alt="-"
              width={36}
              height={36}
              className="size-6 xl:size-[36px] max-lg:hidden border-2 border-white px-1 py-2 rounded-[4px]"
            />
          </button>
          <button onClick={handleNext} className="shrink-0">
            <img
              src={arrowRightWhite}
              alt="-"
              width={36}
              height={36}
              className="size-6 xl:size-[36px] max-lg:hidden border-2 border-white px-1 py-2 rounded-[4px]"
            />
          </button>
          {nextTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="max-md:hidden relative shrink-0 flex justify-center items-end rounded-lg"
            >
              <div className="absolute w-full h-full blur-[300px] bg-secondaryVar3 -z-10" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[102px] h-[280px] bg-secondaryVar3 rounded-lg"
              />
              <div className="absolute w-full -rotate-90 text-nowrap mb-14">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
