import { ArrowLeftIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-red-400 animate-bounce" />
      <h2 className="text-xl font-semibold first-letter:text-red-700 ">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="flex items-center gap-2 mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
        <ArrowLeftIcon className="w-5" />
      </Link>
    </main>
  )
}
