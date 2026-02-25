"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, User, Calendar } from "lucide-react";
import { format } from "date-fns";

interface Call {
  id: string;
  phoneNumber: string;
  duration: number;
  status: string;
  createdAt: string;
  agentName: string;
}

export default function CallsPage() {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const response = await fetch("/api/dashboard/calls");
        const data = await response.json();
        setCalls(data.calls || []);
      } catch (error) {
        console.error("Error fetching calls:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalls();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400">Loading call history...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Call History</h1>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Calls</CardTitle>
        </CardHeader>
        <CardContent>
          {calls.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No calls yet. Your call history will appear here.
            </div>
          ) : (
            <div className="space-y-4">
              {calls.map((call) => (
                <div
                  key={call.id}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-full">
                      <Phone className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{call.phoneNumber}</span>
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            call.status === "completed"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {call.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {call.agentName}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {Math.floor(call.duration / 60)}m {call.duration % 60}s
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {format(new Date(call.createdAt), "MMM d, h:mm a")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
