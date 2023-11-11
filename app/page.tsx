import Image from 'next/image'
import styles from './page.module.css'
import {ThemeProvider} from "next-themes";
import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";

export default function Page() {
  return (
    <main className={"flex flex-col justify-between items-center p-24 min-h-screen"}>

      <ModeToggle/>
    </main>
  )
}
