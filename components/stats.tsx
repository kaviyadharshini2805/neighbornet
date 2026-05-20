"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { Users, Heart, MapPin, Shield, Activity, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "12,500+", label: "Active Volunteers" },
  { icon: Heart, value: "8,200+", label: "Lives Impacted" },
  { icon: MapPin, value: "340+", label: "Neighborhoods" },
  { icon: Shield, value: "99.2%", label: "Trust Score" },
  { icon: Activity, value: "2,100+", label: "Emergencies Resolved" },
  { icon: TrendingUp, value: "15min", label: "Avg Response Time" }
];

export function Stats() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)]/10 via-transparent to-[var(--accent)]/10" />
      
      <Container className="relative">
        <div className="text-center mb-12">
          <Heading>Building Resilient Communities</Heading>
          <Subheading className="mt-3">
            Real impact, measurable results
          </Subheading>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand)]/20 to-[var(--accent)]/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-[var(--brand)]" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
