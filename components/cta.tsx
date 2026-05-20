"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/20 via-[var(--accent)]/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand)]/30 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Zap className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-sm text-gray-300">Join the civic revolution</span>
          </div>
          
          <Heading className="text-4xl md:text-6xl">
            Your neighborhood deserves{" "}
            <span className="bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] bg-clip-text text-transparent">
              intelligent coordination
            </span>
          </Heading>
          
          <Subheading className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Transform how your community responds to challenges. AI-powered matching, real-time coordination, and trusted relationships.
          </Subheading>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" className="group bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] hover:opacity-90 text-white px-8">
              Get Started Free
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8">
              Watch Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Verified Residents</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[var(--brand)]" />
              <span>Community Owned</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[var(--accent)]" />
              <span>AI Powered</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
