import Image from "next/image";
import FIncLogo from "images/finc-logo.png";

const Header = () => {
  return (
    <div className="w-full p-5 font-jakarta">
      <div className="w-full h-[75px] border-[1px] rounded-full border-white/[.15] flex justify-between items-center">
        <Image src={FIncLogo} alt="F-Inc Logo" className="ml-10 h-8" />
        <div className="relative w-40 h-10 mr-5 group -mt-1">
          <div className="absolute bg-button group-hover:bg-button-hover w-[164px] -ml-0.5 h-12 -mt-0.5 rounded-full transition-all duration-300 ease-in-out"></div>

          <button className="bg-black absolute group-hover:bg-[#111] transition-all duration-200 flex items-center justify-center font-bold rounded-full h-[44px] w-40 text-sm">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
