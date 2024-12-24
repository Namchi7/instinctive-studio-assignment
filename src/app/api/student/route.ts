import { NextResponse } from "next/server";
import { StudentsDataType } from "@/constants/types";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id") as string;

  try {
    const data: StudentsDataType | null = (await prisma.students.findUnique({
      where: {
        id: id,
      },
    })) as StudentsDataType;

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", err_msg: error },
      { status: 500 }
    );
  }
}
