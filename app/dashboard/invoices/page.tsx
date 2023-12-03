import { fetchInvoicesPages } from "@/app/lib/data";
import { lusitana } from "@/app/ui/font";
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import Pagination from "@/app/ui/invoices/pagination";
import Table from "@/app/ui/invoices/table";
import Search from "@/app/ui/search";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";


export const metadata:Metadata={
  title:'Invoices'
}
export default async function InvoicesPage({searchParams}:{searchParams?:{query?:string,page?:string}}) {

  const query=searchParams?.query||''
  const currentPage=Number(searchParams?.page)||1

  const totalPages = await fetchInvoicesPages(query);

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
      {totalPages>0&&<Pagination totalPages={totalPages} currentPage={currentPage} />}
      </div>
    </div>
  );
}
