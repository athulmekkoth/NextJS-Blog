import { NextResponse } from "next/server";
import connect from "@/utils/database.js"
import Post from "@/model/Post.js"


export const GET = async (request,{params}) => {
 const {id}=params
console.log(id)
  try {
    await connect();

  
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
