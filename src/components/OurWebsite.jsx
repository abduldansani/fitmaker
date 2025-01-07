import React from "react";
import Section from "./reusable/Section";
import { ourWebsite } from "../constants";

const OurWebsite = () => {
  return (
    <Section>
      <div className="container flex max-lg:flex-col items-center justify-between">
        {ourWebsite.map((item, i) => (
          <>
            <div className="text-sm font-medium text-center flex flex-col lg:flex-row">
              <div className="">
                <div className="">
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
              } py-3 lg:py-0 lg:px-1 xl:px-2 flex justify-center`}
            >
              <div className="w-[35vw] sm:w-[30vw] md:w-[25vw] lg:w-[3px] lg:h-16 h-[3px] bg-gradient-to-r lg:bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            </div>
          </>
        ))}
      </div>
    </Section>
  );
};

export default OurWebsite;
