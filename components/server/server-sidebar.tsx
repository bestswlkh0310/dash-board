import {ServerHeader} from "@/components/server/server-header";

export const ServerSidebar = async () => {

    return (
        <div className='flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]'>
            <ServerHeader/>
        </div>
    )
}