"use client";

import { Container } from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  TrendingUp,
  AlertTriangle,
  Users,
  Activity,
  MapPin,
  ArrowUp,
  ArrowDown,
  Minus,
  Eye,
  Zap
} from "lucide-react";
import { useState } from "react";

const trends = [
  { 
    id: 1,
    type: "spike",
    title: "Increased Elderly Assistance Requests",
    location: "Adyar",
    change: "+45%",
    direction: "up",
    time: "Last 24 hours",
    confidence: 94,
    recommendation: "Deploy 3 additional volunteers to Adyar zone"
  },
  { 
    id: 2,
    type: "cluster",
    title: "Food Shortage Cluster Detected",
    location: "Anna Nagar",
    change: "+28%",
    direction: "up",
    time: "Last 12 hours",
    confidence: 88,
    recommendation: "Activate emergency food distribution"
  },
  { 
    id: 3,
    type: "decline",
    title: "Medical Requests Normalizing",
    location: "T. Nagar",
    change: "-15%",
    direction: "down",
    time: "Last 6 hours",
    confidence: 82,
    recommendation: "Redeploy medical volunteers"
  },
  { 
    id: 4,
    type: "anomaly",
    title: "Unusual Childcare Request Pattern",
    location: "Mylapore",
    change: "+32%",
    direction: "up",
    time: "Last 48 hours",
    confidence: 76,
    recommendation: "Investigate potential community event"
  },
];

const hotspots = [
  { area: "Adyar", requests: 127, volunteers: 23, severity: "high" },
  { area: "Anna Nagar", requests: 98, volunteers: 31, severity: "medium" },
  { area: "T. Nagar", requests: 76, volunteers: 28, severity: "low" },
  { area: "Mylapore", requests: 65, volunteers: 19, severity: "medium" },
  { area: "Nungambakkam", requests: 54, volunteers: 22, severity: "low" },
];

const categoryBreakdown = [
  { name: "Elderly Care", count: 342, change: "+18%", color: "bg-purple-500" },
  { name: "Food & Supplies", count: 289, change: "+12%", color: "bg-orange-500" },
  { name: "Medical", count: 198, change: "-8%", color: "bg-red-500" },
  { name: "Repairs", count: 156, change: "+5%", color: "bg-blue-500" },
  { name: "Childcare", count: 134, change: "+22%", color: "bg-pink-500" },
  { name: "Transportation", count: 89, change: "+3%", color: "bg-teal-500" },
];

export default function InsightsPage() {
  const [timeRange, setTimeRange] = useState("24h");

  return (
    <main className="min-h-screen bg-gray-950">
      <Container className="py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30 px-4 py-2 mb-4">
              <Brain className="w-4 h-4 mr-2" />
              Community Intelligence
            </Badge>
            <h1 className="text-4xl font-bold text-white mb-2">
              AI Trend Intelligence
            </h1>
            <p className="text-gray-400">
              Real-time analysis of neighborhood activity patterns and emerging needs
            </p>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            {["1h", "6h", "24h", "7d"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  timeRange === range
                    ? "bg-violet-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* AI Detection Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 border-violet-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Trend Detections</div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
              </div>
              <div className="text-xs text-violet-400">+4 from last hour</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Active Alerts</div>
                  <div className="text-2xl font-bold text-white">3</div>
                </div>
              </div>
              <div className="text-xs text-orange-400">2 high priority</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 border-teal-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Avg Confidence</div>
                  <div className="text-2xl font-bold text-white">85%</div>
                </div>
              </div>
              <div className="text-xs text-teal-400">+3% from last period</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trend Detections */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-white mb-4">Detected Trends</h2>
            {trends.map((trend) => (
              <Card key={trend.id} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        trend.direction === "up" ? "bg-red-500/20" : "bg-emerald-500/20"
                      }`}>
                        {trend.direction === "up" ? (
                          <ArrowUp className={`w-5 h-5 ${trend.type === "spike" ? "text-red-400" : "text-red-400"}`} />
                        ) : (
                          <ArrowDown className="w-5 h-5 text-emerald-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{trend.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          {trend.location}
                          <span className="text-gray-600">|</span>
                          {trend.time}
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      trend.direction === "up" 
                        ? "bg-red-500/20 text-red-400" 
                        : "bg-emerald-500/20 text-emerald-400"
                    }`}>
                      {trend.change}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="text-sm">
                        <span className="text-gray-400">Confidence:</span>
                        <span className="ml-2 font-semibold text-white">{trend.confidence}%</span>
                      </div>
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            trend.confidence > 90 ? "bg-teal-500" : 
                            trend.confidence > 80 ? "bg-violet-500" : "bg-orange-500"
                          }`}
                          style={{ width: `${trend.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-violet-500/10 border border-violet-500/20 rounded-xl">
                    <div className="text-xs text-violet-400 font-semibold mb-1">AI Recommendation</div>
                    <div className="text-sm text-gray-300">{trend.recommendation}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Hotspots */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  Activity Hotspots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotspots.map((hotspot, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          hotspot.severity === "high" ? "bg-red-500" :
                          hotspot.severity === "medium" ? "bg-orange-500" : "bg-teal-500"
                        }`} />
                        <span className="text-white font-medium">{hotspot.area}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-white">{hotspot.requests}</div>
                        <div className="text-xs text-gray-500">{hotspot.volunteers} volunteers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Breakdown */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                  Category Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryBreakdown.map((cat, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">{cat.name}</span>
                        <span className="text-sm font-semibold text-white">{cat.count}</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden flex">
                        <div 
                          className={`${cat.color} h-full`}
                          style={{ width: `${(cat.count / 342) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{cat.change}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}