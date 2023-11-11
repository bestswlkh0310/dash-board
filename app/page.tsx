"use client"

import Image from 'next/image'
import styles from './page.module.css'
import {ThemeProvider} from "next-themes";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <main className={styles.main}>
          <ModeToggle/>
        </main>
      </ThemeProvider>
  )
}
