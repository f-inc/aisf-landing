import Image from "next/image";
import Keyboard from "images/keyboard.svg";
import Events from "images/events.svg";
import Summit from "images/summit.svg";

const Info = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-5 lg:max-w-[1450px] mt-20 sm:mt-28 border lg:border-t w-full border-white/[.1] grid grid-cols-1 lg:grid-cols-3 bg-white/[.1] lg:py-6 rounded-xl">
        <div className="w-full py-10 lg:py-4 px-10 flex gap-x-5 items-start">
          <Image src={Keyboard} alt="Keyboard" />
          <div className="-mt-1">
            <div className="font-semibold text-xl">Hackathon</div>
            <div className="opacity-75 mt-2 text-sm ">
              Unlock your creativity and push the boundaries of AI at our
              exciting hackathon event.
            </div>
          </div>
        </div>
        <div className="w-full border-y lg:border-x lg:border-y-0 border-white/[.12] py-10 lg:py-4 px-10 flex gap-x-5 items-start">
          <Image src={Summit} alt="Keyboard" />
          <div className="-mt-1">
            <div className="font-semibold text-xl">Summit</div>
            <div className="opacity-75 mt-2">
              Join top experts and explore the latest in AI at the San Francisco
              Summit.
            </div>
          </div>
        </div>
        <div className="w-full py-10 lg:py-4 px-10 flex gap-x-5 items-start">
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
    </div>
  );
};

export default Info;
