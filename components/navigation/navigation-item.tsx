"use client";

import Image from "next/image";
import {useParams, useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {ActionTooltip} from "@/components/action-tooltip";
import {NavItem} from "@/type/NavItem";

export const NavigationItem = ({
  navItem
}: {
    navItem: NavItem
}) => {

    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/channel/${navItem.id}`);
    }

    return (
        <ActionTooltip
        side='right'
        align='center'
        label={navItem.name}>
            <button
                onClick={() => onClick()}
                className='group relative flex items-center'>
                <div className={cn(
                    'absolute left-0 bg-primary rounded-r-full transition-all w-[4px]',
                    params?.serverId !== navItem.id.toString() && 'group-hover:h-[20px]',
                    params?.serverId === navItem.id.toString() ? 'h-[36px]' : 'h-[8px]'
                )}/>
                <div className={cn('relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden',
                    params?.serverId === navItem.id.toString() && 'bg-primary/10 text-primary rounded-[16px]')}>
                    <Image
                        fill
                        src={navItem.imageUrl}
                        alt='Channel'
                        unoptimized={true}
                    />
                </div>
            </button>

        </ActionTooltip>
    )
}