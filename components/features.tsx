"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { 
  MessageSquare, 
  Zap, 
  Shield, 
  MapPin, 
  Users, 
  Heart,
  Brain,
  Activity,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Semantic AI Matching",
    description: "Intelligent matching connects helpers with needs using natural language understanding — no keywords required."
  },
  {
    icon: Shield,
    title: "Trust & Safety Engine",
    description: "AI-powered moderation detects fake emergencies, spam, and suspicious behavior in real-time."
  },
  {
    icon: MapPin,
    title: "Smart Crisis Map",
    description: "Interactive map visualization shows emergency hotspots, volunteer clusters, and resource density."
  },
  {
    icon: MessageSquare,
    title: "Voice-to-Post AI",
    description: "Speak naturally and AI transforms your words into structured, categorized requests instantly."
  },
  {
    icon: Heart,
    title: "Blood Donor Network",
    description: "Emergency donor discovery with geolocation-aware matching and instant alert broadcasts."
  },
  {
    icon: TrendingUp,
    title: "Community Intelligence",
    description: "AI trend analysis detects emerging needs before they become crises."
  },
  {
    icon: Users,
    title: "Mutual Aid Marketplace",
    description: "Exchange help, resources, and services within your neighborhood community."
  },
  {
    icon: Activity,
    title: "Real-Time Coordination",
    description: "Live messaging, instant notifications, and emergency broadcasts keep everyone connected."
  }
];

export function Features() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface)] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--brand)]/5 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading className="text-[var(--brand)]">AI-Powered Civic Intelligence</Heading>
          <Subheading className="mt-4">
            Transform chaotic community communication into structured, trusted, and intelligent coordination
          </Subheading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--brand)]/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--accent)]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <h3 className="font-semibold text-white mb-2 group-hover:text-[var(--brand)] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
