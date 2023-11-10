import React, { Suspense } from "react";
import { lusitana } from "@/app/ui/font";
import RevenueChart from "@/app/ui/dashboad/revenue-chart";
import CardsWrapper, { Card } from "@/app/ui/dashboad/cards";
import LatestInvoices from "@/app/ui/dashboad/latest-invoices";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from "@/app/ui/skeletons";

export default async function DashboardPage() {
  
  return (
    <main>
      <h1
        className={`${lusitana.className} mb-4 text-xl md:text-2xl text-blue-700`}
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
       <Suspense fallback={<CardsSkeleton/>}>
        <CardsWrapper/>
       </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-5 lg:grid-cols-9">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
