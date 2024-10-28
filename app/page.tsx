import { ThreeDCardDemo } from "@/components/assets/card";
import { CardHoverEffectDemo } from "@/components/assets/card_hover";
import { NavigationMenuDemo } from "@/components/assets/navbar";

export default function Home() {
  return (
<>
<div className="flex justify-between px-3 h-16 shadow-md ">
  <h1>images</h1>
<div className="flex justify-center visible sm:hidden items-center ">
<NavigationMenuDemo/>
</div>
<button>login</button>
</div>
{/* <NavbarDemo/> */}


<div className="w-full flex flex-col justify-center">
  <div className="w-11/12 mx-auto relative bg-slate-300 flex flex-row sm:flex-col justify-center sm:px-5 gap-10">
  <div className="w-auto relative">
<ThreeDCardDemo />
  </div>
  <div className="w-auto">
<ThreeDCardDemo />
  </div>
  </div>
  <CardHoverEffectDemo/>

</div>
</>
  );
}
