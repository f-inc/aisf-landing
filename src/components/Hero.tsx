import Image from "next/image";
import AISF from "images/aisf.svg";
import Info from "./Info";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full flex flex-col font-jakarta items-center justify-center">
      <Image src={AISF} alt="AISF" className="mt-16 lg:mt-32" />
      <div className="font-bold text-6xl lg:text-9xl mt-8 lg:mt-10">
        an AI week <br /> for Builders
      </div>
      <div className="opacity-75 text-xl mt-10 text-center">
        May 15 - 19. This isn&#39;t your usual conference.
      </div>

      <Link href="https://fdotinc.typeform.com/to/tpgvDnhX">
        <div className="relative w-72 h-16 group mt-14 lg:mt-16">
          <div className="absolute bg-button group-hover:bg-button-hover w-[292px] -ml-0.5 h-[68px] -mt-0.5 rounded-full transition-all duration-300 ease-in-out"></div>

          <button className="bg-black absolute group-hover:bg-[#111] transition-all duration-200 flex items-center justify-center font-bold rounded-full h-16 w-72">
            SAVE YOUR SPOT
          </button>
        </div>
      </Link>

      <Info />
    </div>
  );
};

export default Hero;
