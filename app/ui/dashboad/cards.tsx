import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/font";

const iconMap = {
  collected: BanknotesIcon,
  customers: UsersIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export const Card = ({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "collected" | "customers" | "invoices" | "pending";
}) => {

  const Icon=iconMap[type]
  return <div className="rounded-xl p-2 bg-gray-50 shadow-sm">
    <div className="flex p-4">
    {Icon? <Icon className="h-5 w-5 text-gray-800 "/>:null}
    <h3 className="ml-1 text-sm font-medium">{title}</h3>
    </div>
    <p
        className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
  </div>;
};

export default async function CardsWrapper(){
  const allPromisesRes = await fetch(
    "http://localhost:3000/api/total-invoices-customers",
    {
      method: "GET",
      cache: "no-store",
      next: { tags: ["latestInvoice"] },
    }
  );

  const { totalCustomer, totalInvoice, totalPendingInvoice, totalPaidInvoice }=await allPromisesRes.json();
return(
  <>
   <Card
          title="Invoices Collected"
          value={totalPaidInvoice}
          type="collected"
        />
        <Card
          title="Invoices Pending"
          value={totalPendingInvoice}
          type="pending"
        />

        <Card title="Total Invoices" value={totalInvoice} type="invoices" />
        <Card title="Total Customers" value={totalCustomer} type="customers" />
  </>
)
}