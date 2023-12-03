import { deleteInvoice } from '@/app/lib/actions'
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export const CreateInvoice=() =>{
  return (
    <Link href="/dashboard/invoices/create" 
    className='flex h-10 px-4 items-center bg-blue-600 rounded-lg text-sm text-white font-medium transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 '>
      <p className='hidden md:block '>Create Invoice</p>
      <PlusIcon className='h-5 md:ml-4'/>
    </Link>
  )
}

export const UpdateInvoice = ({id}:{id:string}) => {

   return <Link href={`/dashboard/invoices/${id}/edit`} className=' rounded p-2 border  border-orange-500 text-orange-400 hover:border-none hover:text-white hover:bg-orange-300'>
<PencilIcon className='w-5'/>
    </Link>
}

export const DeleteInvoice=({id}:{id:string})=>{
const deleteInvoceById=deleteInvoice.bind(null, id)
return <form action={deleteInvoceById}>
<button className='rounded border p-2 border-red-500 text-red-400 hover:bg-red-400 hover:text-white'>
    <span className=" sr-only">Delete</span>
    <TrashIcon className='w-5'/>
</button>
</form>
}