'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

export default function Search({placeholder}:{placeholder:string}) {

  const searchParams=useSearchParams()
  const pathName=usePathname()
  const route=useRouter()

  const handleSearch= useDebouncedCallback((term)=>{
   
    const params=new URLSearchParams(searchParams)
    params.set("page",'1')
    if(term&&term.length>0){
      params.set('query',term)
    }else{
      params.delete('query')
    }
    route.replace(`${pathName}?${params.toString()}`)
  },300)

  return (
    <div className='flex relative flex-1 flex-shrink-0'>
      <label className='sr-only' htmlFor='search'>
        Search
      </label>
      <input id='search' type="search" placeholder={placeholder}

      onChange={(e) =>{handleSearch(e.target.value)}}

      defaultValue={searchParams.get('query')?.toString()}
       className=' peer block w-full border border-x-gray-200 outline-none rounded py-[9px] pl-10 pr-2 shadow-sm focus:shadow-md hover:shadow-md '/>
      <MagnifyingGlassIcon className='absolute left-3  h-[20px] w-[20px] translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
    </div>
  )
}
