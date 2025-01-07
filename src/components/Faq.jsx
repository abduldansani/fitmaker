import { useState } from "react";
import { faqClose, faqOpen } from "../assets";
import { faq } from "../constants";
import Section from "./reusable/Section";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section>
      <div className="container space-y-3 xl:space-y-6">
        <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
          FAQ
        </h2>
        <div className="border-2 border-secondary rounded-lg flex flex-col gap-4 xl:gap-6">
          {faq.map((q, i) => (
            <div key={q.id}>
              <div
                className={`-mt-0.5 -ml-px -mb-px -mr-0.5 px-3 py-2 md:px-4 md:py-3 xl:px-6 xl:py-4 border-2 ${
                  openQuestion === i ? "border-primary" : "border-secondary"
                } flex rounded-lg items-center justify-between`}
              >
                <h3 className="text-sm font-medium md:text-base xl:text-xl xl:font-semibold">
                  {q.question}
                </h3>
                <button
                  onClick={() => setOpenQuestion(openQuestion === i ? null : i)}
                >
                  <img src={openQuestion === i ? faqOpen : faqClose} alt="" />
                </button>
              </div>
              {openQuestion === i && (
                <div className="-mb-0.5 -mr-0.5 -ml-px border-primary -mt-5 xl:-mt-7 border-x-2 border-b-2  px-4 pb-3 pt-6 rounded-b-lg">
                  <p className="text-xs md:text-sm lg:text-base text-greyText">
                    {q.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;
