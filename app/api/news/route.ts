import {NextResponse} from "next/server";
import axios from 'axios';
import cheerio from 'cheerio';
import {ItNews} from "@/type/ItNews";

export const GET = async (request: Request, response: Response) => {
  const result: ItNews[] = [];

  for (let i = 1; i <= 50; i++) {
    try {
      const response = await axios.get(`https://news.hada.io/new?page=${i}`);
      const $ = cheerio.load(response.data);

      const topics = $('.topics').eq(0).find('.topic_row');
      if (topics.length === 0) {
        break;
      }

      topics.each((index, element) => {
        const title = $(element).find('.topictitle').eq(0).text();
        const description = $(element).find('.topicdesc').eq(0).find('a').eq(0).text();
        const url = $(element).find('a').eq(1).attr('href');
        const createdAt = $(element).find('.topicinfo').eq(0).text().split(" ")[4];

        result.push({
          id: i,
          title: title,
          description: description,
          url: url!,
          createdAt: createdAt
        });
      });
    } catch (error) {
      return NextResponse.json({
        message: 'bad request'
      }, {
        status: 400
      });
    }
  }

  return NextResponse.json(result);
}