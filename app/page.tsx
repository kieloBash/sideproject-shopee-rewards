import Image from "next/image";
import Logo from "@/public/liz-logo-2.png";
import GoToButton from "@/components/global/go-to-btn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative bg-main-200">
      <h1 className="text-5xl text-main-default font-bold drop-shadow-lg -mb-8">
      StylizBoutique
      </h1>
      <Image width={500} src={Logo} alt="logo" className="drop-shadow-lg" />
      <GoToButton />
    </main>
  );
}
