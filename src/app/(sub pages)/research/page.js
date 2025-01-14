import Image from "next/image";
import bg from "../../../../public/background/bg-research.jpg";
import ResearchList from "@/components/research";
import { researchData } from "../../data";
import RenderModel from "@/components/RenderModel";

export const metadata = {
  title: "Research",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Portal ASC background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ResearchList research={researchData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          
        </RenderModel>
      </div>
    </>
  );
}
