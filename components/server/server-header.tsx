"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    ChevronDown, LogOut, PlusCircle,
    Settings, Trash,
    UserPlus, Users
} from "lucide-react";
import {useModal} from "@/hooks/use-modal-store";

export const ServerHeader = () => {
    const {onOpen} = useModal();

    return (
        <DropdownMenu>
            {/*<DropdownMenuTrigger*/}
            {/*className='focus:outline-none'*/}
            {/*asChild>*/}
            {/*    <button*/}
            {/*    className='w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition'>*/}
            {/*        {"hello"}*/}
            {/*        <ChevronDown className='h-5 w-5 ml-auto'/>*/}
            {/*    </button>*/}
            {/*</DropdownMenuTrigger>*/}
            <DropdownMenuContent
            className='w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]'>
                {/*{isModerator && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        onClick={() => onOpen('invite', { server: server })}*/}
                {/*        className='text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        초대하기*/}
                {/*        <UserPlus className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}
                {/*{isAdmin && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        className='px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        서버 설정*/}
                {/*        <Settings className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}
                {/*{isAdmin && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        className='px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        멤버 관리*/}
                {/*        <Users className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}
                {/*{isModerator && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        className='px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        채널 생성*/}
                {/*        <PlusCircle className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}
                {/*{isModerator && (*/}
                {/*    <DropdownMenuSeparator/>*/}
                {/*)}*/}
                {/*{isAdmin && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        className='text-rose-500 px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        서버 삭제*/}
                {/*        <Trash className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}
                {/*{!isAdmin && (*/}
                {/*    <DropdownMenuItem*/}
                {/*        className='text-rose-500 px-3 py-2 text-sm cursor-pointer'>*/}
                {/*        서버 나가기*/}
                {/*        <LogOut className='h-4 w-4 ml-auto'/>*/}
                {/*    </DropdownMenuItem>*/}
                {/*)}*/}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}