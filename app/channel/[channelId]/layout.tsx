import React from "react";
import {ChannelParams} from "@/app/channel/[channelId]/page";
import {dummyItems} from "@/constant/constant";
import {NavItem} from "@/type/NavItem";

export default function Channel({
  params,
  children,
}: {
  params: ChannelParams
  children: React.ReactNode,
}) {
  const channel = dummyItems.filter(i => i.id == params.channelId)[0];

  return (
    <div className={"md:pl-60"}>
      <div className={"flex pl-4 items-center w-full h-12 bg-gray3 fixed z-10"}>{channel?.name}</div>
      {children}
    </div>
  )
}