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

const Blog = () => {
  return (
    <Section>
      <div className="container space-y-4 xl:space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl text-center">
            Fitmaker <span className="text-primary">Blog Posts</span>
          </h2>
          <div className="flex items-center gap-2">
            <img
              src={arrowLeftWhite}
              alt="-"
              className="border-2 border-white p-2 rounded-[4px]"
            />
            <img
              src={arrowRightWhite}
              alt="-"
              className="border-2 border-white p-2 rounded-[4px]"
            />
          </div>
        </div>
        <p className="text-xs lg:text-sm xl:text-base text-center">
          Discover essential tips to maximize your workout results and reach
          your fitness goals faster.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {blogPosts.map((post, i) => (
            <div
              className={`flex flex-col justify-end bg-cover bg-center rounded-lg ${
                i === 0
                  ? "gap-2 lg:gap-3 col-span-2 lg:row-span-2 h-[380px] p-3 xl:py-4 xl:px-5"
                  : "gap-1 h-[186px] p-2"
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
                  className={`hidden lg:flex items-center gap-1 ${
                    i === 0
                      ? "xl:font-light xl:sm"
                      : "lg:hidden text-[10px] md:text-xs"
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
                    i === 0 ? "xl:font-light xl:sm" : "text-[10px] md:text-xs"
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
        <button className="mx-auto py-2.5 px-5 text-secondary flex items-center gap-1 border border-secondary rounded-xl text-sm font-light">
          <p>View All</p>
          <img src={chevronRight} alt="" />
        </button>
      </div>
    </Section>
  );
};

export default Blog;
