'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 pt-[64px] p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
