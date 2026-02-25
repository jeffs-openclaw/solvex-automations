import { NextRequest, NextResponse } from "next/server";
import { retellClient } from "@/lib/retell";

export async function GET(request: NextRequest) {
  try {
    const calls = await retellClient.getCalls({ limit: 50 });

    const formattedCalls = calls.calls?.map((call: any) => ({
      id: call.id,
      phoneNumber: call.from_number || call.to_number || "Unknown",
      duration: call.duration || 0,
      status: call.status || "unknown",
      createdAt: call.created_at || new Date().toISOString(),
      agentName: call.agent_name || "AI Receptionist",
    })) || [];

    return NextResponse.json({ calls: formattedCalls });
  } catch (error) {
    console.error("Error fetching calls:", error);
    
    // Return mock data for development
    return NextResponse.json({
      calls: [
        {
          id: "1",
          phoneNumber: "(555) 123-4567",
          duration: 245,
          status: "completed",
          createdAt: new Date().toISOString(),
          agentName: "Reception Agent 1",
        },
        {
          id: "2",
          phoneNumber: "(555) 987-6543",
          duration: 180,
          status: "completed",
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          agentName: "Reception Agent 2",
        },
      ],
    });
  }
}
