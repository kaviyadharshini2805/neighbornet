"use client";

import { Container, Heading, Subheading } from "@/components/container";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NeighborNet helped us coordinate emergency relief within minutes during the flooding. The AI matching connected us with volunteers who had boats before we even finished posting.",
    author: "Priya Sharma",
    role: "Community Organizer, Adyar",
    avatar: "PS"
  },
  {
    quote: "The blood donor network saved my grandfather's life. The AI found 3 compatible donors within 2km radius in under 10 minutes during a critical emergency.",
    author: "Rajesh Kumar",
    role: "Resident, Anna Nagar",
    avatar: "RK"
  },
  {
    quote: "As a single mother working night shifts, the elderly care matching connected me with a neighbor who checks on my mother daily. The AI understood exactly what we needed.",
    author: "Anita Devi",
    role: "Healthcare Worker, Tambaram",
    avatar: "AD"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-[var(--surface)]/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading>Stories of Community Strength</Heading>
          <Subheading className="mt-4">
            Real experiences from neighborhoods transformed by civic intelligence
          </Subheading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--brand)]/10 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[var(--brand)]/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--accent)] flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
