import { ThreeDCardDemo } from "@/components/assets/card";
import { CardHoverEffectDemo } from "@/components/assets/card_hover";
import { CarouselHeader } from "@/components/assets/carousel/carousel_header";
import { CoverDemo } from "@/components/assets/hero/herohome";
import { NavigationMenuDemo } from "@/components/assets/navbar";
import { SearchHero } from "@/components/assets/search/Search";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<>
<div className="flex justify-between items-center px-3 h-16 shadow-md fixed w-full bg-white z-50">
  <Image src={"public/assets/Group1.svg"} width={400} height={400} alt="logo" />
  

<div className=" justify-center lg:flex lg:visible hidden items-center ">
<NavigationMenuDemo/>
</div>
<div className="  gap-2">
<Button variant={"default"}>
  <Link href="auth/login">
  login
  </Link>
  </Button >
<Button variant={"secondary"}>sign up</Button >
</div>
</div>
{/* <NavbarDemo/> */}

<div className=" w-full h-[45vh] pt-16 gap-2 overflow-hidden relative  " >
  <div className="bg-gradient-to-b from-transparent to-slate-800 -z-40 w-full h-full absolute"></div>
  <Image src={"https://plus.unsplash.com/premium_photo-1697730130972-627b46998282?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} fill className="absolute object-cover -z-50" alt="logo" />
    <CoverDemo/>
    </div>

<div className="w-full flex flex-col justify-center">
  <div className="w-11/12 mx-auto flex flex-col justify-center sm:px-5 gap-10 md:gap-24 lg:gap-28">
<h1 className="font-semibold  text-2xl md:text-xl px-12  ">trending article</h1>
<CarouselHeader/>
  </div>
  <CardHoverEffectDemo/>
  <main className="w-11/12 mx-auto bg-slate-800 h-[60vh] mb-24 relative">
  <div className="w-full h-full bg-gradient-to-b from-transparent to-bg-slate-800 -z-30 absolute object-cover "></div>
  <video className="w-full h-full object-cover -z-40" autoPlay loop   muted preload="auto">
      <source src="/video.mp4" type="video/mp4" />

      Your browser does not support the video tag.
    </video>
    <h1 className="absolute text-red-400 font-semibold  text-2xl md:text-xl px-12 z-50 ">video terkini di palestina</h1>
  </main>
</div>
</>
  );
}
