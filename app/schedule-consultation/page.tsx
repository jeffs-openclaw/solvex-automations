"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ScheduleConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you'd send this to an API endpoint
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <Card className="max-w-md w-full bg-slate-800/50 border-purple-500/20 backdrop-blur">
          <CardHeader className="text-center">
            <div className="text-5xl mb-4">✓</div>
            <CardTitle className="text-white text-2xl">Thank You!</CardTitle>
            <CardDescription className="text-gray-400">
              We&apos;ve received your consultation request. Our team will reach out to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <Link href="/" className="inline-block mb-6 text-gray-400 hover:text-white transition-colors">
          ← Back to Home
        </Link>
        
        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-white text-3xl">Schedule a Consultation</CardTitle>
            <CardDescription className="text-gray-400 text-lg">
              Let&apos;s discuss how AI automation can transform your business
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  Company Name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  placeholder="Your Company Inc."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Tell us about your automation needs *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-gray-500 min-h-[120px]"
                  placeholder="Describe your business challenges and what you'd like to automate..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Submit Consultation Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
