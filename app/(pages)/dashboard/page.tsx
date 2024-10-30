import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex  ">
        <section className="w-52 h-[100vh] bg-slate-300 px-3 pt-5">
            <Link href="/">
          <Image src={"/Group1.svg"} width={140} height={70} alt="logo" />
            </Link>
          <div className="mt-5 flex flex-col gap-2">
            <Link href="/dashboard" className="font-semibold scale-105 hover:underline transition-all ">dashboard</Link>
            <Link href="/dashboard" className="font-semibold scale-105 hover:underline transition-all ">artikel</Link>
            <Link href="/dashboard" className="font-semibold scale-105 hover:underline transition-all ">katagories</Link>
            <Link href="/dashboard" className="font-semibold scale-105 hover:underline transition-all ">Author</Link>
          </div>
          <div className="absolute bottom-1 ">adminpage</div>
          
        </section>

        <main className="w-full  pt-5">
      <h1 className="px-5 mt-7 font-semibold text-4xl"> All article </h1>

      <div className="grid grid-cols-4 gap-5 mt-5 px-5">
        <div className="w-72 h-64 rounded-md bg-slate-500 relative">
            <Image src={"/Group1.svg"} alt={"artikel"} fill className="w-11/12 h-40 rounded absolute border-red-100"/>
           <h3>asdasd</h3>
           <p>asdasdasdasdsadasd</p>
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
        <div className="w-72 h-64 rounded-md bg-slate-500">
        </div>
      </div>
        </main>
      </div>
    </>
  );
};

export default page;
