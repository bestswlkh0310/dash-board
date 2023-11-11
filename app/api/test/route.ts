import {NextResponse} from "next/server";
import { get } from '@vercel/edge-config';

export const GET = async (req: Request) => {

  const result = await get('test');

  console.log('hello')
  return NextResponse.json(result);
}