const Time = () => {
  return (
    <div className="bg-black/[.4] w-full rounded-xl h-48 py-10 border border-white/[.1] flex items-center justify-center">
      <div className="w-full grid grid-cols-4 justify-items-between px-5">
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">12</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">DAYS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">13</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">HOURS</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">34</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">MINUTES</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl lg:text-7xl font-bold">24</div>
          <div className="text-xs lg:text-base mt-5 text-white/[.5] font-medium">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default Time;
