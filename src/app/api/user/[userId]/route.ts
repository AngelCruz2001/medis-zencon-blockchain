`use client`;
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function PUT(req: any, res: any) {
  try {
    await connectMongoDB();
    const { userId } = res.params;
    const user = await User.findById(userId);
    const { status } = await req.json();
    if (user) {
      await User.findByIdAndUpdate(userId, { status });
      return NextResponse.json({
        ok: true,
      });
    } else {
      return NextResponse.json({
        ok: false,
        msg: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      ok: false,
      msg: "Id not valid",
    });
  }
}
