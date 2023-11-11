import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import 'tailwindcss/tailwind.css'
import {ThemeProvider} from "@/components/provider/theme-provider";
import {ServerSidebar} from "@/components/server/server-sidebar";
import {NavigationSidebar} from "@/components/navigation/navigation-sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='h-full'>
            <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
            <NavigationSidebar/>
            </div>
            <main className="md:pl-[72px] h-full">
              <div className='hidden md:flex w-60 z-20 flex-col fixed inset-y-0'>
                <ServerSidebar/>
              </div>
              {children}
            </main>
          </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
