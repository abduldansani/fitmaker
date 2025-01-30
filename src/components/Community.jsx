import { google, mail, user } from "../assets";
import { revealVar } from "../motion/opacityReveal";
import Section from "./reusable/Section";

import { motion } from "motion/react";

const Community = () => {
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container flex gap-4 max-md:flex-col xl:gap-6"
      >
        <div className="relative flex flex-col justify-between gap-3 xl:gap-4">
          <div className="absolute left-1/2 top-1/2 -z-10 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primaryVar5 blur-[150px]" />
          <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
            Join Our <span className="text-primary">Fitness Community</span>
          </h2>
          <p className="max-xl:text-xs">
            Sign up now to unlock exclusive access to personalized workout
            plans, expert coaching, and a supportive community that will help
            you achieve your fitness goals.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="rounded-lg bg-grey p-1.5 md:p-2 xl:p-3">
              <h4 className="mb-1 text-center font-medium max-xl:text-sm xl:mb-2">
                Expert <span className="text-primary">Coaching</span>
              </h4>
              <p className="text-xs">
                Customized routines that match your fitness level and goals,
                ensuring you achieve the best results in the most efficient way.
              </p>
            </div>
            <div className="rounded-lg bg-grey p-1.5 md:p-2 xl:p-3">
              <h4 className="mb-1 text-center font-medium max-xl:text-sm xl:mb-2">
                <span className="text-primary">Personalized</span> Workout Plans
              </h4>
              <p className="text-xs">
                Work with certified trainers who will guide you every step of
                the way to ensure you're on the right track. Sign Up.
              </p>
            </div>
            <div className="rounded-lg bg-grey p-1.5 md:p-2 xl:p-3">
              <h4 className="mb-1 text-center font-medium max-xl:text-sm xl:mb-2">
                <span className="text-primary">Community </span> Support
              </h4>
              <p className="text-xs">
                Join a vibrant community of fitness enthusiasts where you can
                share experiences, get motivated, and stay inspired.
              </p>
            </div>
            <div className="rounded-lg bg-grey p-1.5 md:p-2 xl:p-3">
              <h4 className="mb-1 text-center font-medium max-xl:text-sm xl:mb-2">
                Exclusive <span className="text-primary">Resources</span>
              </h4>
              <p className="text-xs">
                Access premium content, including video tutorials, nutrition
                guides, and member-only discounts on fitness gear.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col gap-2 rounded-xl bg-primaryVar3 p-2 md:w-1/2 md:justify-around xl:gap-4 xl:p-4">
          <div className="absolute right-0 top-1/2 -z-10 h-1/2 w-1/2 -translate-y-1/2 rounded-full bg-secondaryVar3 blur-[150px]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="text-xl font-bold text-primary xl:text-2xl">
                  Signup
                </div>
                <div className="h-2 w-full bg-primary"></div>
              </div>
              <div className="font-semibold text-primaryLight xl:text-xl">
                Login
              </div>
            </div>
            <label className="space-y-2 font-medium">
              Name
              <div className="flex items-center gap-1 rounded border-2 border-white px-1 py-2">
                <img src={user} alt="-" />
                <input
                  type="text"
                  className="flex-1 bg-transparent px-2 text-[10px] outline-none"
                  placeholder="Enter Your Name"
                />
              </div>
            </label>
            <label className="space-y-2 font-medium">
              Email
              <div className="flex items-center gap-1 rounded border-2 border-white px-1 py-2">
                <img src={mail} alt="-" />
                <input
                  type="text"
                  className="flex-1 bg-transparent px-2 text-[10px] outline-none"
                  placeholder="Enter Your E-Mail"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-full rounded bg-primary p-3 font-medium">
              Sign Up
            </button>
            <div className="flex items-center gap-1.5">
              <div className="h-px flex-1 bg-white" />
              <div className="font-medium">Or</div>
              <div className="h-px flex-1 bg-white" />
            </div>
            <button className="flex w-full justify-center gap-2 rounded border border-white p-2 font-medium">
              <img src={google} alt="-" />
              <div className="">Sign Up With Google</div>
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Community;
