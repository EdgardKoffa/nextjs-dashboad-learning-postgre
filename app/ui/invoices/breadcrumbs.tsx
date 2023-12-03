import clsx from "clsx";
import { lusitana } from "@/app/ui/font";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({breadcrumbs}:{breadcrumbs:Breadcrumb[]}) {
  return <nav  aria-label="Breadcrumb" className="mb-6 block">
    <ol className={clsx(lusitana.className,'flex text-xl md:text-2xl')}>
        {
          breadcrumbs.map((breadcrumb,index)=>(
            <li key={index} className={clsx(breadcrumb.active?'text-sky-700':'text-gray-500')}>
              <Link href={breadcrumb.href} >{breadcrumb.label} </Link>
              {index<breadcrumbs.length-1?<span className="mx-1 inline-block text-slate-600">/</span>:''}
            </li>
          ))
        }
    </ol>

  </nav>;
}
