import { NextResponse } from "next/server";
import connect from "../../../utils/database.js"
import Post from "../../../model/Post.js"

export const GET = async (request) => {
 
const url=new URL(request.url)
const username=url.searchParams.get("username")
  try {
    await connect();

    const posts = await Post.find(username &&{username}) ;

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
 
 
const body=await request.json()
const newpost= await new Post(body)

try {
      await connect();
  await newpost.save()
      return new NextResponse(JSON.stringify("post has been created  "), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };
  