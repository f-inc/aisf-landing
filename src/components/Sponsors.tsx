import Image from "next/image";
import BitFrost from "images/sponsors/bitfrost.png";
import Orangewood from "images/sponsors/orangewood.png";
import Leap from "images/sponsors/leap.png";
import Kayyo from "images/sponsors/kayyo.png";
import BetterBrain from "images/sponsors/betterbrain.png";
import Banana from "images/sponsors/banana.png";
import Neurosity from "images/sponsors/neurosity.png";
import Scenario from "images/sponsors/scenario.png";
import CircleLabs from "images/sponsors/circle-labs.png";
import Lexica from "images/sponsors/lexica.png";

const Sponsors = () => {
  const sponsors = [
    BitFrost,
    Orangewood,
    Leap,
    Kayyo,
    BetterBrain,
    Banana,
    Neurosity,
    Scenario,
    CircleLabs,
    Lexica,
  ];

  return (
    <div className="mt-60 w-full flex justify-center mb-40">
      <div className="w-full max-w-screen-xl">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Meet our sponsors
        </div>

        <div className="w-full mt-20 grid grid-cols-5 gap-4">
          {sponsors.map((image, key) => (
            <div
              key={key}
              className="w-full h-24 rounded-lg bg-white/[.05] border border-white/[.1] flex items-center justify-center"
            >
              <Image src={image} alt="sponsor" className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
