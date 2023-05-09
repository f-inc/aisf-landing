import Image from "next/image";
import Langchain from "images/events/lang.png";
import HuggingFace from "images/events/hugging-face.png";
import Farza from "images/events/farza.png";
import Finc from "images/events/finc.png";
import a16z from "images/events/a16z.png";
import Emm from "images/events/emm.png"
import OpenAI from "images/speakers/openai.png"

const MultiEvent = () => {
  return (
    <div className="w-full bg-white/[.05] border border-white/[.1] rounded-xl p-8 pb-0 text-lg">
      <div className="text-[#01FF69]">
        {" "}
        Day 5: Friday
        <span className="text-white/[.5]">— May 19th</span>
      </div>
      <div className="text-4xl mt-2">Summit</div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">9-10AM</div>
          <div className="text-2xl">Registration + Mixer</div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">10AM-10:15AM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Building a New Era</div>
              <div className="text-white/[.6]">Opening Keynote</div>
            </div>
            <Image src={Finc} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>
        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">10:15AM-11AM</div>
          <div className="flex items-center justify-between">
          <div className="lg:text-right">
              <div className="text-2xl">Gen. AI + Trivia Panel</div>
              <div className="text-white/[.6]">w/ Langchain</div>
            </div>
            <Image src={Langchain} className="w-14 h-14 ml-6" alt="Ahmed" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11AM-11:30 AM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Hugging Face Keynote</div>
              <div className="text-white/[.6]">w/ Huggingface</div>
            </div>
            <Image
              src={HuggingFace}
              className="w-14 h-14 ml-6"
              alt="Hugging Face"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg flex-none">
            11:30AM-12:10PM
          </div>
          <div className="text-2xl lg:text-right">
Networking Break
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">11:50AM-12:10PM</div>
          <div className="text-2xl">AI Powered Keynote</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:10PM-12:30PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Fireside Chat</div>
              <div className="text-white/[.6]">w/ Farza Majeed</div>
            </div>
            <Image src={Farza} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">12:30PM-1:15PM</div>
          <div className="text-2xl">Lunch Break</div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">1:15PM-1:30PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Fireside Chat</div>
              <div className="text-white/[.6]">w/ Emmanuel de Maistre</div>
            </div>
            <Image src={Emm} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>

        <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
          <div className="text-white/[.5] text-lg">1:30PM-2:10PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Simulations and Agents Panel</div>
              <div className="text-white/[.6]">w/ a16z & Stanford</div>
            </div>
            <Image src={a16z} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg">2:10PM-2:30PM</div>
        <div className="text-2xl">Gen. AI Prompt Battles</div>
      </div>

      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">2:30PM-2:50PM</div>
        <div className="text-2xl lg:text-right">
          Networking Break
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
      <div className="text-white/[.5] text-lg">12:10PM-12:30PM</div>
          <div className="flex items-center justify-between">
            <div className="lg:text-right">
              <div className="text-2xl">Is AI Here to Stay?</div>
              <div className="text-white/[.6]">w/ OpenAI</div>
            </div>
            <Image src={OpenAI} className="w-14 h-14 ml-6" alt="Farza" />
          </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">3:20PM-3:35PM</div>
        <div className="text-2xl lg:text-right">
        Hackathon Winner Announcement
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">3:35PM-4PM</div>
        <div className="text-2xl lg:text-right">
        TBA
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-row lg:justify-between lg:items-center py-8 border-t border-white/[.1]">
        <div className="text-white/[.5] text-lg flex-none">4PM-5PM</div>
        <div className="text-2xl lg:text-right">
        Ending Mixer
        </div>
      </div>


    </div>
  );
};

export default MultiEvent;
