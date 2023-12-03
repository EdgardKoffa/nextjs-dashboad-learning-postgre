
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex flex-col gap-2 p-2 rounded h-screen">
      <div className=" flex items-end text-white h-32 bg-blue-600 rounded px-5 py-1">
        <AcmeLogo />
      </div>
      <NavLinks />
      <div className="rounded flex flex-1 py-2 px-3 gap-3 items-center  bg-sky-50"></div>
      <form
        action={async () => {
          'use server'
          await signOut();
        }} 
      >
        <button
          type="submit"
          className="rounded-md flex w-full md:justify-start p-3 md:py-2 md:px-3 gap-2 grow font-medium text-sm justify-center items-center bg-gray-50 hover:bg-red-100 hover:text-red-500"
        >
          <PowerIcon width={24} />
          <span className="hidden md:block">Sign Out</span>
        </button>
      </form>
    </div>
  );
}
