import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import AuthSection from "./components/AuthSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">AI-Powered Automation</Badge>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Solvex Automations
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge AI automation solutions. 
          Save time, reduce costs, and scale effortlessly.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* Auth Section */}
      <section className="container mx-auto px-4 py-16 flex justify-center">
        <AuthSection />
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Why Choose Solvex?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">🚀 Lightning Fast</CardTitle>
              <CardDescription className="text-gray-400">
                Deploy automation workflows in minutes, not months
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              Our pre-built AI models and templates get you up and running instantly.
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">🎯 Precision AI</CardTitle>
              <CardDescription className="text-gray-400">
                State-of-the-art machine learning models
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              Leverage GPT-4, Claude, and custom-trained models for your specific needs.
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-white">💰 Cost Effective</CardTitle>
              <CardDescription className="text-gray-400">
                Reduce operational costs by up to 70%
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-300">
              Automate repetitive tasks and free your team for strategic work.
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Workflow Automation", emoji: "⚙️" },
            { title: "AI Chatbots", emoji: "💬" },
            { title: "Data Processing", emoji: "📊" },
            { title: "Integration Services", emoji: "🔗" },
          ].map((service, idx) => (
            <Card key={idx} className="bg-slate-800/50 border-purple-500/20 backdrop-blur hover:border-purple-500/50 transition-all cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">{service.emoji}</div>
                <CardTitle className="text-white text-lg">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-white/10" />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Automate Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of companies already benefiting from AI automation.
        </p>
        <Link href="/schedule-consultation">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Schedule a Consultation
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; {new Date().getFullYear()} Solvex Automations. All rights reserved.</p>
      </footer>
    </div>
  )
}
