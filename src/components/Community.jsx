import { google, mail, user } from "../assets";
import Section from "./reusable/Section";

const Community = () => {
  return (
    <Section>
      <div className="container flex max-md:flex-col gap-4 xl:gap-6">
        <div className="relative flex flex-col gap-3 xl:gap-4 justify-between">
          <div className="absolute w-1/2 h-1/2 -z-10 bg-primaryVar5 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 blur-[150px]" />
          <h2 className="font-semibold text-xl lg:font-bold lg:text-2xl xl:text-3xl">
            Join Our <span className="text-primary">Fitness Community</span>
          </h2>
          <p className="max-xl:text-xs">
            Sign up now to unlock exclusive access to personalized workout
            plans, expert coaching, and a supportive community that will help
            you achieve your fitness goals.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="bg-grey p-1.5 md:p-2 xl:p-3 rounded-lg">
              <h4 className="max-xl:text-sm font-medium text-center mb-1 xl:mb-2">
                Expert <span className="text-primary">Coaching</span>
              </h4>
              <p className="text-xs">
                Customized routines that match your fitness level and goals,
                ensuring you achieve the best results in the most efficient way.
              </p>
            </div>
            <div className="bg-grey p-1.5 md:p-2 xl:p-3 rounded-lg">
              <h4 className="max-xl:text-sm font-medium text-center mb-1 xl:mb-2">
                <span className="text-primary">Personalized</span> Workout Plans
              </h4>
              <p className="text-xs">
                Work with certified trainers who will guide you every step of
                the way to ensure you're on the right track. Sign Up.
              </p>
            </div>
            <div className="bg-grey p-1.5 md:p-2 xl:p-3 rounded-lg">
              <h4 className="max-xl:text-sm font-medium text-center mb-1 xl:mb-2">
                <span className="text-primary">Community </span> Support
              </h4>
              <p className="text-xs">
                Join a vibrant community of fitness enthusiasts where you can
                share experiences, get motivated, and stay inspired.
              </p>
            </div>
            <div className="bg-grey p-1.5 md:p-2 xl:p-3 rounded-lg">
              <h4 className="max-xl:text-sm font-medium text-center mb-1 xl:mb-2">
                Exclusive <span className="text-primary">Resources</span>
              </h4>
              <p className="text-xs">
                Access premium content, including video tutorials, nutrition
                guides, and member-only discounts on fitness gear.
              </p>
            </div>
          </div>
        </div>

        <div className=" relative rounded-xl p-2 xl:p-4 bg-primaryVar3 md:w-1/2 shrink-0 flex gap-2 xl:gap-4 md:justify-around flex-col">
          <div className="absolute w-1/2 h-1/2 -z-10 bg-secondaryVar3 rounded-full top-1/2 -translate-y-1/2 right-0 blur-[150px]" />
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex gap-1 flex-col items-center">
                <div className="text-primary text-xl xl:text-2xl font-bold">
                  Signup
                </div>
                <div className="w-full h-2 bg-primary"></div>
              </div>
              <div className="xl:text-xl font-semibold text-primaryLight">
                Login
              </div>
            </div>
            <label className="font-medium space-y-2">
              Name
              <div className="border-2 border-white rounded px-1 py-2 flex items-center gap-1">
                <img src={user} alt="-" />
                <input
                  type="text"
                  className="flex-1 outline-none text-[10px] bg-transparent px-2"
                  placeholder="Enter Your Name"
                />
              </div>
            </label>
            <label className="font-medium space-y-2">
              Email
              <div className="border-2 border-white rounded px-1 py-2 flex items-center gap-1">
                <img src={mail} alt="-" />
                <input
                  type="text"
                  className="flex-1 outline-none text-[10px] bg-transparent px-2"
                  placeholder="Enter Your E-Mail"
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <button className="w-full rounded font-medium p-3 bg-primary">
              Sign Up
            </button>
            <div className="flex items-center gap-1.5">
              <div className="flex-1 h-px bg-white" />
              <div className="font-medium">Or</div>
              <div className="flex-1 h-px bg-white" />
            </div>
            <button className="w-full rounded font-medium p-2 border border-white flex justify-center gap-2">
              <img src={google} alt="-" />
              <div className="">Sign Up With Google</div>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Community;
