import { ThreeDCardDemo } from "@/components/assets/card";
import { CardHoverEffectDemo } from "@/components/assets/card_hover";
import { NavbarDemo, NavigationMenuDemo } from "@/components/assets/navbar";
import Image from "next/image";

export default function Home() {
  return (
<>
<div className="flex justify-center z-20 bg-white shadow-md">
<NavigationMenuDemo/>
</div>
{/* <NavbarDemo/> */}
<div className="flex justify-center">
  <CardHoverEffectDemo/>
<ThreeDCardDemo />
</div>
</>
  );
}
