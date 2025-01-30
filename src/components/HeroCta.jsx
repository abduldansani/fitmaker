import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";
const HeroCta = () => {
  return (
    <motion.div
      variants={revealVar}
      initial="hidden"
      animate="visible"
      className="space-y-4 max-lg:col-span-2 lg:row-start-2 lg:space-y-6 xl:space-y-9"
    >
      <div className="xl:test-sm text-xs">
        "Join the Fitmaker community and transform your fitness journey. Our
        expert coaches and personalized programs are designed to help you
        achieve your goals and exceed your expectations. Ready to make a
        change?"
      </div>
      <div className="flex items-center justify-between gap-3">
        <button className="w-full rounded-xl bg-primary py-3 text-sm font-light lg:rounded-2xl lg:text-base lg:font-medium xl:rounded-[20px] xl:text-lg">
          Start Your Journey
        </button>
        <button className="w-full rounded-xl border border-secondary bg-transparent py-3 text-sm font-light text-secondary lg:rounded-2xl lg:text-base lg:font-medium xl:rounded-[20px] xl:text-lg">
          Explore Programs
        </button>
      </div>
    </motion.div>
  );
};

export default HeroCta;
