import { GlobeAltIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { lusitana } from '@/app/ui/font'

export default function AcmeLogo() {
  return (
    <div className='flex items-center text-white gap-1 text-[44px]   font-bold'>
      <GlobeAltIcon  width={44} className='rotate-[17deg]' />
      <span className={lusitana.className}>Acme</span>
    </div>
  )
}
