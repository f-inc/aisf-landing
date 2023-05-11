import Event from "./Event";
import Time from "./Time";
import MultiEvent from "./MultiEvent";

const Events = () => {
  return (
    <div
      className="relative w-full flex justify-center pt-16 lg:pt-40 font-jakarta"
      id="events"
    >
      <div className="w-full max-w-screen-xl px-5">
        <div className="text-5xl lg:text-6xl text-center font-bold">
          Join the <br /> conversation
        </div>

        <div className="mt-20 w-full flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 gap-x-8 font-bold">
          <div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
            <Time />

            <Event
              i="1"
              day="Monday"
              date="May 15th"
              title="Hackathon Kickoff"
              events={[
                {
                  time: "9-10AM",
                  label: "Leap API: Pancakes and Pixels",
                },
                {
                  time: "5-7PM",
                  label: "Hackathon Kickoff",
                },
              ]}
            />

            <Event
              i="2"
              day="Tuesday"
              date="May 16th"
              title="Women in AI Mixer"
              events={[
                {
                  time: "All Day",
                  label: "Hack Session @ Founders, Inc.",
                },
                {
                  time: "5-6PM",
                  label: "Google + Sudo Labs SEO Workshop",
                },
              ]}
            />

            <Event
              i="3"
              day="Wednesday"
              date="May 17th"
              title="Golden Gate Trek"
              events={[
                {
                  time: "All Day",
                  label: "Hack Session @ Founders, Inc.",
                },
                {
                  time: "5-6PM",
                  label: "Hackathon Demos",
                },
                {
                  time: "7-9PM",
                  label: "Golden Gate Trek",
                },
              ]}
            />
            <Event
              i="4"
              day="Thursday"
              date="May 18rd"
              title="Founders, Inc. Open House"
              events={[
                {
                  time: "12-5PM",
                  label: "Open Coworking @ Founders, Inc.",
                },
                {
                  time: "6-9PM",
                  label: "Generative AI Mixer",
                },
              ]}
            />
          </div>
          <div className="w-full flex flex-col gap-y-5 lg:gap-y-8">
            <MultiEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
