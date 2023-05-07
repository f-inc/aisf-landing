import MQ from "react-fast-marquee";

const Marquee = ({ text }: { text: string }) => {
  return (
    <MQ className="flex items-center bg-[#01FF69] w-full h-16 text-black text-3xl font-semibold">
      {Array(20)
        .fill(0)
        .map((_, i) => (
          <div className="mr-16" key={i}>
            {text}
          </div>
        ))}
    </MQ>
  );
};

export default Marquee;
