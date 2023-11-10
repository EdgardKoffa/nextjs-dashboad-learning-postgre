import { generateYAxis } from "@/app/lib/utils";
import { Revenue } from "@/types";
import React from "react";
import { lusitana } from "@/app/ui/font";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { fetchRevenue } from "@/app/lib/data";

export default async function RevenueChart() {

 /*  const revenueRes = await fetch("http://localhost:3000/api/revenue", {
    method: "GET",
    cache: "no-store",
    next: { tags: ["revenue"] },
  }); */
  const revenue: Revenue[] = await fetchRevenue() //revenueRes.json();
  
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return (
      <div className="flex w-full h-screen items-center justify-center p-12">
        <p className="mt-4 text-xl animate-ping text-amber-500">
          No data to display!...
        </p>
      </div>
    );
  }

  return (
    <div className=" w-full md:col-span-5">
      <h1 className={`${lusitana.className} mb-4 text-xl md:2xl `}>
        Recent Revenue
      </h1>
      <div className="rounded-xl p-4 bg-gray-100">
        <div className="flex mt-0 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {
            yAxisLabels.map((label) => (
              <p key={label} >{label}</p>
            ))}
          </div>
              <div className=" grid grid-cols-12 items-end  gap-2 md:gap-4">
          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center  gap-2">
              <div
                className="w-full px-3 rounded-t bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`,
                }}
              ></div>
              <p className="-rotate-90 text-sm text-lime-600 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
          </div>
        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-green-500" />
          <h3 className="ml-2 text-sm text-blue-600 ">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
