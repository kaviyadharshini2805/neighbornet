"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MapPin,
  Layers,
  Navigation,
  ZoomIn,
  ZoomOut,
  AlertTriangle,
  Heart,
  Users,
  Shield,
  Filter,
  ChevronRight,
  Activity,
  Droplet,
  Home,
  Plus,
  Minus,
  Maximize2
} from "lucide-react";

const mapFilters = [
  { id: "all", label: "All Activity", icon: MapPin, color: "text-teal-400" },
  { id: "emergency", label: "Emergencies", icon: AlertTriangle, color: "text-red-400" },
  { id: "help", label: "Help Requests", icon: Heart, color: "text-orange-400" },
  { id: "volunteers", label: "Volunteers", icon: Users, color: "text-blue-400" },
  { id: "donors", label: "Blood Donors", icon: Droplet, color: "text-pink-400" },
  { id: "safety", label: "Safety Zones", icon: Shield, color: "text-green-400" }
];

const hotspots = [
  { id: 1, type: "emergency", lat: 40.7128, lng: -74.006, radius: 500, intensity: "high", title: "Medical Emergency" },
  { id: 2, type: "flood", lat: 40.7580, lng: -73.9855, radius: 800, intensity: "critical", title: "Flooding Alert" },
  { id: 3, type: "food", lat: 40.7484, lng: -73.9857, radius: 400, intensity: "medium", title: "Food Distribution" },
  { id: 4, type: "medical", lat: 40.7614, lng: -73.9776, radius: 300, intensity: "low", title: "Medicine Pickup" }
];

const nearbyRequests = [
  { id: 1, type: "help", title: "Groceries needed for elderly", location: "0.3 km", urgency: "medium", avatar: "PS" },
  { id: 2, type: "emergency", title: "Medical assistance required", location: "0.5 km", urgency: "high", avatar: "RK" },
  { id: 3, type: "donation", title: "Blood type B+ needed", location: "0.8 km", urgency: "critical", avatar: "AD" },
  { id: 4, type: "help", title: "Pet walking assistance", location: "1.2 km", urgency: "low", avatar: "VS" }
];

const volunteerClusters = [
  { id: 1, location: "Central Park", count: 24, status: "active" },
  { id: 2, location: "Times Square", count: 18, status: "active" },
  { id: 3, location: "Brooklyn Bridge", count: 12, status: "standby" }
];

export default function MapPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Container>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Smart Crisis Map</h1>
            <p className="text-gray-400 mt-1">Real-time visualization of community activity</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-white/20">
              <Layers className="w-4 h-4 mr-2" />
              Layers
            </Button>
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:opacity-90 text-white">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Mode
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {mapFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-teal-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              <filter.icon className={`w-4 h-4 ${filter.color}`} />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-3">
            <Card className="relative overflow-hidden bg-gray-900 border-white/10">
              {/* Map Visualization */}
              <div className="relative h-[600px] bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Hotspots */}
                {hotspots.map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className={`absolute cursor-pointer transition-transform hover:scale-110 ${
                      hotspot.intensity === "critical" ? "animate-pulse" : ""
                    }`}
                    style={{
                      left: `${30 + hotspot.lng * 10}%`,
                      top: `${30 + hotspot.lat * 10}%`
                    }}
                  >
                    <div className={`relative w-16 h-16 flex items-center justify-center ${
                      hotspot.intensity === "critical" ? "w-20 h-20" :
                      hotspot.intensity === "high" ? "w-16 h-16" :
                      hotspot.intensity === "medium" ? "w-12 h-12" : "w-10 h-10"
                    }`}>
                      <div className={`absolute inset-0 rounded-full ${
                        hotspot.type === "emergency" ? "bg-red-500/30" :
                        hotspot.type === "flood" ? "bg-blue-500/30" :
                        hotspot.type === "medical" ? "bg-pink-500/30" :
                        "bg-orange-500/30"
                      } animate-ping`} style={{ animationDuration: "2s" }} />
                      <div className={`absolute inset-0 rounded-full ${
                        hotspot.type === "emergency" ? "bg-red-500/50" :
                        hotspot.type === "flood" ? "bg-blue-500/50" :
                        hotspot.type === "medical" ? "bg-pink-500/50" :
                        "bg-orange-500/50"
                      }`} />
                      <AlertTriangle className={`w-6 h-6 text-white relative z-10 ${
                        hotspot.type === "emergency" ? "text-red-400" :
                        hotspot.type === "flood" ? "text-blue-400" :
                        hotspot.type === "medical" ? "text-pink-400" :
                        "text-orange-400"
                      }`} />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 px-2 py-1 rounded text-xs text-white">
                      {hotspot.title}
                    </div>
                  </div>
                ))}

                {/* Volunteer Clusters */}
                {volunteerClusters.map((cluster, index) => (
                  <div
                    key={cluster.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${45 + index * 15}%`,
                      top: `${40 + index * 10}%`
                    }}
                  >
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-teal-500/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-teal-500 text-xs text-white flex items-center justify-center font-bold">
                        {cluster.count}
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs text-white">
                      {cluster.location}
                    </div>
                  </div>
                ))}

                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Button size="icon" variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-gray-800 hover:bg-gray-700">
                    <Navigation className="w-4 h-4" />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="bg-gray-800 hover:bg-gray-700"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="text-white font-semibold mb-3">Legend</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="text-sm text-gray-300">Emergency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm text-gray-300">Natural Hazard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-teal-500" />
                      <span className="text-sm text-gray-300">Volunteer Hub</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      <span className="text-sm text-gray-300">Resource Center</span>
                    </div>
                  </div>
                </div>

                {/* Search */}
                <div className="absolute top-4 left-4 w-80">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input
                      placeholder="Search location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-black/80 backdrop-blur-sm border-white/20 text-white"
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <Card className="p-4 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-xl bg-red-500/10">
                  <AlertTriangle className="w-5 h-5 text-red-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">3</p>
                  <p className="text-xs text-gray-400">Active Alerts</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-teal-500/10">
                  <Users className="w-5 h-5 text-teal-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">54</p>
                  <p className="text-xs text-gray-400">Volunteers</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-orange-500/10">
                  <Heart className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">12</p>
                  <p className="text-xs text-gray-400">Open Requests</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-pink-500/10">
                  <Droplet className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">8</p>
                  <p className="text-xs text-gray-400">Blood Donors</p>
                </div>
              </div>
            </Card>

            {/* Nearby Requests */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Nearby Activity</h3>
                <Badge className="bg-red-500/20 text-red-400">Live</Badge>
              </div>
              <div className="space-y-3">
                {nearbyRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        request.urgency === "critical" ? "bg-red-500/20 text-red-400" :
                        request.urgency === "high" ? "bg-orange-500/20 text-orange-400" :
                        request.urgency === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-green-500/20 text-green-400"
                      }`}>
                        {request.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">{request.title}</p>
                        <p className="text-xs text-gray-500">{request.location}</p>
                      </div>
                      <Badge variant={request.urgency === "critical" || request.urgency === "high" ? "destructive" : "secondary"} className="text-xs">
                        {request.urgency}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-teal-400">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Card>

            {/* Volunteer Clusters */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Volunteer Clusters</h3>
              <div className="space-y-3">
                {volunteerClusters.map((cluster) => (
                  <div key={cluster.id} className="p-3 rounded-xl bg-white/[0.02]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-white">{cluster.location}</span>
                      </div>
                      <Badge className={cluster.status === "active" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}>
                        {cluster.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users className="w-3 h-3" />
                      {cluster.count} volunteers
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Prediction */}
            <Card className="p-6 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/20 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-semibold text-white">AI Prediction</h3>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                High probability of flooding in low-lying areas within next 6 hours
              </p>
              <Button size="sm" className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Deploy Pre-emptive Resources
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
