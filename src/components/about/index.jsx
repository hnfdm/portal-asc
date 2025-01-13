import React from "react";
import ItemLayout from "./ItemLayout";
import {icons} from "@/app/data";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-center">
            The #1 Source for Crypto Community Since 2017
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base text-justify">
          AirdropASC is the leading crypto community, established in 2017, dedicated to empowering members with free cryptocurrency opportunities every day. 
          We carefully select and share the best and most legitimate airdrops, including testnets, nodes, bots, and retroactive rewards. 
          Guided by the principle "from the Community, for the Community", we provide daily updates and expert tips & tricks to make airdrops easier and more rewarding for you. 
          Discover why we’re the #1 platform for growing your crypto assets and exploring the limitless potential of the crypto world. Join us today!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}  
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            200+ <sub className="font-semibold text-base">partners & clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+ <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        {/*<ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            //src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            //src={'/icons/wizardia.jpg,binance.svg'}
            src={icons.src}
            alt="Icons"
            loading="lazy"
          />
        </ItemLayout>*/}

        <ItemLayout className="col-span-full">
          <div className="grid grid-cols-10 gap-6">
            {icons.map((icon) => (
              <div key={icon.name} className="flex items-center justify-center">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-18 h-18 object-contain"
                />
              </div>
            ))}
          </div>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
