'use client'

import { useEffect } from "react";


export default function Error({error,reset}:{error:Error & {digest?:string}; reset:()=>void}) {
   
    useEffect(() => {
        console.log(error)
    }, [error])

  return (
    <main className=' flex h-full flex-col items-center justify-center'>
      <h2 className="text-center text-lg text-red-600 ">
Ooops! something went wrong...
      </h2>
      <button className="px-4 py-2 bg-blue-600 mt-4 hover:bg-blue-400 text-white rounded-lg transition-colors"
      onClick={()=>reset()}>
        Try again.. 
      </button>
    </main>
  )
}
