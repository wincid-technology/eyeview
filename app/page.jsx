import AboutSection from "@/components/About";
import BookHub from "@/components/BookBuy";
import EventSection from "@/components/Event";
import Hero from "@/components/Hero";
import PhotographySection from "@/components/PhotoSection";
import IdentitySection from "@/components/Whoweare";
import Image from "next/image";
import { Button } from 'primereact/button';


export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-zinc-50  ">
      <Hero />
      <AboutSection />
      <EventSection />
      <PhotographySection />
      <IdentitySection />
      <BookHub />
    </div>
  );
}
