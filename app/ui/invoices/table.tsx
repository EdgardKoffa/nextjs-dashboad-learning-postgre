import { InvoicesTable } from "@/types";
import Image from "next/image";
import InvoiceStatus from "./status";
import { formatCurrency } from "@/app/lib/utils";
import { DeleteInvoice, UpdateInvoice } from "./buttons";
import { fetchFilteredInvoices } from "@/app/lib/data";

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const search = JSON.stringify({ query, currentPage });
/* 
  const invoiceRes = await fetch(
    `http://localhost:3000/api/invoices/${search}`,
    {
      method: "GET",
      cache: "no-store",
      next: { tags: ["InvoicesTable"] },
    }
  ); */

  let invoices: InvoicesTable[] = await fetchFilteredInvoices(query,currentPage) //invoiceRes.json();
  //console.log(invoices);
  return (
    <div className="mt-6 flow-root">
      <div className=" inline-block min-w-full align-middle">
        <div className="rounded-lg p-2 md:pt-0 bg-gray-50">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div key={invoice.id} className="mb-2 rounded-md w-full p-4">
                <div className=" flex items-center justify-between gap-3 mx-2 border-b pb-4">
                  <div>
                    <div className="mb-2  flex items-center">
                      <Image
                        src={invoice.profile}
                        height={28}
                        width={28}
                        className="rounded-full mr-2w-[28px] h-[28px]"
                        alt={`${invoice.name}'s profile`}
                      />
                      <p> {invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className=" flex items-center w-full justify-between pt-4">
                  <div>
                    <p className=" text-xl font-medium">
                      {formatCurrency(invoice.amount)}{" "}
                    </p>
                    <p>{invoice.date} </p>
                  </div>
                  <div className=" flex justify-end gap-2 items-center">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-800 md:table">
              <thead className="rounded-lg text-sm font-normal text-left">
                <tr >
                  <th className="px-4 py-5 font-medium sm:pl-6" scope="col">
                    Customer
                  </th>
                  <th className="px-4 py-5 font-medium " scope="col">
                    Email
                  </th>
                  <th className="px-4 py-5 font-medium " scope="col">
                    Amount
                  </th>
                  <th className="px-4 py-5 font-medium " scope="col">
                    Date
                  </th>
                  <th className="px-4 py-5 font-medium " scope="col">
                    Status
                  </th>
                  <th className="py-3 pl-6 pr-3 font-semibold text-red-400  relative" scope="col">
                    <span className=" sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {
                  invoices?.map((invoice)=>(
                    <tr key={invoice.id} className=" w-full text-sm py-3 border-b last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg" >
                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.profile}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
