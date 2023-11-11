import {ServerHeader} from "@/components/server/server-header";

export const ServerSidebar = async () => {

    return (
        <div className='flex flex-col h-full text-primary w-full dark:bg-gray2 bg-white2'>
            <ServerHeader/>
        </div>
    )
}