"use client";

import {Card} from "@/components/ui/card";
import {useEffect, useState} from "react";
import axios from "axios";
import {News} from "@/app/api/news/route";

export default function Channel() {

  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
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
              <Card className={"w-100 h-40 flex flex-col p-2"}>
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