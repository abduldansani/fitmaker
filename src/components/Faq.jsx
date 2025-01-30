import { useState } from "react";
import { faqClose, faqOpen } from "../assets";
import { faq } from "../constants";
import Section from "./reusable/Section";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative space-y-3 xl:space-y-6"
      >
        <div className="absolute left-5 top-1/2 -z-10 h-1/3 w-1/3 -translate-y-1/2 rounded-full bg-primaryVar5 blur-[200px]" />
        <div className="absolute right-5 top-1/2 -z-10 h-1/2 w-1/3 -translate-y-1/2 rounded-full bg-secondaryVar3 blur-[200px]" />
        <h2 className="text-center text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
          FAQ
        </h2>
        <div className="flex flex-col gap-4 rounded-lg border-2 border-secondary xl:gap-6">
          {faq.map((q, i) => (
            <div key={q.id}>
              <div
                className={`-mb-px -ml-px -mr-0.5 -mt-0.5 border-2 px-3 py-2 md:px-4 md:py-3 xl:px-6 xl:py-4 ${
                  openQuestion === i ? "border-primary" : "border-secondary"
                } flex items-center justify-between rounded-lg`}
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
                <div className="-mb-0.5 -ml-px -mr-0.5 -mt-5 rounded-b-lg border-x-2 border-b-2 border-primary px-4 pb-3 pt-8 lg:pt-10 xl:-mt-7">
                  <p className="text-xs text-greyText md:text-sm lg:text-base">
                    {q.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default Faq;
