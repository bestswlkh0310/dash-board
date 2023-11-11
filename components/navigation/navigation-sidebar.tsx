import {redirect} from "next/navigation";
import {NavigationAction} from "@/components/navigation/navigation-action";
import {Separator} from "@/components/ui/separator";
import {NavigationItem} from "@/components/navigation/navigation-item";
import {ModeToggle} from "@/components/mode-toggle";
import {ScrollArea} from "@/components/ui/scroll-area";

export const NavigationSidebar = async () => {
  return (
    <div className='space-y-4 flex flex-col items-center h-full text-primary w-full dark:bg-gray3 py-3'>
      {/*<NavigationAction/>*/}
      {/*<Separator*/}
      {/*  className='h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto'/>*/}
      <ScrollArea className='flex-1 w-full'>
        <div key={1} className='mb-4'>
          <NavigationItem
            id={'2'}
            imageUrl={'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'}
            name={'Home'}/>
        </div>
      </ScrollArea>
      <div className='pb-3 mt-auto flex items-center flex-col gap-y-4'>
        <ModeToggle/>
      </div>
    </div>
  );
};
