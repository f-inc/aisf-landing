const Event = ({
  day,
  date,
  title,
  label,
  time
}: {
  day: string;
  date: string;
  title: string;
  time: string;
  label: string;
}) => {
  return (
    <div className="w-full bg-white/[.05] border border-white/[.1] rounded-xl p-8 text-lg">
      <div className="text-[#01FF69]">Day {day} <span className="text-white/[.5]">— {date}</span></div>
      <div className="text-4xl mt-2">{title}</div>
      <div className="w-full h-[1px] bg-white/[.1] my-4 lg:my-8"></div>
      <div className="flex justify-between items-center">
        <div className="text-white/[.5] text-base lg:text-lg">{time}</div>
        <div className="text-base lg:text-2xl">{label}</div>
      </div>
    </div>
  );
};

export default Event;
