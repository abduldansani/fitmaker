const HeroCta = () => {
  return (
    <div className="max-lg:col-span-2 lg:row-start-2 space-y-4 lg:space-y-6 xl:space-y-9">
      <div className="text-xs xl:test-sm">
        "Join the Fitmaker community and transform your fitness journey. Our
        expert coaches and personalized programs are designed to help you
        achieve your goals and exceed your expectations. Ready to make a
        change?"
      </div>
      <div className="flex items-center gap-3 justify-between">
        <button className="bg-primary font-light text-sm lg:font-medium lg:text-base xl:text-lg rounded-xl lg:rounded-2xl xl:rounded-[20px] py-3 w-full">
          Start Your Journey
        </button>
        <button className="bg-transparent border border-secondary text-secondary font-light text-sm lg:font-medium lg:text-base xl:text-lg rounded-xl lg:rounded-2xl xl:rounded-[20px] py-3 w-full">
          Explore Programs
        </button>
      </div>
    </div>
  );
};

export default HeroCta;
