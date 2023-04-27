import Image from "next/image";
import Keyboard from "images/keyboard.svg";
import Events from "images/events.svg";
import Summit from "images/summit.svg";

const Info = () => {
  return (
    <div className="mt-20 lg:mt-28 border-t w-full h-36 border-white/[.12] grid grid-cols-1 lg:grid-cols-3">
      <div className="w-full p-10 flex gap-x-5 items-start">
        <Image src={Keyboard} alt="Keyboard" />
        <div className="-mt-1">
          <div className="font-semibold text-xl">Hackathon</div>
          <div className="opacity-75 mt-2">
            Unlock your creativity and push the boundaries of AI at our exciting
            hackathon event.
          </div>
        </div>
      </div>
      <div className="w-full border-y lg:border-x border-white/[.12] p-10 flex gap-x-5 items-start">
        <Image src={Summit} alt="Keyboard" />
        <div className="-mt-1">
          <div className="font-semibold text-xl">Hackathon</div>
          <div className="opacity-75 mt-2">
            Unlock your creativity and push the boundaries of AI at our exciting
            hackathon event.
          </div>
        </div>
      </div>
      <div className="w-full p-10 flex gap-x-5 items-start">
        <Image src={Events} alt="Keyboard" />
        <div className="-mt-1">
          <div className="font-semibold text-xl">Events</div>
          <div className="opacity-75 mt-2">
            Discover the future of AI through expert talks and hands-on
            experiences at SF's AI events.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
