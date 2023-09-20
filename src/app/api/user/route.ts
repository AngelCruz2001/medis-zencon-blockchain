import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const user = await req.json()
    await connectMongoDB();
    const info = await User.create(user);
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      ok: false,
      msg: "Error to load the user",
    });
  }
}
