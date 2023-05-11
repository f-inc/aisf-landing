import Image, { StaticImageData } from "next/image";
import Jim from "images/speakers/jim.jpeg";
import Farza from "images/speakers/farza.png";
import Jeff from "images/speakers/jeff.png";
import Saatchi from "images/speakers/saatchi.png";
import Speaker from "./Speaker";

export interface ISpeaker {
  image: StaticImageData;
  name: string;
  label: string;
}

const Speakers = () => {
  const speakers: ISpeaker[] = [
    {
      image: Farza,
      name: "Farza Majeed",
      label: "Founder, Buildspace",
    },
    {
      image: Jim,
      name: "Jim Fan",
      label: "AI Scientist, Nvidia",
    },
    {
      image: Jeff,
      name: "Jeff Boudier",
      label: "Head of Product, Hugging Face",
    },
    {
      image: Saatchi,
      name: "Edward Saatchi",
      label: "Founder, Fable Studios",
    },
  ];

  return (
    <div className="pt-32 lg:pt-60 w-full flex justify-center" id="speakers">
      <div className="w-full max-w-screen-xl">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Meet our speakers
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center gap-y-8 mt-16 lg:mt-24">
          {speakers.map((speaker, key) => (
            <Speaker key={key} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
