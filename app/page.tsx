"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Shield,
  Zap,
  Users,
  MapPin,
  Heart,
  MessageSquare,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Activity,
  Droplet,
  Sparkles,
  Globe,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

const heroImage = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/21806/images/1779276037300-hero-neighbornet";
const dashboardImage = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/21806/images/1779276038390-dashboard-neighbornet";

const features = [
  {
    icon: Brain,
    title: "Semantic AI Matchmaking",
    description: "Describe your need naturally. Our AI understands intent and connects you with the right helpers using embeddings.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Trust & Safety Engine",
    description: "AI-powered content moderation, spam detection, and behavior analysis to keep your community safe.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: AlertTriangle,
    title: "Crisis Intelligence",
    description: "Real-time trend detection, emergency clustering, and predictive alerts for neighborhood crises.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: MapPin,
    title: "Smart Community Map",
    description: "Interactive Leaflet maps showing requests, volunteers, safe zones, and donation density.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Droplet,
    title: "Blood Donor Network",
    description: "AI-powered emergency donor discovery with blood type matching and geolocation awareness.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Community Donation Pool",
    description: "Transform individual donations into shared community support with AI-optimized distribution.",
    color: "from-green-500 to-teal-500"
  }
];

const stats = [
  { value: "15K+", label: "Active Residents" },
  { value: "98%", label: "Trust Score" },
  { value: "2.5K+", label: "Requests Helped" },
  { value: "45min", label: "Avg Response Time" }
];

const testimonials = [
  {
    quote: "NeighborNet helped us coordinate flood relief for 200+ families in just 48 hours.",
    author: "Priya Sharma",
    role: "Community Organizer, Adyar"
  },
  {
    quote: "The AI matching connected me with a plumber within minutes. My grandmother was saved from a flooded home.",
    author: "Rajesh Kumar",
    role: "Volunteer, Anna Nagar"
  },
  {
    quote: "We found 15 blood donors in under an hour during an emergency. The speed was incredible.",
    author: "Dr. Arun Venkat",
    role: "Medical Coordinator"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-white/10">
        <Container>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NeighborNet</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link>
              <Link href="/matchmaking" className="text-gray-400 hover:text-white transition-colors">AI Matchmaking</Link>
              <Link href="/donors" className="text-gray-400 hover:text-white transition-colors">Blood Donors</Link>
              <Link href="/map" className="text-gray-400 hover:text-white transition-colors">Smart Map</Link>
              <Link href="/safety" className="text-gray-400 hover:text-white transition-colors">Safety</Link>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white">Sign In</Button>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(" + heroImage + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40" />
        
        <div className="absolute top-32 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2 text-sm mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Civic Intelligence
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Your Neighborhood&apos;s{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI-Powered
                </span>{" "}
                Safety Net
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                NeighborNet transforms chaotic local communication into structured, trusted, and intelligent community coordination. Crisis response, mutual aid, and AI-driven matchmaking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="h-14 px-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Helping
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Explore Map
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20">
                <img
                  src={dashboardImage}
                  alt="NeighborNet Dashboard"
                  className="w-full rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              </div>
              
              <div className="absolute -left-8 top-1/4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Request Matched</p>
                    <p className="text-gray-400 text-sm">Plumber found in 3 min</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Emergency Alert</p>
                    <p className="text-gray-400 text-sm">2 active in area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
        <Container className="relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2 text-sm mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Core Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything Your Community Needs
            </h2>
            <p className="text-xl text-gray-400">
              From AI-powered matchmaking to real-time crisis response, NeighborNet provides the complete toolkit for neighborhood resilience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/10"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gray-950">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-4 py-2 text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Three Steps to Community Resilience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Describe Your Need",
                description: "Speak or type naturally. Our AI understands context, urgency, and intent - no keywords needed.",
                icon: MessageSquare
              },
              {
                step: "02",
                title: "AI Matches & Screens",
                description: "Semantic embeddings find the best matches. Trust & Safety Engine verifies everything.",
                icon: Brain
              },
              {
                step: "03",
                title: "Coordinate & Help",
                description: "Chat with AI assistance, coordinate meetups, and build lasting community bonds.",
                icon: Heart
              }
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10">
                <span className="text-7xl font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-900/50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2 text-sm mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Impact Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-purple-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-teal-500/20 rounded-full blur-3xl" />
        
        <Container className="relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build a{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Stronger Community?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of neighbors already using AI-powered coordination to build safer, more resilient communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-10 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white text-lg">
                <Users className="w-5 h-5 mr-2" />
                Join Your Neighborhood
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 border-white/20 text-white hover:bg-white/10 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-white/10">
        <Container>
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NeighborNet</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered civic intelligence for resilient communities.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link href="/dashboard" className="text-gray-400 hover:text-white text-sm">Dashboard</Link></li>
                <li><Link href="/matchmaking" className="text-gray-400 hover:text-white text-sm">AI Matchmaking</Link></li>
                <li><Link href="/map" className="text-gray-400 hover:text-white text-sm">Smart Map</Link></li>
                <li><Link href="/safety" className="text-gray-400 hover:text-white text-sm">Safety Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/donors" className="text-gray-400 hover:text-white text-sm">Blood Donor Network</Link></li>
                <li><Link href="/messages" className="text-gray-400 hover:text-white text-sm">Messaging</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">API Reference</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm">Community Guidelines</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} NeighborNet. Built with care for communities.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-white text-sm">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">GitHub</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm">Discord</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
