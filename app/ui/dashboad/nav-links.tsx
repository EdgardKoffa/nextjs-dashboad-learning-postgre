'use client'
import { HomeIcon,UserGroupIcon,DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


var links=[
    {name:"Home",href:"/dashboard",icon:HomeIcon},
    {name:"Invoices",href:"/dashboard/invoices",icon:DocumentDuplicateIcon},
    {name:"Customers",href:"/dashboard/customers",icon:UserGroupIcon}
]
export default function NavLinks() {
    const pathName=usePathname()
  return (
    <>
      { links.map(link =>{
     const  LinkIcon=link.icon
       return (
       <Link key={link.name} href={link.href} 
       className={`rounded-md flex h-[48px] grow justify-center p-3 gap-2 items-center text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px3 active:${pathName===link.href?" bg-sky-100  text-blue-600":" bg-sky-50"}` }
       >
        <LinkIcon className="w-6" />
        <p className="hidden sm:block" > {link.name}</p>
     </Link>
       )
      }
     )}
    </>
  )
}
