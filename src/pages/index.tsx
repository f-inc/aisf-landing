import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import SEO from "@/components/SEO";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--jakarta",
});

const Home = () => {
  return (
    <div
      className={`${jakarta.className} flex justify-center w-full bg-[url("/images/background.png")] bg-cover min-h-screen`}
    >
      <SEO />
      <div className="max-w-screen-2xl w-full">
        <Header />
        <Marquee />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
