"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Lock,
  Users,
  Activity,
  TrendingUp,
  TrendingDown,
  Flag,
  Ban,
  Search,
  Filter,
  Clock,
  UserCheck,
  UserX,
  MessageSquare,
  MapPin,
  Bell,
  Zap,
  BarChart3,
  LineChart,
  PieChart
} from "lucide-react";

const moderationStats = [
  { label: "Content Moderated", value: "12,847", change: "+18%", icon: Shield, color: "text-teal-400" },
  { label: "Fake Profiles Blocked", value: "234", change: "-12%", icon: UserX, color: "text-red-400" },
  { label: "Trust Score Avg", value: "94.2%", change: "+3%", icon: Activity, color: "text-green-400" },
  { label: "Response Time", value: "2.3s", change: "-45%", icon: Zap, color: "text-orange-400" }
];

const suspiciousActivity = [
  {
    id: 1,
    type: "fake_emergency",
    user: "user_***47",
    description: "Multiple emergency requests from same location within 1 hour",
    confidence: 94,
    action: "Flagged",
    time: "5 min ago"
  },
  {
    id: 2,
    type: "suspicious_pattern",
    user: "user_***82",
    description: "Unusual posting frequency detected (47 posts/hour)",
    confidence: 87,
    action: "Under Review",
    time: "12 min ago"
  },
  {
    id: 3,
    type: "identity_mismatch",
    user: "user_***23",
    description: "Profile location doesn't match device location",
    confidence: 76,
    action: "Pending",
    time: "25 min ago"
  },
  {
    id: 4,
    type: "spam_behavior",
    user: "user_***91",
    description: "Repeatedly posting identical content to multiple neighborhoods",
    confidence: 91,
    action: "Quarantined",
    time: "1 hour ago"
  }
];

const trustMetrics = [
  { category: "Verified Residents", percentage: 87, color: "bg-teal-500" },
  { category: "Active Contributors", percentage: 72, color: "bg-blue-500" },
  { category: "Emergency Responders", percentage: 45, color: "bg-orange-500" },
  { category: "New Members", percentage: 23, color: "bg-purple-500" },
  { category: "Flagged Accounts", percentage: 8, color: "bg-red-500" }
];

const safetyFeatures = [
  {
    icon: UserCheck,
    title: "Identity Verification",
    description: "Multi-layer verification including phone, address, and community vouching",
    status: "active"
  },
  {
    icon: Shield,
    title: "Content Moderation",
    description: "AI-powered real-time content analysis and flagging",
    status: "active"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Detection",
    description: "Pattern recognition for fake or exaggerated emergencies",
    status: "active"
  },
  {
    icon: MapPin,
    title: "Location Verification",
    description: "Cross-reference of stated location with actual presence",
    status: "active"
  },
  {
    icon: Users,
    title: "Community Vouching",
    description: "Trust propagation through verified community connections",
    status: "active"
  },
  {
    icon: Bell,
    title: "Alert System",
    description: "Instant notifications for suspicious activity patterns",
    status: "active"
  }
];

const moderationTrends = [
  { date: "Mon", blocked: 12, flagged: 45, approved: 234 },
  { date: "Tue", blocked: 18, flagged: 52, approved: 267 },
  { date: "Wed", blocked: 15, flagged: 48, approved: 245 },
  { date: "Thu", blocked: 22, flagged: 61, approved: 289 },
  { date: "Fri", blocked: 19, flagged: 55, approved: 278 },
  { date: "Sat", blocked: 25, flagged: 72, approved: 312 },
  { date: "Sun", blocked: 14, flagged: 41, approved: 198 }
];

export default function SafetyPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "alerts" | "users">("overview");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-teal-500/20">
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              <h1 className="text-3xl font-bold text-white">Trust & Safety Center</h1>
            </div>
            <p className="text-gray-400 ml-11">AI-powered moderation and community trust intelligence</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-white/20">
              <BarChart3 className="w-4 h-4 mr-2" />
              Full Report
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
              <Lock className="w-4 h-4 mr-2" />
              Emergency Lockdown
            </Button>
          </div>
        </div>

        {/* AI Status Banner */}
        <Card className="p-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-500/30 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Safety Engine Active</h3>
                <p className="text-sm text-gray-400">All systems operational • Last scan: 30 seconds ago</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2" />
              Online
            </Badge>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {moderationStats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {stat.change} from last week
                  </p>
                </div>
                <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["overview", "alerts", "users"] as const).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "bg-teal-500 text-white" : "text-gray-400"}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Alerts Panel */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Suspicious Activity Alerts</h2>
                <Badge className="bg-red-500/20 text-red-400">
                  {suspiciousActivity.length} Active
                </Badge>
              </div>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <Input
                  placeholder="Search by user ID or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
              </div>

              <div className="space-y-4">
                {suspiciousActivity.map((alert) => (
                  <div
                    key={alert.id}
                    className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          alert.action === "Quarantined" ? "bg-red-500/20" :
                          alert.action === "Flagged" ? "bg-orange-500/20" :
                          "bg-yellow-500/20"
                        }`}>
                          <AlertTriangle className={`w-5 h-5 ${
                            alert.action === "Quarantined" ? "text-red-400" :
                            alert.action === "Flagged" ? "text-orange-400" :
                            "text-yellow-400"
                          }`} />
                        </div>
                        <div>
                          <p className="text-white font-medium">{alert.type.replace(/_/g, " ")}</p>
                          <p className="text-sm text-gray-500">{alert.user}</p>
                        </div>
                      </div>
                      <Badge variant={
                        alert.action === "Quarantined" ? "destructive" :
                        alert.action === "Flagged" ? "warning" : "secondary"
                      }>
                        {alert.action}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">{alert.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">Confidence:</span>
                          <div className="w-20 h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full"
                              style={{ width: `${alert.confidence}%` }}
                            />
                          </div>
                          <span className="text-xs text-white font-medium">{alert.confidence}%</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {alert.time}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-gray-400">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400">
                          <Ban className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-green-400">
                          <UserCheck className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trust Distribution */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Trust Distribution</h3>
              <div className="space-y-4">
                {trustMetrics.map((metric) => (
                  <div key={metric.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">{metric.category}</span>
                      <span className="text-sm text-white">{metric.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${metric.color} rounded-full`}
                        style={{ width: `${metric.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Moderation Trend */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Weekly Trends</h3>
              <div className="h-32 flex items-end justify-between gap-2">
                {moderationTrends.map((day, index) => (
                  <div key={day.date} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end gap-1 h-24">
                      <div
                        className="flex-1 bg-red-500/50 rounded-t"
                        style={{ height: `${(day.blocked / 30) * 100}%` }}
                      />
                      <div
                        className="flex-1 bg-yellow-500/50 rounded-t"
                        style={{ height: `${(day.flagged / 80) * 100}%` }}
                      />
                      <div
                        className="flex-1 bg-teal-500/50 rounded-t"
                        style={{ height: `${(day.approved / 350) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{day.date}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500/50" />
                  <span className="text-xs text-gray-400">Blocked</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-yellow-500/50" />
                  <span className="text-xs text-gray-400">Flagged</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-teal-500/50" />
                  <span className="text-xs text-gray-400">Approved</span>
                </div>
              </div>
            </Card>

            {/* Safety Features */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Safety Features</h3>
              <div className="space-y-3">
                {safetyFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02]">
                    <div className="p-2 rounded-lg bg-teal-500/20">
                      <feature.icon className="w-4 h-4 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-white">{feature.title}</p>
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-xs text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
