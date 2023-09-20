`use client`;
import connectMongoDB from "@/lib/mongodb";
import Pharmacy from "@/models/pharmacy.model";
import { NextApiRequest } from "next";
import { useParams, useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

//export async function GET(req, res) {
//    try {
//      await connectMongoDB();
//
//      const { pharmacyId } = res.params;
//
//      console.log("Received pharmacyId:", pharmacyId);
//
//      const pharmacy = await Pharmacy.findById(pharmacyId);
//      if (pharmacy) {
//        return res.json({
//          ok: true,
//          data: pharmacy
//        });
//      } else {
//        return res.json({
//          ok: false,
//          msg: `Pharmacy with ID: ${pharmacyId} was not found.`,
//        });
//      }
//    } catch (error) {
//      return res.json({
//        ok: false,
//        msg: `Error occurred: ${error.message}`,
//      });
//    }
//}
//

export async function PUT(req: any, res: any) {
  try {
    await connectMongoDB();
    const { pharmacyId } = res.params;
    const pharmacy = await Pharmacy.findById(pharmacyId);
    const modify = await req.json();
    if (pharmacy) {
      await Pharmacy.findByIdAndUpdate(pharmacyId, modify);
      return NextResponse.json({
        ok: true,
      });
    } else {
      return NextResponse.json({
        ok: false,
        msg: `Pharmacy with ID: ${pharmacyId} was not found.`,
      });
    }
  } catch (error) {
    return NextResponse.json({
      ok: false,
      msg: `ID not valid. ${error}`,
    });
  }
}

export async function DELETE(req: any, res: any) {
    try {
      await connectMongoDB();
      const { pharmacyId } = res.params;
      const pharmacy = await Pharmacy.findById(pharmacyId);
      if (pharmacy) {
        await Pharmacy.findByIdAndDelete(pharmacyId);
        return NextResponse.json({
          ok: true,
          msg: `Pharmacy with ID: ${pharmacyId} was deleted.`,
        });
      } else {
        return NextResponse.json({
          ok: false,
          msg: `Pharmacy with ID: ${pharmacyId} not found.`,
        });
      }
    } catch (error) {
      return NextResponse.json({
        ok: false,
        msg: `ID not valid: ${error}`,
      });
    }
  }
