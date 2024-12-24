import { NextResponse } from "next/server";
import { CreateStudentBodyType, StudentsDataType } from "@/constants/types";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const cohort = searchParams.get("cohort") as string;
  const batch = searchParams.get("batch") as string;

  try {
    const data: StudentsDataType[] =
      ((await prisma.students.findMany({
        where: {
          cohort: cohort,
          batch: batch,
        },
      })) as StudentsDataType[]) ?? [];

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", err_msg: error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const body: CreateStudentBodyType = await request.json();

  try {
    const d = await prisma.students.create({
      data: {
        student_name: body.name,
        batch: body.batch,
        cohort: body.cohort,
        courses: body.courses,
        date_joined: new Date(),
        status: body.status,
      },
    });

    if (d.id) {
      return NextResponse.json(
        { success: true, message: "Record created successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Error while creating record." },
        { status: 501 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", err_msg: error },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  const body: CreateStudentBodyType = await request.json();

  try {
    const d = await prisma.students.update({
      where: {
        id: body.id,
      },
      data: {
        student_name: body.name,
        batch: body.batch,
        cohort: body.cohort,
        courses: body.courses,
        status: body.status,
      },
    });

    if (d.id) {
      return NextResponse.json(
        { success: true, message: "Record updated successfully." },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Error while updating record." },
        { status: 501 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", err_msg: error },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const body: CreateStudentBodyType = await request.json();

  try {
    await prisma.students.delete({
      where: {
        id: body.id,
      },
    });

    return NextResponse.json(
      { success: true, message: "Record deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error.", err_msg: error },
      { status: 500 }
    );
  }
}
