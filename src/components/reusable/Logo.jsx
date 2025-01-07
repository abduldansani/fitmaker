const Logo = () => {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-0.5 xl:gap-1">
        <div className="w-[30px] xl:w-10 h-[26px] xl:h-8 rounded bg-primary"></div>
        <div className="font-semibold xl:text-lg">
          Fit<span className="text-primary">Maker</span>
        </div>
      </div>
      <div className="text-[10px] xl:text-xs">Transform Your Body</div>
    </div>
  );
};

export default Logo;
