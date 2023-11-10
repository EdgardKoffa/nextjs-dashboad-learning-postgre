import { LatestInvoice } from "@/types";
import { lusitana } from "@/app/ui/font";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { clsx } from "clsx";
import { fetchLatestInvoices } from "@/app/lib/data";

export default async function LatestInvoices() {
  /* 
  const latestIvoiceRes = await fetch("http://localhost:3000/api/invoices", {
    method: "GET",
    cache: "no-store",
    next: { tags: ["latestInvoice"] },
  });
 */
  const latestInvoices: LatestInvoice[] = await fetchLatestInvoices()// latestIvoiceRes.json();
  
  return (
    <div className="w-full flex flex-col md:col-span-4">
      <h2 className={`${lusitana.className} text-xl sm:text-2xl mb-4`}>
        Latest Invoices
      </h2>
      <div className="flex flex-col p-4 grow rounded-xl bg-gray-50 justify-between">
        <div className="bg-white p-6">
          {latestInvoices.map((voice, i) => {
            return (
              <div key={i} className={clsx('flex flex-row items-center justify-between py-4',{
                'border-t':i!==0
              })}>
                <div className="flex items-center">
                  <Image
                    className="mr-4 rounded-full"
                    src={voice.profile}
                    width={32}
                    height={32}
                    alt={`${voice.name} 's picture`}
                  />
                  <div className="min-w-0">
                    <p
                    className="truncate text-sm font-semibold md:text-base"
                    >{voice.name}</p>
                    <p
                    className="hidden text-sm text-gray-500 sm:block"
                    >{voice.email}</p>
                  </div>
                </div>
                  <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >{voice.amount}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
