"use client";

import {Card} from "@/components/ui/card";
import {useEffect, useState} from "react";
import axios from "axios";
import DisplayAds from "@/components/ui/DisplayAds";
import {ItNews} from "@/type/ItNews";

export interface ChannelParams {
  channelId: number
}

export default function Channel({
  params
}: {
  params: ChannelParams
}) {

  const [newsList, setNewsList] = useState<ItNews[]>([]);

  const handleNews = (category: number) => {

  };

  useEffect(() => {

    handleNews(params.channelId);

    axios.get('/api/news')
      .then(e => {
        setNewsList(e.data);
      });
  }, []);

  return (
    <div className={"flex pt-12"}>
      <div className={"m-2"}>
        <li>
          {newsList.map(i => (
            <ul key={i.title} className={"mb-2"}>
              <DisplayAds/>
              <Card className={"flex flex-col p-2"}>
                <a href={i.url} target={"_blank"} className={"text-xl font-normal"}>{i.title}</a>
                <div className={"font-light text-gray-300"}>{i.description}</div>
                <div className={"text-sm text-gray-500"}>{i.createdAt}</div>
              </Card>
            </ul>
          ))}
        </li>

      </div>
    </div>
  )
}