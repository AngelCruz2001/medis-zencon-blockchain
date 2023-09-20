import connectMongoDB from "@/lib/mongodb";
import Pharmacy from "@/models/pharmacy.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const pharmacy = await req.json()
    await connectMongoDB();
    const info = await Pharmacy.create(pharmacy);
    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      ok: false,
      msg: `Error to load the pharmacy ${error}`
    });
  }
}
