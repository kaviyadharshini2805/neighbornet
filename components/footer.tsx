"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Github, Twitter, Linkedin, Mail, Heart, Shield, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="12" r="8" strokeDasharray="4 2" />
                </svg>
              </div>
              <span className="text-xl font-bold gradient-text-brand">{siteConfig.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI-powered community resilience. Connecting neighbors, coordinating aid, and building stronger communities through intelligent technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/dashboard" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/matchmaking" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">AI Matchmaking</Link></li>
              <li><Link href="/map" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Smart Map</Link></li>
              <li><Link href="/donors" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Blood Donors</Link></li>
              <li><Link href="/donations" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Donation Center</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              <li><Link href="/#ai-intelligence" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">AI Intelligence</Link></li>
              <li><Link href="/#safety" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Trust & Safety</Link></li>
              <li><Link href="/#realtime" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Real-time Alerts</Link></li>
              <li><Link href="/#analytics" className="text-slate-400 text-sm hover:text-teal-400 transition-colors">Community Analytics</Link></li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-white font-semibold mb-4">Emergency</h4>
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-400 font-medium mb-2">
                <Shield className="w-4 h-4" />
                Crisis Response Ready
              </div>
              <p className="text-slate-400 text-xs mb-3">
                24/7 AI monitoring for community emergencies and urgent needs.
              </p>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
              >
                <Zap className="w-3 h-3" />
                Access Emergency Mode
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. Built with care for communities.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> for resilient neighborhoods
          </p>
        </div>
      </div>
    </footer>
  );
}
