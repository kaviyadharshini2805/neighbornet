"use client";

import { useState } from "react";
import { Container, Heading, Subheading } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Droplet,
  Heart,
  MapPin,
  MessageSquare,
  Search,
  Shield,
  TrendingUp,
  Users,
  Zap,
  Clock,
  CheckCircle,
  Ambulance,
  Home,
  Plus,
  Filter,
  Eye
} from "lucide-react";
import Link from "next/link";

const recentActivity = [
  {
    id: 1,
    type: "emergency",
    title: "Medical assistance needed - Anna Nagar",
    description: "Elderly woman requires blood pressure medication",
    location: "Anna Nagar, Block F",
    time: "5 min ago",
    urgency: "high",
    avatar: "PS"
  },
  {
    id: 2,
    type: "match",
    title: "Volunteer matched - Plumbing help",
    description: "Rajesh accepted to help with flooding issue",
    location: "Adyar, 3rd Street",
    time: "12 min ago",
    urgency: "medium",
    avatar: "RK"
  },
  {
    id: 3,
    type: "donation",
    title: "Blood donation received",
    description: "Type B+ donor confirmed for emergency",
    location: "Tambaram Hospital",
    time: "25 min ago",
    urgency: "low",
    avatar: "AD"
  },
  {
    id: 4,
    type: "safety",
    title: "Trust score updated",
    description: "New verified resident badge assigned",
    location: "Nungambakkam",
    time: "1 hour ago",
    urgency: "low",
    avatar: "VS"
  }
];

const stats = [
  { label: "Active Requests", value: "24", change: "+12%", icon: MessageSquare, color: "text-orange-400" },
  { label: "Volunteers Online", value: "156", change: "+8%", icon: Users, color: "text-teal-400" },
  { label: "Emergencies Today", value: "3", change: "-40%", icon: AlertTriangle, color: "text-red-400" },
  { label: "Community Score", value: "94%", change: "+5%", icon: TrendingUp, color: "text-green-400" }
];

const quickActions = [
  { label: "Request Help", icon: Plus, href: "/dashboard/new-request", color: "from-orange-500 to-red-500" },
  { label: "Offer Help", icon: Heart, href: "/dashboard/offer-help", color: "from-teal-500 to-cyan-500" },
  { label: "Blood Donor", icon: Droplet, href: "/donors", color: "from-red-500 to-pink-500" },
  { label: "Donate", icon: Heart, href: "/donations", color: "from-purple-500 to-indigo-500" }
];

const alerts = [
  {
    type: "warning",
    title: "Flooding Alert - Adyar Area",
    message: "Increased water levels detected. Volunteer coordination active.",
    time: "2 hours ago"
  },
  {
    type: "info",
    title: "Medicine Drive Tomorrow",
    message: "Community medicine collection at Community Hall, 9 AM - 5 PM",
    time: "5 hours ago"
  },
  {
    type: "success",
    title: "Food distribution complete",
    message: "Successfully distributed supplies to 45 families in Nungambakkam",
    time: "Yesterday"
  }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"all" | "emergency" | "help" | "donation">("all");

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Community Dashboard</h1>
            <p className="text-gray-400 mt-1">Real-time overview of your neighborhood</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Request
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
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

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Card className="p-4 bg-white/[0.03] border-white/10 backdrop-blur-xl hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">{action.label}</p>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Feed */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
                <div className="flex gap-2">
                  {(["all", "emergency", "help", "donation"] as const).map((tab) => (
                    <Button
                      key={tab}
                      variant={activeTab === tab ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab(tab)}
                      className={activeTab === tab ? "bg-teal-500 text-white" : "text-gray-400"}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold ${
                      activity.urgency === "high" ? "bg-red-500/20 text-red-400" :
                      activity.urgency === "medium" ? "bg-orange-500/20 text-orange-400" :
                      "bg-teal-500/20 text-teal-400"
                    }`}>
                      {activity.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-white truncate">{activity.title}</h3>
                        <Badge variant={
                          activity.urgency === "high" ? "destructive" :
                          activity.urgency === "medium" ? "warning" : "secondary"
                        } className="text-xs">
                          {activity.urgency}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{activity.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Alerts */}
            <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-red-500/20">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">AI Safety Alerts</h2>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      {alert.type === "warning" && <AlertTriangle className="w-4 h-4 text-orange-400" />}
                      {alert.type === "info" && <Bell className="w-4 h-4 text-blue-400" />}
                      {alert.type === "success" && <CheckCircle className="w-4 h-4 text-green-400" />}
                      <span className="text-sm font-medium text-white">{alert.title}</span>
                    </div>
                    <p className="text-xs text-gray-400 ml-6">{alert.message}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">AI Insights</h2>
                <Badge className="bg-teal-500/20 text-teal-400">Live</Badge>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                    <span className="text-sm text-gray-300">Trend Detection</span>
                  </div>
                  <p className="text-white font-medium">+45% elderly care requests in Adyar area</p>
                  <p className="text-xs text-gray-400 mt-1">AI recommends deploying more volunteers</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">Resource Optimization</span>
                  </div>
                  <p className="text-white font-medium">12 redundant requests detected</p>
                  <p className="text-xs text-gray-400 mt-1">AI clustered similar requests for efficiency</p>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 backdrop-blur-xl">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <Ambulance className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Mode</h3>
                <p className="text-sm text-gray-400 mb-4">Access immediate crisis response</p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Activate Emergency Alert
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
