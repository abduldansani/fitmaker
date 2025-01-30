const Logo = () => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-0.5 xl:gap-1">
        <div className="h-[26px] w-[30px] rounded bg-primary xl:h-8 xl:w-10"></div>
        <div className="font-semibold xl:text-lg">
          Fit<span className="text-primary">Maker</span>
        </div>
      </div>
      <div className="text-[10px] xl:text-xs">Transform Your Body</div>
    </div>
  );
};

export default Logo;
