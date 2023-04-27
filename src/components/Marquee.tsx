import MQ from "react-fast-marquee";

const Marquee = () => {
  return (
    <MQ className="flex items-center bg-[#01FF69] w-full h-16 text-black text-3xl font-semibold">
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div className="mr-16" key={i}>
            May 15 - 19
          </div>
        ))}
    </MQ>
  );
};

export default Marquee;
