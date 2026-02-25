"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, AlertCircle } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Billing</h1>

      {/* Current Plan */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Current Plan</CardTitle>
          <CardDescription className="text-gray-400">
            Manage your subscription and billing information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div>
              <h3 className="text-lg font-semibold text-white">Professional Plan</h3>
              <p className="text-sm text-gray-400">Up to 5 voice agents, unlimited calls</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">$99</div>
              <div className="text-sm text-gray-400">per month</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-blue-300">
                Stripe integration is not yet configured. Payment processing will be enabled soon.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Payment Method</CardTitle>
          <CardDescription className="text-gray-400">
            Update your payment information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            disabled
            className="flex items-center gap-2 bg-gray-700 text-gray-400 cursor-not-allowed"
          >
            <CreditCard size={16} />
            Add Payment Method (Coming Soon)
          </Button>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Billing History</CardTitle>
          <CardDescription className="text-gray-400">
            View your past invoices and payments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-400">
            No billing history yet.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
