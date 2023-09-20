"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import User from "../../models/user.model";

import { connectToDB } from "../mongodb";

interface Params {
  name: String;
  // lastName: String;
  // addressLine1: String;
  // addressLine2: String;
  // zipCode: Number;
  // city: String;
  // country: String;
  // phoneNumber: String;
  // email: String;
  // password: String;
  // wallet: String;
  // role: String;
  // status: String;
  // lat: String;
  // lng: String;
}

export async function addUser(
  {
    name,
    // lastName,
    // addressLine1,
    // addressLine2,
    // zipCode,
    // city,
    // country,
    // phoneNumber,
    // email,
    // password,
    // wallet,
    // role,
    // status,
    // lat,
    // lng
}:
 Params): Promise<void> {
  try {
    // connectToDB();

    return console.log(name)
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}
