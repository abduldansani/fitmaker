import React from "react";
import Section from "./reusable/Section";
import { ourWebsite } from "../constants";

const OurWebsite = () => {
  return (
    <Section>
      <div className="container relative flex max-md:flex-col items-center justify-between">
        <div className="absolute w-1/2 h-1/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primaryVar5 blur-[100px] -z-10" />
        {ourWebsite.map((item, i) => (
          <>
            <div className="text-sm font-medium text-center flex flex-col lg:flex-row">
              <div className="">
                <div className="text-nowrap">
                  <span
                    className={`text-2xl font-bold ${
                      i % 2 == 0 ? "text-primary" : "text-secondary"
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
              } py-3 lg:py-0 md:px-1 xl:px-2 flex justify-center`}
            >
              <div className="w-[35vw] sm:w-[30vw] md:w-[3px] md:h-16 h-[3px] bg-gradient-to-r lg:bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            </div>
          </>
        ))}
      </div>
    </Section>
  );
};

export default OurWebsite;
