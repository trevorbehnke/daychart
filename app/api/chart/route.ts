import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb"; // Adjust the import path as necessary

export async function GET(req: Request) {
  try {
    // Authenticate the user
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Get the user events from prismadb
    const userEvents = await prismadb.userEvent.findMany({
      where: { userId: userId },
    });

    // Check if there are no events for the user
    if (userEvents.length === 0) {
      return new NextResponse("No events found for user.", { status: 404 });
    }

    // Return the user events
    return new NextResponse(JSON.stringify(userEvents), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("[FETCH_USER_EVENTS_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// This is the POST method for the /api/chart route
export async function POST(req: Request) {
  try {
    // Authenticate the user
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Get the request body
    const body = await req.json();

    // Create a new event for the user
    const newEvent = await prismadb.userEvent.create({
      data: {
        userId: userId,
        title: body.title,
        description: body.description,
        startDate: new Date(body.startDate).toISOString(),
        endDate: new Date(body.endDate).toISOString(),
      },
    });

    // Return the new event
    return new NextResponse(JSON.stringify(newEvent), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("[CREATE_USER_EVENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
