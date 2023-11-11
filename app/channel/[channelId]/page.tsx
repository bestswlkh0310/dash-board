"use client";

import {Card} from "@/components/ui/card";
import {useEffect, useState} from "react";
import axios from "axios";
import {News} from "@/app/api/news/route";
import DisplayAds from "@/components/ui/DisplayAds";

interface Params {
  channelId: string
}

export default function Channel({
  params
}: {
  params: Params
}) {

  const [newsList, setNewsList] = useState<News[]>([]);

  const handleNews = (category: string) => {

  };

  useEffect(() => {

    handleNews(params.channelId);

    axios.get('/api/news')
      .then(e => {
        setNewsList(e.data);
      });
  }, []);

  return (
    <div className={"flex"}>
      <div className={"m-2"}>
        <li>
          {newsList.map(i => (
            <ul key={i.title} className={"mb-2"}>
              <DisplayAds/>
              <Card className={"h-40 flex flex-col p-2"}>
                <div>{i.title}</div>
                <div>{i.description}</div>
                <div>{i.url}</div>
              </Card>
            </ul>
          ))}
        </li>

      </div>
    </div>
  )
}