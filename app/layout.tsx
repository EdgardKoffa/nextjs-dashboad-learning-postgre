import '@/app/ui/globals.css'
import { poppins } from './ui/font';
import { Children } from '@/types';
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
