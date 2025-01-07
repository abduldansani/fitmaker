import React, { useState } from "react";
import { arrowLeftWhite, arrowRightWhite, quote } from "../assets";
import Section from "./reusable/Section";
import { testimonials } from "../constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedTestimonial = testimonials[currentIndex];
  const nextTestimonials = [
    testimonials[currentIndex + 1],
    testimonials[currentIndex + 2],
  ];
  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="max-lg:flex items-center justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <div className="lg:hidden flex items-center gap-2">
            <img
              src={arrowLeftWhite}
              alt="-"
              className="border-2 border-white px-1 py-2 rounded-[4px]"
            />
            <img
              src={arrowRightWhite}
              alt="-"
              className="border-2 border-white px-1 py-2 rounded-[4px]"
            />
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
            <div className="self-end md:max-xl:-ml-5 max-md:w-2/3 bg-[#5B0408] p-2 space-y-1 rounded-xl">
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
          <img
            src={arrowLeftWhite}
            alt="-"
            className="max-lg:hidden border-2 border-white px-1 py-2 rounded-[4px]"
          />
          <img
            src={arrowRightWhite}
            alt="-"
            className="max-lg:hidden border-2 border-white px-1 py-2 rounded-[4px]"
          />
          {nextTestimonials.map((testimonial) => (
            <div className="max-md:hidden relative shrink-0 flex justify-center items-end rounded-lg">
              <img src={testimonial.image} alt={testimonial.name} />
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
