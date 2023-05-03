import Image from "next/image";
import { ISpeaker } from "./index";

const Speaker = ({ image, name, label }: ISpeaker) => {
  return (
    <div className="p-5 w-72 bg-white/[.05] rounded-lg">
      <Image src={image} alt="Emmanuel" className="w-60" />

      <div className="text-3xl font-bold mt-4">Emmanuel de Maistre</div>
      <div className="text-lg mt-2 font-bold text-white/[.5] border border-white/[.1]">
        Co-founder Scenario
      </div>
    </div>
  );
};

export default Speaker;
