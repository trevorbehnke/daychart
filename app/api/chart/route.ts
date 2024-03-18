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
