import React from "react";
import { Cover } from "@/components/ui/cover";
import { SearchHero } from "../search/Search";

export function CoverDemo() {
  return (
    <>
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-100 dark:from-white dark:via-slate-300 dark:to-white">
        welcome to my article <br /> free <Cover>palestine🍉</Cover>
      </h1>
      <SearchHero/>

    </div>
    </>
  );
}
