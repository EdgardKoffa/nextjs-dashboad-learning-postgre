import Image from "next/image";
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline"
import { lusitana } from "@/app/ui/font";
import AcmeLogo from "@/app/ui/acme-logo";

export default function Home() {
  
  return (
    <div className="flex min-h-screen h-screen flex-col gap-2 p-6">
      <div className="flex h-20 shrink-0 items-center md:items-end rounded-lg bg-blue-600 p-4 md:h-52">
        <AcmeLogo/>
      </div>
      <div className=" flex flex-col-reverse md:flex-row  ">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-sky-50 px-6 py-10 md:w-2/5 md:px-20">
       <div className="h-[80px] w-[80px] rounded-full bg-blue-400 flex items-center justify-center animate-bounce">
        <div className=" h-0 w-0 border-b-[30px] border-b-black border-r-[20px] border-r-transparent border-l-transparent border-l-[20px] "></div>
        </div>
        <p className={`${lusitana.className} antialiased text-xl text-gray-800 md:text-2xl md:leading-normal`}>
          <strong>Welcome to Acme</strong>. This is the
           exemple for the{" "}<Link className="text-blue-500" href="https://nextjs.org/learn/">Next.js Learn Course</Link>,
            brought to you by Vercel.
        </p>
        <Link href="/login" className="flex items-center gap-2 self-start rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">          
          <span>Log in</span>
          <ArrowRightIcon color="white" width={15} />
        </Link>
      </div>
      <div className="flex items-center justify-center p-6  md:w-3/5 md:px-28 md:py-12">
       <Image src="/hero-desktop.png" width={1000} height={760} alt="" className="hidden md:block" />
       <Image src="/hero-mobile.png" width={560} height={620} alt="" className="block md:hidden" />
      </div>
      </div>
    </div>
  );
}
