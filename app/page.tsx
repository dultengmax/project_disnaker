import { Bentocard } from "@/components/assets/bento/page";
import { CarouselHeader } from "@/components/assets/carousel/carousel_header";
import { CoverDemo } from "@/components/assets/hero/herohome";
import { NavigationMenuDemo } from "@/components/assets/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center px-3 h-16 shadow-md fixed w-full bg-white z-50">
        <Image src={"/Group1.svg"} width={100} height={60} alt="logo" />

        <div className=" justify-center lg:flex lg:visible hidden items-center ">
          <NavigationMenuDemo />
        </div>
        <div className=" flex gap-2">
          <Link href="auth/login">login</Link>
          <Link href="auth/register">sign up</Link>
        </div>
      </div>
      {/* <NavbarDemo/> */}

      <div className=" w-full h-[45vh] pt-16 gap-2 overflow-hidden relative  ">
        <div className="bg-gradient-to-b from-transparent to-slate-900 -z-40 w-full h-full absolute"></div>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1697730130972-627b46998282?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          className="absolute object-cover -z-50"
          alt="logo"
        />
        <CoverDemo />
      </div>

      <div className="w-full flex flex-col justify-center">
        <div className="w-11/12 mx-auto flex flex-col mb-12 justify-center sm:px-5">
          <h1 className="font-bold  text-center mt-12 mb-5 lg:text-4xl md:text-xl px-16  ">
            trending article
          </h1>
          <Bentocard />
        </div>

        {/* <CardHoverEffectDemo /> */}
        <main className="w-4/5 mx-auto  rounded-md shadow-md overflow-hidden lg:h-[44vh] sm:h-44 mb-12 relative">
          <div className="w-full h-full bg-gradient-to-b from-slate-900/90 to-bg-slate-800 -z-20 absolute "></div>
          <video
            className="w-full h-full object-cover absolute -z-40"
            autoPlay
            loop
            muted
            preload="auto"
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="w-full h-full flex items-center">
            <h1 className="absolute font-semibold  lg:text-4xl items-center text-white md:text-2xl px-12 z-50 ">
              kondisi terkini di gaza palestina
            </h1>
            <p className="absolute font-semibold   items-center text-white  px-12 z-50 ">
              bagi teman teman yang ingin membantu share kekerabat kalian
            </p>
          </div>
        </main>

        {/*  */}
        <div className="w-5/6 mx-auto flex flex-col justify-center">
          <h1 className="text-3xl font-semibold px-12">yang terbaru</h1>
          <CarouselHeader />
        </div>
      </div>
    </>
  );
}
