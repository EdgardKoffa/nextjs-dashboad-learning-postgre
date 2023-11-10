import { lusitana } from "@/app/ui/font";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Table from "@/app/ui/invoices/table";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default function InvoicesPage({searchParams}:{searchParams?:{query?:string,page?:string}}) {
  const query=searchParams?.query||''
  const currentPage=Number(searchParams?.page)||1

  return (
    <div className="w-full">
      <div className=" flex items-center w-full justify-between">
        <h1 className={`${lusitana.className} text-2xl text-green-800`}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 md:mt-8 flex items-center justify-between gap-2">
        <Search placeholder="Search Invoice..."/>
        <CreateInvoice />
      </div>
      <Suspense key={query+currentPage} fallback={<InvoicesTableSkeleton/>}>
        <Table query={query} currentPage={currentPage}/>
      </Suspense>
      <div className="mt-5 flex w-full justify-center ">

      </div>
    </div>
  );
}
