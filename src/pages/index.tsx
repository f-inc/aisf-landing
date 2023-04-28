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
    <div className={`${jakarta.className} w-full min-h-screen`}>
      <SEO />
      <Header />
      <Marquee />
      <Hero />
      <Info />
    </div>
  );
};

export default Home;
