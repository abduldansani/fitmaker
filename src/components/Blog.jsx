import React from "react";
import Section from "./reusable/Section";
import {
  arrowLeftWhite,
  arrowRightPrimary,
  arrowRightWhite,
  calendar,
  chevronRight,
  postCategory,
} from "../assets";
import { blogPosts } from "../constants";

import { motion } from "motion/react";
import { revealVar } from "../motion/opacityReveal";

const Blog = () => {
  return (
    <Section>
      <motion.div
        variants={revealVar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container space-y-4 xl:space-y-6"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-center text-xl font-semibold lg:text-2xl lg:font-bold xl:text-3xl">
            Fitmaker <span className="text-primary">Blog Posts</span>
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={arrowLeftWhite}
              alt="-"
              className="rounded-[4px] border-2 border-white p-2"
            />
            <img
              src={arrowRightWhite}
              alt="-"
              className="rounded-[4px] border-2 border-white p-2"
            />
          </div>
        </div>
        <p className="text-center text-xs lg:text-sm xl:text-base">
          Discover essential tips to maximize your workout results and reach
          your fitness goals faster.
        </p>
        <div className="relative grid grid-cols-2 gap-2 lg:grid-cols-4">
          <div className="absolute left-0 top-5 -z-10 h-1/3 w-1/2 rounded-full bg-secondaryVar3 blur-[200px] lg:h-1/2 lg:w-1/3" />
          <div className="absolute bottom-4 right-4 -z-10 h-1/3 w-1/2 rounded-full bg-primaryVar5 blur-[200px] lg:h-1/2 lg:w-1/3" />
          {blogPosts.map((post, i) => (
            <div
              key={post.id}
              className={`flex flex-col justify-end rounded-lg bg-cover bg-center ${
                i === 0
                  ? "col-span-2 h-[380px] gap-2 p-3 lg:row-span-2 lg:gap-3 xl:px-5 xl:py-4"
                  : "h-[186px] gap-1 p-2"
              }`}
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <h3
                className={`${
                  i === 0
                    ? "text-xl font-semibold md:text-2xl md:font-bold xl:text-[26px]"
                    : "text-xs font-medium md:text-sm md:font-medium xl:text-2xl"
                }`}
              >
                {post.title}
              </h3>
              <div className="flex justify-between">
                <div
                  className={`hidden items-center gap-1 lg:flex ${
                    i === 0
                      ? "xl:sm xl:font-light"
                      : "text-[10px] md:text-xs lg:hidden"
                  }`}
                >
                  <img
                    src={calendar}
                    alt="-"
                    className={`${i === 0 ? "size-6" : "size-4"}`}
                  />
                  <p>{post.date}</p>
                </div>
                <div
                  className={`flex items-center gap-1 ${
                    i === 0 ? "xl:sm xl:font-light" : "text-[10px] md:text-xs"
                  }`}
                >
                  <img
                    src={postCategory}
                    alt="-"
                    className={`${i === 0 ? "size-6" : "size-4"}`}
                  />
                  <p>{post.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-sm">Learn More</div>
                  <img src={arrowRightPrimary} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mx-auto flex items-center gap-1 rounded-xl border border-secondary px-5 py-2.5 text-sm font-light text-secondary">
          <p>View All</p>
          <img src={chevronRight} alt="" />
        </button>
      </motion.div>
    </Section>
  );
};

export default Blog;
