import {redirect} from "next/navigation";
import {NavigationAction} from "@/components/navigation/navigation-action";
import {Separator} from "@/components/ui/separator";
import {NavigationItem} from "@/components/navigation/navigation-item";
import {ModeToggle} from "@/components/mode-toggle";
import {ScrollArea} from "@/components/ui/scroll-area";
import {NavItem} from "@/type/NavItem";

export const NavigationSidebar = async ({
  navItems
}: {
  navItems: NavItem[]
}) => {
  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-gray4 py-3'>
      {/*<NavigationAction/>*/}
      {/*<Separator*/}
      {/*  className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto'/>*/}
      <ScrollArea className='flex-1 w-full'>
        <li className='mb-4'>
          {navItems.map(i => (
            <ul key={i.id}>
              <NavigationItem
                navItem={i}/>
            </ul>
          ))}
        </li>
      </ScrollArea>
      <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
        <ModeToggle/>
      </div>
    </div>
  );
};
