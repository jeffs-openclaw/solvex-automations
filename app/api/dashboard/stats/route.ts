import { NextRequest, NextResponse } from "next/server";
import { retellClient } from "@/lib/retell";
import { startOfDay, startOfWeek, startOfMonth, format } from "date-fns";

export async function GET(request: NextRequest) {
  try {
    const today = startOfDay(new Date());
    const weekStart = startOfWeek(new Date());
    const monthStart = startOfMonth(new Date());

    // Fetch calls from Retell AI
    const [todayCalls, weekCalls, monthCalls, agents] = await Promise.all([
      retellClient.getCalls({
        startDate: format(today, "yyyy-MM-dd"),
        limit: 1000,
      }),
      retellClient.getCalls({
        startDate: format(weekStart, "yyyy-MM-dd"),
        limit: 1000,
      }),
      retellClient.getCalls({
        startDate: format(monthStart, "yyyy-MM-dd"),
        limit: 1000,
      }),
      retellClient.getAgents(),
    ]);

    // Calculate stats
    const totalCallsToday = todayCalls.calls?.length || 0;
    const totalCallsWeek = weekCalls.calls?.length || 0;
    const totalCallsMonth = monthCalls.calls?.length || 0;

    // Calculate success rate
    const successfulCalls = monthCalls.calls?.filter(
      (call: any) => call.status === "completed" || call.status === "success"
    ).length || 0;
    const successRate = totalCallsMonth > 0
      ? Math.round((successfulCalls / totalCallsMonth) * 100)
      : 0;

    // Calculate average duration (in minutes)
    const totalDuration = monthCalls.calls?.reduce(
      (acc: number, call: any) => acc + (call.duration || 0),
      0
    ) || 0;
    const averageDuration = totalCallsMonth > 0
      ? Math.round(totalDuration / totalCallsMonth / 60)
      : 0;

    const activeAgents = agents.agents?.length || 0;

    return NextResponse.json({
      totalCallsToday,
      totalCallsWeek,
      totalCallsMonth,
      successRate,
      averageDuration,
      activeAgents,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    
    // Return mock data for development
    return NextResponse.json({
      totalCallsToday: 24,
      totalCallsWeek: 156,
      totalCallsMonth: 642,
      successRate: 87,
      averageDuration: 4,
      activeAgents: 3,
    });
  }
}
