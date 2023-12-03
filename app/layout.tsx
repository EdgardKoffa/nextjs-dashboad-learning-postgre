import '@/app/ui/globals.css'
import { poppins } from './ui/font';
import { Children } from '@/types';
import { Metadata } from 'next';

export const metadata:Metadata={
title:{
  template:"%s | Acme Dashboard",
  default:"Acme Dashboard"
},
description:"The official Next.js Course Dashboard, built with App Router.",
metadataBase:new URL("https://next-learn-dashboard.vercel.sh")
}
export default function RootLayout({

  children,
}: Children) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
